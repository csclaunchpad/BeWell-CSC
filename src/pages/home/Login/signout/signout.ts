import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Login } from '../login/login';

@Component({
    selector: 'page-signout',
    templateUrl: 'signout.html'
})
export class SignOut {
	
    constructor(public navCtrl: NavController, private storage: Storage) {
		storage.remove("userID").then(() => {
			console.log("Signout successful!");
			this.navCtrl.setRoot(Login);
		}).catch(e => {
			console.log("Signout unsuccessful: " + e);
		});
		
    }

	
}
