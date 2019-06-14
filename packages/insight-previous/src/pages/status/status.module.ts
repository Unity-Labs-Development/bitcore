import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ErrorComponentModule } from '../../components/error/error.module';
import { FooterComponentModule } from '../../components/footer/footer.module';
import { HeadNavComponentModule } from '../../components/head-nav/head-nav.module';
import { LatestBlocksComponentModule } from '../../components/latest-blocks/latest-blocks.module';
import { LatestTransactionsComponentModule } from '../../components/latest-transactions/latest-transactions.module';
import { LoaderComponentModule } from '../../components/loader/loader.module';
import { StatusPage } from './status';

@NgModule({
  declarations: [StatusPage],
  imports: [
    IonicPageModule.forChild(StatusPage),
    LatestBlocksComponentModule,
    FooterComponentModule,
    HeadNavComponentModule,
    LatestTransactionsComponentModule,
    LoaderComponentModule,
    ErrorComponentModule
  ],
  exports: [StatusPage]
})
export class StatusPageModule {}