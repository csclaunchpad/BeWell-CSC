// ------------------------- Mandatory imports for all pages ------------------------- //
// Component Imports
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
    selector: 'page_tocfr',
    templateUrl: 'tocfr.html'
})
export class TOCFR {


    constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {

    }

//POP a age off the stack
    goBack() {
        this.navCtrl.pop();
    }
    
}
