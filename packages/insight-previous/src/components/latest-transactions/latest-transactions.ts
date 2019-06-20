import { HttpClient } from '@angular/common/http';
import { Component, Input, NgZone, OnChanges } from '@angular/core';
import io from 'socket.io-client';
import { ApiProvider } from '../../providers/api/api';
import { CurrencyProvider } from '../../providers/currency/currency';
import { Logger } from '../../providers/logger/logger';
import { RedirProvider } from '../../providers/redir/redir';


@Component({
  selector: 'latest-transactions',
  templateUrl: 'latest-transactions.html'
})
export class LatestTransactionsComponent implements OnChanges {
  // @Input()
  // public refreshSeconds = 10;
  // private timer: any;
  private transactionsNum = 10;
  private loading = true;
  private transactions = [];

  constructor(
    private httpClient: HttpClient,
    private apiProvider: ApiProvider,
    public currency: CurrencyProvider,
    private ngZone: NgZone,
    public redirProvider: RedirProvider,
    private logger: Logger
  ) {
    this.loadTransactions();
    
  }

  public ngOnChanges(): void {
    // if (this.timer) {
    //   clearInterval(this.timer);
    // }

    // this.ngZone.runOutsideAngular(() => {
    //   this.timer = setInterval(() => {
    //     this.ngZone.run(() => {
    //       this.loadTransactions.call(this);
    //     });
    //   }, 1000 * this.refreshSeconds);
    // });
    
  }

  private loadTransactions(): void {

    const chain: string = this.apiProvider.networkSettings.selectedNetwork.chain;
    const network: string = this.apiProvider.networkSettings.selectedNetwork.network;

    const socket = io({ 
      transports: ['websocket'],
      pingInterval:25000,
      pingTimeout:5000
    });


    socket.on('connect', () => {
      socket.emit('room', `/${chain}/${network}/inv`);
      this.logger.log(`join /${chain}/${network}/inv room`);
    });
    socket.on('error', (error) => {
      this.logger.error(error);
    })

    socket.on('disconnect', (reason) => {
      if (reason === 'io server disconnect') {
        // the disconnection was initiated by the server, you need to reconnect manually
        socket.connect();
      }
      // else the socket will automatically try to reconnect
    });

    socket.on('tx', (sanitizedTx) => {
      this.logger.log('reciv a tx');
      this.logger.log(sanitizedTx);
      // add to the front
      this.transactions.unshift(sanitizedTx);
      if (this.transactions.length > this.transactionsNum) {
          // pop a entry from the end
          const trans = this.transactions.pop();
          this.logger.log(`pop a tx`)
          this.logger.log(trans)
      }
    });

    socket.on('block', (block) => {
      this.logger.log('reciv a block');
      this.logger.log(block);
    });
    this.loading = false;
  }

  public goToTx(txId: string): void {
    this.redirProvider.redir('transaction', {
      txId,
      chain: this.apiProvider.networkSettings.selectedNetwork.chain,
      network: this.apiProvider.networkSettings.selectedNetwork.network
    });
  }
}
