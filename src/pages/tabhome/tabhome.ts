import { Component, Input, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirestoreProvider } from '../../providers/firestore/firestore';
import { AdddealsProvider } from '../../providers/adddeals/adddeals';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
/**
 * Generated class for the TabhomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabhome',
  templateUrl: 'tabhome.html',
})
export class TabhomePage{
  dealsData;

  data : any;
  
  @Input() events: any;

  searchTerm: any = "";
  allItems: any;

  constructor(private navCtrl: NavController,public afs : AngularFireAuth, public firestore : AdddealsProvider) { }

  getItems(event: any): void {
    if (!this.allItems) {
      this.allItems = this.data.items;
    }
    this.data.items = this.allItems.filter((item) => {
      return item.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
    });
  }

  deals;
  user;

  ionViewDidLoad(){
    this.getDeals();
    this.getUser();
  }

//getting the current user id 
  getUser(){
    console.log(this.afs.auth.currentUser.uid);
    let uid =this.afs.auth.currentUser.uid;
    //giving getInfluencer the uid and storing the data to the user which we will furthur use in the html
    this.firestore.getInfluencer(uid).subscribe(data=>{
      this.user = data;
    })
  }


  //getting the data of deals, mapping the data i.e. data,id and savind it in 'deals' object
  getDeals(){
    this.firestore.getDeals().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() ;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))).subscribe(response=>{
        this.deals = response;
        console.log(this.deals)
      })

  }

  updateDeals(itemid){
    this.navCtrl.push("UpdateDealsPage",{id:itemid});
  }
  // updateDeals(id,data){
  //   return this.firestore.updateDeal(id, data).then(res=>{
  //     console.log(`deal updated`);
  //   })
  // }
  

  addeals(){
    this.navCtrl.push("AddealsPage");
  }

  deleteDeal(id){
    this.firestore.deleteDeal(id).then(res=>{
      console.log('deal deleted')
    })
  }

  onEvent(event: string, item: any) {//ITEM [EVENT OR SELECTED ITEM]
    if (this.events[event]) {
      if ('onTextChange' === event) {
        this.getItems(item);
        this.events[event](this.searchTerm);
      } else {
        this.events[event](item);
      }
    }
    console.log(event);
  }


    //retrieving data from the firestore (adddeals)
  // ngOnInit(){
  //     this.firestore.getDeals().pipe(map(
  //     list => {
  //        list.map(
  //         items => {
  //           const data = items.payload.doc.data();
  //           const id = items.payload.doc.id;
            
  //           return { id,...data}
  //         }
  //       )

  //     }
  //   )).subscribe( res =>{
  //     this.dealsData = res;
  //     console.log(this.dealsData)
  //   })

  // }

}
