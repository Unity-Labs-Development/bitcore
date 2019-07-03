import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiProvider, ChainNetwork } from '../../providers/api/api';
import { CurrencyProvider } from '../../providers/currency/currency';
// import { type } from 'os';

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


  public getStatus(chainNetwork: ChainNetwork): Observable<ApiInfo>{
    const url = `${this.apiProvider.getUrlPrefix()}/${chainNetwork.chain}/${
      chainNetwork.network
    }/status?q=getInfo`;
    return this.httpClient.get<ApiInfo>(url);
  }

  
  public getLastBlock(chainNetwork: ChainNetwork): Observable<ApiLastBlock>{
    const url = `${this.apiProvider.getUrlPrefix()}/${chainNetwork.chain}/${
      chainNetwork.network
    }/status?q=getLastBlockHash`;
    return this.httpClient.get<ApiLastBlock>(url);
  }

  public getSync(chainNetwork: ChainNetwork): Observable<ApiSync>{
    const url = `${this.apiProvider.getUrlPrefix()}/${chainNetwork.chain}/${
      chainNetwork.network
    }/sync`;
    return this.httpClient.get<ApiSync>(url);
  }
}