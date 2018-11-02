import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabhomePage } from './tabhome';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
  declarations: [
    TabhomePage,
  ],
  imports: [
    IonicPageModule.forChild(TabhomePage),
    NgxQRCodeModule
  ],
})
export class TabhomePageModule {}
