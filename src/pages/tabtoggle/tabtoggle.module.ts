import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabtogglePage } from './tabtoggle';

@NgModule({
  declarations: [
    TabtogglePage,
  ],
  imports: [
    IonicPageModule.forChild(TabtogglePage),
  ],
})
export class TabtogglePageModule {}
