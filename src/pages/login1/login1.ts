import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { FirestoreProvider } from '../../providers/firestore/firestore';
import { LoginPage } from '../login/login';


/**
 * Generated class for the Login1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login1',
  templateUrl: 'login1.html',
})
export class Login1Page { 
  @Input() data = {
    "background"     : "assets/images/background/39.jpg",
        "forgotPassword" : "Forgot password?",
        "email"           : "Email",
        "title"          : "Welcome Abroad",
        "username"       : "Name",
        "password"       : "Password",
        "number":"Phone number",
        
        "logo"           : "assets/images/logo/2.png",
        "errorUser"       : "Field can't be empty",
        "errorPassword"   : "Field can't be empty"
  }
  @Input() events: any;

  public username: string;
  public email : string;
  public number : number;
  public password: string;

  public userData;

  private isUsernameValid: boolean = true;
  private isPasswordValid: boolean = true;
  private credentials;
  

  constructor(private navCtrl: NavController,private auth : AuthService, private firestore: FirestoreProvider) { }

  onEvent = (event: string): void => {
      if (event == "onLogin" && !this.validate()) {
          return ;
      }
      if (this.events[event]) {
          this.events[event]({
              'username' : this.username,
              'password' : this.password
          });
      }
    }

    signup(){
        if (this.validate()) {
            this.credentials = {
                email: this.email,
                password: this.password
            }
            this.auth.signUp(this.credentials).then(
                resp => {
                    this.userData = {
                        email: this.email,
                        username: this.username
                    }
                    this.firestore.saveUser(resp.user.uid, this.userData);
                    this.navCtrl.push(LoginPage)
                }
            )
        }
    }
    login(){
        this.navCtrl.push("LoginPage")
    }

    toggleForm(){
        this.navCtrl.push(LoginPage);
    }

    validate():boolean {
      this.isUsernameValid = true;
      this.isPasswordValid = true;

      if (!this.password || this.password.length == 0 && !this.username || this.username.length == 0) {
        this.isPasswordValid = false;
        this.isUsernameValid = false;
      }

      return this.isPasswordValid && this.isUsernameValid;
   }

}
