import { Component, Input,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { FirestoreProvider } from '../../providers/firestore/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { AdddealsProvider } from '../../providers/adddeals/adddeals';
import { map } from 'rxjs/operators';



/**
 * Generated class for the AddealsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addeals',
  templateUrl: 'addeals.html',
})
export class AddealsPage {
  @Input() data : any;
  @Input() events: any;

  deals;
  
  uid;

  dealsData={
   title:'',
   description:'',
   link:'' ,
   category:'',
   userId:''
  }
   
  
  constructor(public auth : AngularFireAuth,private navCtrl: NavController,public api: AdddealsProvider) { }

  //adding deals to the firestore
addDeals(){
  //create a deal object
  let data={
    title: this.dealsData.title,
    description: this.dealsData.description,
    link: this.dealsData.link,
    category: this.dealsData.category,
    userId: this.auth.auth.currentUser.uid,
    status:'dissapproved'
  }
 

  //push object to firestore
  this.api.createDeal(data).then(resp=>{
    console.log('deal created');
  },err=>{
    console.log(`error found`)
  })
}

//getting the deal from the firestore and assigning to the 'deals' object
getDeals(){
  this.uid = localStorage.getItem('uid');
  console.log(this.uid);
  this.api.getDeal(this.uid).subscribe(res=>{
    this.deals = res;
  })

  // this.getProducts();
}




// getDeals(){
//   return this.api.getDeals().pipe(
//     map(actions => actions.map(a=>{
//       const data = a.payload.doc.data() ;
//         const id = a.payload.doc.id;
//         return { id, ...data };
//     }))).subscribe(res=>{
//       this.deals = res;
//     })
// }

}
