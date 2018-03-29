// Angular/Ionic Imports

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Login } from '../home/Login/login/login';
import { TOCFR } from './TOCFR/tocfr';
import { TOCEN } from './TOCEN/tocen';

@Component({
  selector: 'page-languageSelection',
  templateUrl: 'languageSelection.html'
})

export class LanguageSelection {
        tocen = TOCEN;
        tocfr = TOCFR;
        
	constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
		
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

