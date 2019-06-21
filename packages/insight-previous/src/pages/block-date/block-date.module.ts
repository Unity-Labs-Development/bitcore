import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalenderComponentModule } from '../../components/calender/calender.module'
import { ErrorComponentModule } from '../../components/error/error.module';
import { FooterComponentModule } from '../../components/footer/footer.module';
import { HeadNavComponentModule } from '../../components/head-nav/head-nav.module';
import { LatestBlocksComponentModule } from '../../components/latest-blocks/latest-blocks.module';
import { LatestTransactionsComponentModule } from '../../components/latest-transactions/latest-transactions.module';
import { LoaderComponentModule } from '../../components/loader/loader.module';
import { BlockDatePage } from './block-date';


@NgModule({
  declarations: [BlockDatePage],
  imports: [
    IonicPageModule.forChild(BlockDatePage),
    LatestBlocksComponentModule,
    FooterComponentModule,
    HeadNavComponentModule,
    LatestTransactionsComponentModule,
    LoaderComponentModule,
    ErrorComponentModule,
    CalenderComponentModule
  ],
  exports: [BlockDatePage]
})
export class BlockDatePageModule {}import { from } from 'rxjs/observable/from';
