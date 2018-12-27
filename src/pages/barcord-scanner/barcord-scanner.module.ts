import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BarcordScannerPage } from './barcord-scanner';

@NgModule({
  declarations: [
    BarcordScannerPage,
  ],
  imports: [
    IonicPageModule.forChild(BarcordScannerPage),
  ],
})
export class BarcordScannerPageModule {}
