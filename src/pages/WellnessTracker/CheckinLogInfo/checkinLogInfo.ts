import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Login } from '../../home/Login/login/login';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-checkinLogInfo',
  templateUrl: 'checkinLogInfo.html'
})
export class CheckinLogInfo {

	constructor(public navCtrl: NavController, private storage: Storage) {
		this.storage.get("userID").then((value) => {
			if(value == null) {
				this.navCtrl.setRoot(Login);
			}
		});
	}
}
