// ------------------------- Mandatory imports for all pages ------------------------- //
// Component Imports
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// Local Storage Import
//import { IonicStorageModule } from '@ionic/storage';
import { Storage } from '@ionic/storage';

// SQLite3 Imports
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';  //services for SQLite FEB 2018

// Import for Translation Service
import { TranslationService } from '../../assets/services/translationService';

// Page Imports
import { WellnessTracker } from '../WellnessTracker/wellnesstracker';
import { Assessment } from '../Tools/assessment/assessment';
import { Login } from './Login/login/login';
import { DailyEntry } from '../WellnessTracker/DailyEntry/dailyEntry'; // home.html


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    assessment = Assessment;
    wellnesstracker = WellnessTracker; 
    
    // The actual content of the page, fetched via translationService.ts
    private pageElements: Object;
	
    // Controls whether our view is loaded based off of if pageElements has been loaded
    private pageElementsLoaded: boolean = false;   

    private userID: string;
	
	private lastCheckinTime: string;
	
	private openDatabase: SQLiteObject;

    constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private translationService: TranslationService, private sqlite: SQLite) {
		this.authenticate();
        this.configuration();
    }

    authenticate() {		
		// Fetch our login flag and check it's value, if it's null, the user is not logged in so redirect them to the login screen
			this.storage.get("userID").then((value) => {
			if(value == null) {
			  this.navCtrl.setRoot(Login);
			}
			this.userID = value;
		});
    }
    
    configuration() {
		
		// Fetch the content from our language translation service
		var languageFlag = this.storage.get("languageFlag").then((value) => {
			if(value != null) {
				this.pageElements = this.translationService.load("home.html", value);
				this.pageElementsLoaded = true;
				console.log(this.pageElements);
			} 
			else {
				console.log("No language flag set");
			}			
		});
		
		//this.initDB();
    }

	// Initializes our DB, and fetchs all user records storing them in userRecords[]
	/*initDB() {
		this.sqlite.create({
			name: this.userID +".db",
			location: 'default'
		}).then((db: SQLiteObject) => {
			
			this.openDatabase = db;
			
			this.openDatabase.executeSql('CREATE TABLE IF NOT EXISTS wellness(rowid INTEGER PRIMARY KEY, userID INT, date TEXT, moodScore INT, dietScore INT, sleepScore INT, stressScore INT, entryNote TEXT)', {})
			.then(res => console.log('Executed SQL'))
			.catch(e => console.log(e));
			
			this.openDatabase.executeSql('SELECT * FROM wellness ORDER BY date ASC LIMIT 1', {})
				.then(res => {
					console.log("res");
					console.log(res);
			}).catch(e => console.log(e));
		}).catch(e => console.log(e));
	}*/
	

    addData() {
      this.navCtrl.push(DailyEntry);
    }
}
