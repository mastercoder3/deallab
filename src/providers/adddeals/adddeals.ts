import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

/*
  Generated class for the AdddealsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AdddealsProvider {
  collection(arg0: string, arg1: (ref: any) => any): any {
    throw new Error("Method not implemented.");
  }
  

  constructor(public http: HttpClient, public firestore: AngularFirestore) {
    
  }



getInfluencer(uid){
  console.log(uid)
  return this.firestore.doc('users/'+ uid).valueChanges();
}

  createDeal(data) {
    return this.firestore.collection('deal').add(data);
  }

  updateDeal(uid, data) {
    console.log(uid,data)
    return this.firestore.collection('deal').doc(uid).update(data);
  }

  deleteDeal(uid) {
    return this.firestore.collection('deal').doc(uid).delete();
  }

  getDeal(uid) {
    return this.firestore.doc('deal/'+ uid).valueChanges();
  }
  
  getDeals() {
    return this.firestore.collection('/deal').snapshotChanges();
  }
  getApprovedDeals(){
    return this.firestore.collection('products', ref=> ref.where('status','==','approved')).snapshotChanges();
  }
  getInfluencerDeals(uid){
    return this.firestore.collection('deal', ref=> ref.where('influencerid', '==',uid)).snapshotChanges();
  }

}
