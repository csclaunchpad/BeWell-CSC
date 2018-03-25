// ------------------------- Mandatory imports for all pages ------------------------- //

// Component Imports
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// Local Storage Import
import { Storage } from '@ionic/storage';

// SQLite3 Imports
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';  //services for SQLite FEB 2018

// Import for Translation Service
import { TranslationService } from './../../../assets/services/translationService';

// ------------------------- Page Specific Imports ------------------------- //

import { Login } from '../../home/Login/login/login';

@Component({
  selector: 'page-checkinLogInfo',
  templateUrl: 'checkinLogInfo.html'
})

export class CheckinLogInfo {

	// ------------------------- Mandatory variables for all pages ------------------------- //
	
	// Stores our SQLite3 table data
	private userRecords: any = [];
	
	// Our persistent connection to our DB which is set in initDB()
	private openDatabase: SQLiteObject;
	
	// The actual content of the page, fetched via translationService.ts
	private pageElements: Object;
	
	// Controls whether our view is loaded based off of if pageElements has been loaded
	private pageElementsLoaded: boolean = false;
	
	// ------------------------- Page Specific Variables ------------------------- //
	
	private checkinLogID: string;
	
	constructor(public navCtrl: NavController, private navParams: NavParams, private storage: Storage, private translationService: TranslationService, private sqlite: SQLite) {
		
		this.configuration();
		this.authenticate();
	}
	
	configuration() {
		
		// Fetch the content from our language translation service
		var languageFlag = this.storage.get("languageFlag").then((value) => {
			if(value != null) {
				this.pageElements = this.translationService.load("checkinLogInfo.html", value);
				console.log(this.pageElements);
			} else {
				console.log("No language flag set");
			}
		});
		
		this.checkinLogID = this.navParams.get('entryID');
		
		this.initDB();
	}
	
	authenticate() {
		
		// Fetch our login flag and check it's value, if it's null, the user is not logged in so redirect them to the login screen
		this.storage.get("userID").then((value) => {
			if(value == null) {
				this.navCtrl.setRoot(Login);
			}
		});
	}
	
	initDB() {
		this.sqlite.create({
			name: 'ionicdb9.db',
			location: 'default'
		}).then((db: SQLiteObject) => {
			
			this.openDatabase = db;
			
			this.openDatabase.executeSql('SELECT * FROM wellness WHERE rowid = ?', [this.checkinLogID])
				.then(res => {
					console.log(this.checkinLogID);
					this.userRecords = res.rows.item(0);
					console.log(this.userRecords);
				})
			.catch(e => console.log(e));
		}).catch(e => console.log(e));
	}
        //POP a page off the menu stack
    goBack() {
        this.navCtrl.pop();
    }
}
