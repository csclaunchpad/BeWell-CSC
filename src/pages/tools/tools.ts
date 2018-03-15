import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { Storage } from '@ionic/storage';
import { Login } from '../home/Login/login/login';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Component({
    selector: 'page-tools',
    templateUrl: 'tools.html'
})

export class Tools {

    constructor(public navCtrl: NavController, private sqlite: SQLite, private storage: Storage) {
		
		this.storage.get("userID").then((value) => {
			if(value == null) {
				this.navCtrl.setRoot(Login);
			}
		});
    }
}
