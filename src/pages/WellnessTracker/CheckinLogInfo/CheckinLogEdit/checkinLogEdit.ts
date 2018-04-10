// ------------------------- Mandatory imports for all pages ------------------------- //

// Component Imports
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// Local Storage Import
import { Storage } from '@ionic/storage';

// SQLite3 Imports
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';  //services for SQLite FEB 2018

// Alert Imports
import { AlertController } from 'ionic-angular';

// Import for Translation Service
import { TranslationService } from './../../../../assets/services/translationService';

// ------------------------- Page Specific Imports ------------------------- //

// Import Login
import { Login } from '../../../home/Login/login/login';

// Moment (Date framework) Import
import * as moment from 'moment';

// Import CheckinLog
import { CheckinLog } from '../../CheckinLog/checkinLog';

@Component({
  selector: 'page-checkinLogEdit',
  templateUrl: 'checkinLogEdit.html'
})

export class CheckinLogEdit {

	// ------------------------- Mandatory variables for all pages ------------------------- //
	
	// Stores our SQLite3 table data
	private userRecords: any = [];
	
	// Our persistent connection to our DB which is set in initDB()
	private openDatabase: SQLiteObject;
	
	// The actual content of the page, fetched via translationService.ts
	private pageElements: Object;
	
	// Controls whether our view is loaded based off of if pageElements has been loaded
	private pageElementsLoaded: boolean = false;
	
	private userID: any;
	
	// ------------------------- Page Specific Variables ------------------------- //
	
	private checkinLogID: string;
	
	constructor(public navCtrl: NavController, private navParams: NavParams, private storage: Storage, private translationService: TranslationService, private sqlite: SQLite, public alertCtrl: AlertController) {
		
		this.configuration();
		this.authenticate();
	}
	
	configuration() {
		
		// Fetch the content from our language translation service
		var languageFlag = this.storage.get("languageFlag").then((value) => {
			if(value != null) {
				this.pageElements = this.translationService.load("checkinLogEdit.html", value);
				console.log(this.pageElements);
			} else {
				console.log("No language flag set");
			}
		});
		
		this.checkinLogID = this.navParams.get('checkinLogID');
		this.initDB();
	}
	
	authenticate() {
		
		// Fetch our login flag and check it's value, if it's null, the user is not logged in so redirect them to the login screen
		this.storage.get("userID").then((value) => {
			if(value == null) {
				this.navCtrl.setRoot(Login);
			}
			this.userID = value;
			this.initDB();
		});
	}
        
	initDB() {
		this.sqlite.create({
			name: this.userID +".db",
			location: 'default'
		}).then((db: SQLiteObject) => {
			
			this.openDatabase = db;
			
			this.openDatabase.executeSql('SELECT * FROM wellness WHERE rowid = ?', [this.checkinLogID])
				.then(res => {
					this.userRecords = res.rows.item(0);					
					this.pageElementsLoaded = true;
					if(this.userRecords.date.indexOf("T") == -1) {
						console.log("userRecords[0].Date is in wrong format, fixing now");
						this.userRecords.date = this.userRecords.date.substring(0, this.userRecords.date.indexOf(" ")) + "T" + this.userRecords.date.substring((this.userRecords.date.indexOf(" ")+1));
					}
				})
			.catch(e => console.log(e));
		}).catch(e => console.log(e));
	}
        
	//POP a page off the menu stack
    goBack() {
        this.navCtrl.pop();
    }
	
	showConfirm() {
		let alert = this.alertCtrl.create({
			title: 'Delete',
			message: 'Are you sure you want to make these changes?',
			buttons: [
				{
					text: 'No',
					role: 'cancel',
					handler: () => {
						console.log("Update canceled");
					}
				},
				{
					text: 'Yes',
					handler: () => {
						if(this.openDatabase != undefined) {
							console.log("this.userRecords.date: " + this.userRecords.date);
							this.openDatabase.executeSql('UPDATE wellness SET moodScore = ?, dietScore = ?, sleepScore = ?, stressScore = ?, entryNote = ? WHERE rowid = ?', [ this.userRecords.moodScore, this.userRecords.dietScore, this.userRecords.sleepScore, this.userRecords.stressScore, this.userRecords.entryNote, this.checkinLogID]).then(res => {
								console.log("Update success");
								this.navCtrl.setRoot(CheckinLog);
							});
						} else {
							console.log("Cannot update, the DB has not be initialized");
						}
					}
				}
			]
		});
		alert.present();
	}
	
	edit() {
		this.showConfirm();
	}
}
