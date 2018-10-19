import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the DealPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-deal',
  templateUrl: 'deal.html'
})
export class DealPage {

  tabhomeRoot = 'TabhomePage'
  tabtoggleRoot = 'TabtogglePage'
  tabsquareRoot = 'TabsquarePage'
  tabsettingsRoot = 'TabsettingsPage'


  constructor(public navCtrl: NavController) {}

}
