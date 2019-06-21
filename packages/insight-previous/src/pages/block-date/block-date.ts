import { Component, Injectable, ViewChild } from '@angular/core';
import { Events, IonicPage, Nav, NavParams } from 'ionic-angular';
import { LatestBlocksComponent } from '../../components/latest-blocks/latest-blocks';
import { ApiProvider, ChainNetwork } from '../../providers/api/api';
import { CurrencyProvider } from '../../providers/currency/currency';
import { PriceProvider } from '../../providers/price/price';
import { stringify } from '@angular/core/src/render3/util';

@Injectable()
@IonicPage({
  name: 'blockdate',
  segment: ':chain/:network/blockdate'
})
@Component({
  selector: 'page-block-date',
  templateUrl: 'block-date.html'
})
export class BlockDatePage {
  @ViewChild('latestBlocks')
  public latestBlocks: LatestBlocksComponent;
  public chain: string;
  private chainNetwork: ChainNetwork;
  public network: string;
  public dateString: string;
  constructor(
    public nav: Nav,
    public navParams: NavParams,
    private apiProvider: ApiProvider,
    private priceProvider: PriceProvider,
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
    this.priceProvider.setCurrency();
  }

  public openPage(page: string): void {
    this.nav.push(page, {
      chain: this.chain,
      network: this.network
    });
  }

  public onCustomClicked(selectedDay): void{
    console.log("selectDay",selectedDay.year,selectedDay.month,selectedDay.day)
    let actday :string
    if(selectedDay.month<10){
      selectedDay.month = '0'+ selectedDay.month
    }else{
      selectedDay.month = selectedDay.month.string
    }

    if(selectedDay.day<10){
      actday = '0'+ selectedDay.day.toString()
    }else{
      actday = selectedDay.day.toString()
    }
    
    this.dateString = selectedDay.year+selectedDay.month+actday
    this.latestBlocks.dateString = this.dateString
    this.latestBlocks.getBlockByDate()
  }
}
