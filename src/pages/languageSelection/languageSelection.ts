// Angular/Ionic Imports

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Login } from '../home/Login/login/login';

@Component({
  selector: 'page-languageSelection',
  templateUrl: 'languageSelection.html'
})

export class LanguageSelection {

	constructor(public navCtrl: NavController, private storage: Storage) {
		
	}
	
	// Set the language cookie, and then redirect to login.html
	setLanguage(language) {
		
		this.storage.set("languageFlag", language).then((value) => {
			this.storage.get("languageFlag").then((value) => {
				console.log("Language Flag: " + value);
			
				this.navCtrl.setRoot(Login);
			})
		});
		
	}
}

