import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdddealsProvider } from '../../providers/adddeals/adddeals';
import { AngularFireAuth } from '@angular/fire/auth';

/**
 * Generated class for the TabsettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabsettings',
  templateUrl: 'tabsettings.html',
})
export class TabsettingsPage {
  @Input() data = {
  "background"     : "assets/images/background/39.jpg",
      "forgotPassword" : "Forgot password?",
      "email"           : "Email",
      "title"          : "Welcome Abroad",
      "username"       : "Name",
      "password"       : "Password",
      "number":"Phone number",
      "login1": "Login",
      "login"          : "Instagram",
      "logo"           : "assets/images/logo/2.png",
      "errorUser"       : "Field can't be empty",
      "errorPassword"   : "Field can't be empty"
}
@Input() events: any;


public username: string;
public password: string;

private isUsernameValid: boolean = true;
private isPasswordValid: boolean = true;
    
    userdata:any
    

constructor(public navCtrl: NavController, public afAuth : AngularFireAuth,public navParams: NavParams, public api: AdddealsProvider, public firestore : AdddealsProvider) { 
    
    console.log(this.afAuth.auth.currentUser); 
    let uid = localStorage.getItem('uid');
    
    this.api.getInfluencer(uid)
     .subscribe(res =>{
       console.log(res)
      //now we will bind the data to the ngMOdel 
       this.userdata = res; 
    //  })
  })
}
ionViewDidLoad() {
    console.log('ionViewDidLoad TabsettingsPage');
  }




//   getUser(){
//     console.log(this.afAuth.auth.currentUser); 
//     let uid = localStorage.getItem('uid');
//     //giving getInfluencer the uid and storing the data to the user which we will furthur use in the html
//     this.firestore.getInfluencer(uid).subscribe(data=>{
//       this.user = data;  
//        console.log(data)                    //assigning user the data
//     })
//   }

  validate():boolean {
    this.isUsernameValid = true;
    this.isPasswordValid = true;
    if (!this.username ||this.username.length == 0) {
        this.isUsernameValid = false;
    }

    if (!this.password || this.password.length == 0) {
        this.isPasswordValid = false;
    }

    return this.isPasswordValid && this.isUsernameValid;
 }

 


  
}
