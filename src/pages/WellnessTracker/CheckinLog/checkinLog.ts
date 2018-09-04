// ------------------------- Mandatory imports for all pages ------------------------- //
// Component Imports
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Content } from 'ionic-angular';

// Local Storage Import
import { Storage } from '@ionic/storage';
import { Toast } from '@ionic-native/toast';

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
	private showHideArray: any;

    // Our persistent connection to our DB which is set in initDB()
    private openDatabase: SQLiteObject;

    // The actual content of the page, fetched via translationService.ts
    private pageElements: Object;

    // Controls whether our view is loaded based off of if pageElements has been loaded
    private pageElementsLoaded: boolean = false;
	
	private date: String = new Date("Fri Apr 3 15:48:21 2018 GMT").toISOString();
	
    private userID: string;

    // ------------------------- Page Specific Variables ------------------------- //
	

    constructor(public navCtrl: NavController, public navParams: NavParams, private sqlite: SQLite, private storage: Storage, private translationService: TranslationService) { }
	
    // Runs instead of the constructor because we need to handle when this page is popped to (When a page is popped to, the constructor won't run)
    ionViewWillEnter() {
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

		// Temporary code, just to get around not having SQL
		/*
		this.pageElements = this.translationService.load("checkinLog.html", "en");
		this.pageElementsLoaded = true;
	
		var entry1 = {
			rowid: 1,
			moodScore: 8,
			dietScore: 6,
			sleepScore: 7,
			date: new Date("Fri Mar 31 15:48:21 2018 GMT").toISOString(),
			entryNote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
		}
		
		var entry2 = {
			rowid: 2,
			moodScore: 10,
			dietScore: 5,
			sleepScore: 9,
			date: new Date("Fri Apr 1 15:48:21 2018 GMT").toISOString(),
			entryNote: "Lorem ip"
		}
	
		var entry3 = {
			rowid: 3,
			moodScore: 1,
			dietScore: 3,
			sleepScore: 6,
			date: new Date("Fri Apr 2 15:48:21 2018 GMT").toISOString(),
			entryNote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
		}
		
		var entry4 = {
			rowid: 4,
			moodScore: 8,
			dietScore: 6,
			sleepScore: 7,
			date: new Date("Fri Apr 3 15:48:21 2018 GMT").toISOString(),
			entryNote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
		}
		
		var entry5 = {
			rowid: 5,
			moodScore: 10,
			dietScore: 10,
			sleepScore: 10,
			date: new Date("Fri Apr 3 15:48:21 2018 GMT").toISOString(),
			entryNote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
		}
		
		var entry6 = {
			rowid: 6,
			moodScore: 1,
			dietScore: 1,
			sleepScore: 1,
			date: new Date("Fri Apr 3 15:48:21 2018 GMT").toISOString(),
			entryNote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
		}

		this.userRecords.push(entry1);
		this.userRecords.push(entry2);
		this.userRecords.push(entry3);
		this.userRecords.push(entry4);
		this.userRecords.push(entry5);
		this.userRecords.push(entry6);

		console.log(this.userRecords);
		*/
		
	    // Fetch the content from our language translation service
        var languageFlag = this.storage.get("languageFlag").then((value) => {
            if(value != null) {
                this.pageElements = this.translationService.load("checkinLog.html", value);
                this.pageElementsLoaded = true;
                this.initDB();
            } else {
                console.log("No language flag set");
            }			
        });
		
		this.showHideArray = Array(this.userRecords.length).fill(false);
    }
	
	// Shows/Hides the element selected, this function also hides all the rest of the open logs
	showHideElement(index) {
		// Save the state of the selected log, i.e shown or hidden
		var elementState = this.showHideArray[index];
		
		// Set all logs to hide, we do this so only one log can be open at a time
		for(var i = 0; i < this.showHideArray.length; i++) this.showHideArray[i] = false;
		
		// Take the state we saved earlier, and reverse it
		this.showHideArray[index] = !elementState;
	}

    initDB() {
        this.sqlite.create({
                name: this.userID +".db",
                location: 'default'
        }).then((db: SQLiteObject) => {

            db.executeSql('CREATE TABLE IF NOT EXISTS wellness(rowid INTEGER PRIMARY KEY, userID INT, date TEXT, moodScore INT, dietScore INT, sleepScore INT, stressScore INT, entryNote TEXT)', {})
                .then(res => {
                        this.openDatabase = db;
                        console.log('Executed SQL');
                        this.getData();
                }).catch(e => console.log(e));			
        }).catch(e => console.log(e));
    }

    getData() {
        this.openDatabase.executeSql('SELECT * FROM wellness ORDER BY rowid DESC', {}).then(res => {
            this.userRecords = [];
            for(var i=0; i<res.rows.length; i++) {
                this.userRecords.push({rowid:res.rows.item(i).rowid,date:res.rows.item(i).date,moodScore:res.rows.item(i).moodScore,dietScore:res.rows.item(i).dietScore,sleepScore:res.rows.item(i).sleepScore,stressScore:res.rows.item(i).stressScore,entryNote:res.rows.item(i).entryNote});
                if(this.userRecords[i].date.indexOf("T") == -1) {
                    console.log("userRecords[" + i + "].Date is in wrong format, fixing now");
                    this.userRecords[i].date = this.userRecords[i].date.substring(0, this.userRecords[i].date.indexOf(" ")) + "T" + this.userRecords[i].date.substring((this.userRecords[i].date.indexOf(" ")+1));
                }
            }
            console.log("User Records:");
            console.log(this.userRecords);
        }).catch(e => console.log(e));
    }

    addData() {
        this.navCtrl.push(DailyEntry);
    }

    //POP a page off the menu stack
    goBack() {
        this.navCtrl.pop();
    }
}

