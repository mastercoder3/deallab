import { Component, Input,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';

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
  @Input() data = {
    "background"     : "assets/images/background/39.jpg",
        "forgotPassword" : "Forgot password?",
        "email"           : "Description",
        "username"       : "Title",
        "password"       : "Category",
        "number":        "Phone number",
        
        "login"          : "Instagram",
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

  constructor(private navCtrl: NavController) { }

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
