import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DataRequestPage } from './data-request';

@NgModule({
  declarations: [
    DataRequestPage,
  ],
  imports: [
    IonicPageModule.forChild(DataRequestPage),
  ],
})
export class DataRequestPageModule {}
