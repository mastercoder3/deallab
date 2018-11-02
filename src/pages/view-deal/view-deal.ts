import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdddealsProvider } from '../../providers/adddeals/adddeals';

/**
 * Generated class for the ViewDealPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-deal',
  templateUrl: 'view-deal.html',
})
export class ViewDealPage {
  itemId: any;
  viewData: any

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: AdddealsProvider) {
    let id = this.navParams.get('id')
    console.log(id)
    this.api.getDeal(id)
     .subscribe(res =>{
       console.log(res)
      //now we will bind the data to the ngMOdel 
       this.viewData =  res; 
    //  })
  })
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewDealPage');
  }

}
