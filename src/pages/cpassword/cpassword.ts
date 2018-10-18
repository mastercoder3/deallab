import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cpassword',
  templateUrl: 'cpassword.html',
})
export class CpasswordPage {
  
  @Input() data = {
  "background"     : "assets/images/background/39.jpg",
      "forgotPassword" : "Forgot password?",
      "email"           : "Email",
      "title"          : "Welcome Abroad",
      "cp"       : "Current Password",
      "np"       : "New Password",
      "cnp":"Create New Password",
      "login1": "SAVE",
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

constructor() { }

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
    if (!this.username ||this.username.length == 0) {
        this.isUsernameValid = false;
    }

    if (!this.password || this.password.length == 0) {
        this.isPasswordValid = false;
    }

    return this.isPasswordValid && this.isUsernameValid;
 }

}
