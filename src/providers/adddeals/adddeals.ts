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

  constructor(public http: HttpClient, public firestore: AngularFirestore) {}

  createDeal(data) {
    return this.firestore.collection('project').add(data);
  }

  updateDeal(uid, data) {
    return this.firestore.collection('project').doc(uid).update(data);
  }

  deleteDeal(uid) {
    return this.firestore.collection('project').doc(uid).delete();
  }

  getDeal(uid) {
    return this.firestore.collection('project').doc(uid).valueChanges();
  }
  
  getDeals() {
    return this.firestore.collection('project').snapshotChanges();
  }

}
