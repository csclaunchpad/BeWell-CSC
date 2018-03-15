import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
    selector: 'page-eapinfo',
    templateUrl: 'eapinfo.html'
})
export class EAPInfo {
    constructor(public navCtrl: NavController, public navParams: NavParams) {}

    itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
        this.navCtrl.push(EAPInfo, {
            item: item
        });
    }
}
