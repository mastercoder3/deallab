import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

import { Component, Input, ViewChild } from '@angular/core';
import { IonicPage, Content } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  @Input() data = {
    "items": [
        {
            "id": 1,
            "backgroundImage": "assets/images/background/1.jpg",
            "icon": "ios-arrow-dropright",
            "iconText": "Watch now",
            "expandItems": {
                "iconsStars": [
                    {
                        "isActive": true,
                        "iconActive": "icon-star",
                        "iconInactive": "icon-star-outline"
                    },
                    {
                        "isActive": true,
                        "iconActive": "icon-star",
                        "iconInactive": "icon-star-outline"
                    },
                    {
                        "isActive": true,
                        "iconActive": "icon-star",
                        "iconInactive": "icon-star-outline"
                    },
                    {
                        "isActive": true,
                        "iconActive": "icon-star",
                        "iconInactive": "icon-star-outline"
                    },
                    {
                        "isActive": false,
                        "iconActive": "icon-star",
                        "iconInactive": "icon-star-outline"
                    }
                ],
                "reviews": "4.12 (78 reviews)",
                "title": "Open Air Concerts",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            }
        },
        
    ]
} 
  @Input() events: any;
  @ViewChild(Content)
  content: Content;


  constructor(public navCtrl: NavController) {

  }
  signIn(){
    this.navCtrl.push(LoginPage);
  }

  register(){
    this.navCtrl.push(SignupPage); 
  }


  onEvent(event: string, item: any, e: any) {
    if (this.events[event]) {
      this.events[event](item);
    }
  }

  onStarClass(items: any, index: number, e: any) {
    for (var i = 0; i < items.length; i++) {
      items[i].isActive = i <= index;
    }
    this.onEvent("onRates", index, e);
  };

  toggleGroup(group: any) {
    group.show = !group.show;
  }

  isGroupShown(group: any) {
    return group.show;
  }

}
