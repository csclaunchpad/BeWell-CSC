// ------------------------- Mandatory imports for all pages ------------------------- //
// Component Imports
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
    selector: 'page-tocen',
    templateUrl: 'tocen.html'
})
export class TOCEN{

    constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {

    }

//POP a age off the stack
    goBack() {
        this.navCtrl.pop();
    }
    
}
