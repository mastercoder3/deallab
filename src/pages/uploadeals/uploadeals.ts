import { Component, Input, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Content, ItemSliding } from 'ionic-angular';
import { SignupPage } from '../signup/signup';

@IonicPage()
@Component({
  selector: 'page-uploadeals',
  templateUrl: 'uploadeals.html',
})
export class UploadealsPage {
 @Input() data:any;
    @Input() events: any;
    @ViewChild(Content)
    content: Content;

    constructor() { }

    onEvent(event: string, item: any, e: any) {
        if (this.events[event]) {
            this.events[event](item);
        }
    }

    undo = (slidingItem: ItemSliding) => {
        slidingItem.close();
    }

    delete = (item: any): void => {
        let index = this.data.items.indexOf(item);
        if (index > -1) {
            this.data.items.splice(index, 1);
        }
    }

}
