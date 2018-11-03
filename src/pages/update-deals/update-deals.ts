import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdddealsProvider } from '../../providers/adddeals/adddeals';
import { HelperProvider } from '../../providers/helper/helper';


@IonicPage()
@Component({
  selector: 'page-update-deals',
  templateUrl: 'update-deals.html',
})
export class UpdateDealsPage {


  itemId;
  
 
  constructor(private helper: HelperProvider, public navCtrl: NavController, public navParams: NavParams,public api: AdddealsProvider) {
    //we have created itemId,which is getting the id coming from tabhome.ts
     this.itemId= this.navParams.get('item'); //navParams means navigating the parameters
     this.itemId = JSON.parse(this.itemId);
     console.log(this.itemId)

    //  //the id which is coming from the navParams,we're getting the data of the specific deal against the id
    //  this.api.getDeal(this.itemId)
    //  .subscribe(res =>{
    //    console.log(res)
    //   //now we will bind the data to the ngMOdel 
    //    this.dealsData =  res; 
       
    //  })
  }

  update(data){
    console.log(data)
    return this.api.updateDeal(this.itemId.id, this.itemId).then(res=>{
      console.log('deal updated');
      this.helper.load()
  this.helper.presentBottomToast('Deal Updated!')
      this.navCtrl.push("TabhomePage");
    })
    
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateDealsPage');
  } 

}
