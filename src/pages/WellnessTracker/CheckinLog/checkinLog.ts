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

// Page Imports
import { DailyEntry } from '../DailyEntry/dailyEntry';
import { CheckinLogInfo } from '../CheckinLogInfo/checkinLogInfo';
import { Login } from '../../home/Login/login/login';

@Component({
  selector: 'page-checkinLog',
  templateUrl: 'checkinLog.html'
})

export class CheckinLog {
	
	// ------------------------- Mandatory variables for all pages ------------------------- //
	
	// Stores our SQLite3 table data
	private userRecords: any = [];
	
	// Our persistent connection to our DB which is set in initDB()
	private openDatabase: SQLiteObject;
	
	// The actual content of the page, fetched via translationService.ts
	private pageElements: Object;
	
	// Controls whether our view is loaded based off of if pageElements has been loaded
	private pageElementsLoaded: boolean = false;
	
	private userID: string;

	// ------------------------- Page Specific Variables ------------------------- //
	

    constructor(public navCtrl: NavController, public navParams: NavParams, private sqlite: SQLite, private storage: Storage, private translationService: TranslationService) {
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
	
    redirectToCheckinLogInfo(checkinLogID) {
		
        var objectTest = { test: checkinLogID }
		
        this.navCtrl.push(CheckinLogInfo, {
            entryID: objectTest.test
	});
    }
	
	configuration() {
		
            // Fetch the content from our language translation service
            var languageFlag = this.storage.get("languageFlag").then((value) => {
		if(value != null) {
                    this.pageElements = this.translationService.load("checkinLog.html", value);
                    this.pageElementsLoaded = true;
                    console.log(this.pageElements);
		} 
                else {
                    console.log("No language flag set");
		}			
            });
	}
	
    ionViewDidLoad() {
        this.getData();
    }

    ionViewWillEnter() {
        this.getData();
    }

	initDB() {
		this.sqlite.create({
			name: 'ionicdb6.db',
			location: 'default'
		}).then((db: SQLiteObject) => {
			
			this.openDatabase = db;
			
			this.openDatabase.executeSql('CREATE TABLE IF NOT EXISTS wellness(rowid INTEGER PRIMARY KEY, userID INT, date TEXT, moodScore INT, dietScore INT, sleepScore INT, stressScore INT, entryNote TEXT)', {})
				.then(res => console.log('Executed SQL'))
			.catch(e => console.log(e));
			
			this.getData();
			
		}).catch(e => console.log(e));
	}
	
    getData() {
        this.sqlite.create({
            name: 'ionicdb6.db',
            location: 'default'
        }).then((db: SQLiteObject) => {
            db.executeSql('CREATE TABLE IF NOT EXISTS wellness(rowid INTEGER PRIMARY KEY, date TEXT, moodScore INT, dietScore INT, sleepScore INT, stressScore INT, entryNote TEXT)', {})
            .then(res => console.log('Executed SQL'))
            .catch(e => console.log(e));
            db.executeSql('SELECT * FROM wellness ORDER BY rowid DESC', {})
            .then(res => {
            this.userRecords = [];
            for(var i=0; i<res.rows.length; i++) {
                this.userRecords.push({rowid:res.rows.item(i).rowid,date:res.rows.item(i).date,moodScore:res.rows.item(i).moodScore,dietScore:res.rows.item(i).dietScore,sleepScore:res.rows.item(i).sleepScore,stressScore:res.rows.item(i).stressScore,entryNote:res.rows.item(i).entryNote})
            }
            }).catch(e => console.log(e));
        }).catch(e => console.log(e));
    }

    addData() {
		this.navCtrl.push(DailyEntry);
    }

	/* Needs to be rewritten not using edit-data.ts
    editData(rowid) {
		this.navCtrl.push(EditDataPage, {
			rowid:rowid
		});
    }*/

    deleteData(rowid) {
        this.openDatabase.executeSql('DELETE FROM wellness WHERE rowid=?', [rowid])
			.then(res => {
				console.log(res);
				this.getData();
			})
		.catch(e => console.log(e));
    }
}

