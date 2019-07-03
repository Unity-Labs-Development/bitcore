import { Component, Injectable, ViewChild } from '@angular/core';
import { Events, IonicPage, Nav, NavParams } from 'ionic-angular';
import { LatestBlocksComponent } from '../../components/latest-blocks/latest-blocks';
import { ApiProvider, ChainNetwork } from '../../providers/api/api';
import { InfoProvider } from '../../providers/appstatus/appstatus';
import { CurrencyProvider } from '../../providers/currency/currency';
import { Logger } from '../../providers/logger/logger';

@Injectable()
@IonicPage({
  name: 'status',
  segment: ':chain/:network/status'
})
@Component({
  selector: 'page-status',
  templateUrl: 'status.html'
})
export class StatusPage {
  @ViewChild('latestBlocks')
  public latestBlocks: LatestBlocksComponent;
  public chain: string;
  public statusInfo: any = {};
  public statusLastBlock: any = {};
  public statusSync: any = {};
  private chainNetwork: ChainNetwork;
  private logger: Logger;
  public errorMessage: string;

  public network: string;
  constructor(
    public nav: Nav,
    public navParams: NavParams,
    private apiProvider: ApiProvider,
    private infoProvider: InfoProvider,
    public events: Events,
    public currencyProvider: CurrencyProvider
  ) {
    const chain: string =
      navParams.get('chain') || this.apiProvider.getConfig().chain;
    const network: string =
      navParams.get('network') || this.apiProvider.getConfig().network;

    this.chainNetwork = {
      chain,
      network
    };
    this.apiProvider.changeNetwork(this.chainNetwork);
    this.currencyProvider.setCurrency(this.chainNetwork);
  }

  public ionViewWillLoad(): void {
    this.infoProvider
      .getSync(this.chainNetwork)
      .subscribe(
        data => {
          this.statusSync = {
            status: data.status || 0,
            blockChainHeight: data.blockChainHeight || 0,
            syncPercentage: data.syncPercentage || 0,
            height: data.height || 0,
            error: data.error || 0,
            type: data.type || 0
          };
        },
        err => {
          // this.logger.error(err.message);
          this.errorMessage = err.message;
        }
      );
    this.infoProvider
      .getStatus(this.chainNetwork)
      .subscribe(
        data => {
          const info = data.info
          this.statusInfo = {
            version: info.version || 0,
            protocolversion: info.protocolversion || 0,
            blocks: info.blocks || 0,
            timeoffset: info.timeoffset || 0,
            connections: info.connections || 0,
            proxy: info.proxy || 0,
            difficulty: info.difficulty || 0,
            testnet: info.testnet || 0,
            relayfee: info.relayfee || 0,
            errors: info.errors || 0,
            network: info.network || 0
          };
        },
        err => {
          // this.logger.error(err.message);
          this.errorMessage = err.message;
        }
    );
    this.infoProvider
      .getLastBlock(this.chainNetwork)
      .subscribe(
        data => {
          this.statusLastBlock = {
            syncTipHash: data.syncTipHash || 0,
            lastblockhash: data.lastblockhash || 0
          }
        },
        err => {
          // this.logger.error(err.message);
          this.errorMessage = err.message;
        }
    );
    
  }
}