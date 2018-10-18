import { Injectable } from '@angular/core';

import firebase from "firebase";
import "firebase/firestore";
/*
  Generated class for the FirestoreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirestoreProvider {

  db = firebase.firestore();

  constructor() {
    console.log('Hello FirestoreProvider Provider');
  }

//writes the data on the firestore
  saveUser(uid,data){
    return this.db.collection('users').doc(uid).set(data);
    
  }



}
