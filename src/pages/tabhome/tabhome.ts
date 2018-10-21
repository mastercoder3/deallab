import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TabhomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabhome',
  templateUrl: 'tabhome.html',
})
export class TabhomePage {
  data = {
            "headerImage": "assets/images/background/39.jpg",
            "items": 
                {
                    "id": 1,
                    "title": "Matthew Morris",
                    "subtitle": "@matthew",
                    "detail": "Berlin",
                    "avatar": "assets/images/avatar/22.jpg"
                },
                
            
  }
  

  data1 = {
    "items": [
      {
          "id": 1,
          "title": "Victoria Simpson",
          "subtitle": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
          "image": "assets/images/avatar/24.jpg",
          "imageAlt": "avatar",
          "button": "Read"
      },
      {
          "id": 2,
          "title": "Samantha Reynolds",
          "subtitle": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
          "image": "assets/images/avatar/10.jpg",
          "imageAlt": "avatar",
          "button": "Read"
      }
    ]
  }
  @Input() events: any;

  searchTerm: any = "";
  allItems: any;

  constructor(private navCtrl: NavController) { }

  getItems(event: any): void {
    if (!this.allItems) {
      this.allItems = this.data.items;
    }
    this.data.items = this.allItems.filter((item) => {
      return item.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
    });
  }

  addeals(){
    this.navCtrl.push("AddealsPage");
  }

  onEvent(event: string, item: any) {//ITEM [EVENT OR SELECTED ITEM]
    if (this.events[event]) {
      if ('onTextChange' === event) {
        this.getItems(item);
        this.events[event](this.searchTerm);
      } else {
        this.events[event](item);
      }
    }
    console.log(event);
  }

}
