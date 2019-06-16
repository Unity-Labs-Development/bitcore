import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiProvider, ChainNetwork } from '../../providers/api/api';
import { CurrencyProvider } from '../../providers/currency/currency';
import { type } from 'os';

export interface ApiInfo {
  info: any;
  version: string;
  protocolversion: string;
  blocks: string;
  timeoffset: string;
  connections: string;
  proxy: string;
  difficulty: string;
  testnet: boolean;
  relayfee: string;
  errors: string;
  network: string
}
  
export interface ApiLastBlock {
  syncTipHash: string;
  lastblockhash: string;
}

export interface ApiSync {
  status: string,
  blockChainHeight: string,
  syncPercentage: string,
  height: string,
  error: string,
  type: string,
  startTs: string,
  skippedBlocks: string,
}

@Injectable()
export class InfoProvider {
  constructor(
    public httpClient: HttpClient,
    public currency: CurrencyProvider,
    private apiProvider: ApiProvider
  ) {}


  public getStatus(): Observable<ApiInfo>{
    return this.httpClient.get<ApiInfo>(
      'https://insight.bitpay.com/api/status?q=getInfo'
    ); 
  }

  public getLastBlock(): Observable<ApiLastBlock>{
    return this.httpClient.get<ApiLastBlock>(
      'https://insight.bitpay.com/api/status?q=getLastBlockHash'
    ); 
  }

  public getSync(): Observable<ApiSync>{
    return this.httpClient.get<ApiSync>(
      'https://insight.bitpay.com/api/sync'
    ); 
  }
}