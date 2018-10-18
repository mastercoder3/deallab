import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AuthService } from '../../services/auth.service';
import { FirestoreProvider } from '../../providers/firestore/firestore';
import { LoginPage } from '../login/login';

@Component({
	selector: 'as-page-signup',
	templateUrl: './signup.html'
})
export class SignupPage {
	signupError: string;
	form: FormGroup;

	constructor(
		fb: FormBuilder,
		private navCtrl: NavController,
    private auth: AuthService,
    private database : FirestoreProvider  //creating an object 
	) {
		this.form = fb.group({
			email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
		});
  }

  signup() {
		let data = this.form.value;
		let credentials = {
			email: data.email,
			password: data.password
		};
		this.auth.signUp(credentials).then(
			(data) => {
        console.log(data);
        // save this user to database

      

        //pushing the data to firestore
        let userdata = {
           email: data.user.email,
           role : 'inf'    //defining role for the influencers

        }
         
          //when the user is registered, 
          this.database.saveUser(data.user.uid,userdata).then(data=>{
             console.log(data);  
             this.navCtrl.push(LoginPage)

          })


        this.navCtrl.setRoot(HomePage)
      },
			error => this.signupError = error.message
		);
  
  }
  
}
