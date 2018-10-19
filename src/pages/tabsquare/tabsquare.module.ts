import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsquarePage } from './tabsquare';

@NgModule({
  declarations: [
    TabsquarePage,
  ],
  imports: [
    IonicPageModule.forChild(TabsquarePage),
  ],
})
export class TabsquarePageModule {}
