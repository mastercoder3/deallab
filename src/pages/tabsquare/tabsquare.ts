import { Component, Input, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content} from 'ionic-angular';

/**
 * Generated class for the TabsquarePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabsquare',
  templateUrl: 'tabsquare.html',
})
export class TabsquarePage {
  @Input() data = {
    "headerTitle": "Showbiz",
            "headerImage": "assets/images/background/33.jpg",
            "title": "Engage real-time",
            "subtitle": "Startup Pitches",
            "items": [
                
            ]
  }
  @Input() events: any;
  @ViewChild(Content)
  content: Content;

  active: boolean;
  headerImage:any = "";

  constructor() { }

  onEvent(event: string, item: any, e: any) {
      if (e) {
          e.stopPropagation();
      }
      if (this.events[event]) {
          this.events[event](item);
      }
  }

  ngOnChanges(changes: { [propKey: string]: any }) {
      if (changes.data && changes.data.currentValue) {
          this.headerImage = changes.data.currentValue.headerImage;
      } 
      this.subscribeToIonScroll();
  }

  ngAfterViewInit() {
      this.subscribeToIonScroll();
  }

  ngAfterViewChecked() {
      this.subscribeToIonScroll();
  }

  isClassActive() {
      return this.active;
  }

  subscribeToIonScroll() {
      if (this.content != null && this.content.ionScroll != null) {
          this.content.ionScroll.subscribe((d) => {
              if (d.scrollTop < 200 ) {
                  this.active = false;
                  return;
              }
              this.active = true;
          });
      }
  }
}
