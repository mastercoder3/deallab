import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddealsPage } from './addeals';

@NgModule({
  declarations: [
    AddealsPage,
  ],
  imports: [
    IonicPageModule.forChild(AddealsPage),
  ],
})
export class AddealsPageModule {}
