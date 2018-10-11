// ------------------------- Mandatory imports for all pages ------------------------- //

// Component Imports
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// Alert Imports
import { AlertController } from 'ionic-angular';

// SQLite3 Imports
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';

// Local Storage Imports
import { Storage } from '@ionic/storage';

// Import for Translation Service
import { TranslationService } from './../../../assets/services/translationService';

// ------------------------- Page Specific Imports ------------------------- //
// Page Imports
import { Login } from '../../home/Login/login/login';
import { CheckinLog } from '../CheckinLog/checkinLog';

// Moment (Date framework) Import
import * as moment from 'moment';

//@IonicPage()
@Component({
    selector: 'page-dailyEntry',
    templateUrl: 'dailyEntry.html'
})
export class DailyEntry {
	
    // ------------------------- Mandatory variables for all pages ------------------------- //

    // The actual content of the page, fetched via translationService.ts
    private pageElements: Object;

    // Controls whether our view is loaded based off of if pageElements has been loaded
    private pageElementsLoaded: boolean = false;

    private userID: string;

    private openDatabase: SQLiteObject;

    // ------------------------- Page Specific Variables ------------------------- //

    data = { dateTime: moment().format(), date: moment().format(), moodScore:5, dietScore:5, sleepScore:5, stressScore:5, entryNote:"" };

    constructor(public navCtrl: NavController, public navParams: NavParams, private sqlite: SQLite, private toast: Toast, private storage: Storage, private translationService: TranslationService, public alertCtrl: AlertController) {
        this.authenticate();
        this.configuration();
    }

    configuration() {

        console.log("Date: " + this.data.date);

        var languageFlag = this.storage.get("languageFlag").then((value) => {
            if(value != null) {
                this.pageElements = this.translationService.load("dailyEntry.html", value);
                this.pageElementsLoaded = true;
                console.log("this.data.date: " + this.data.date);
                console.log("this.date.dateTime: " + this.data.dateTime);
                console.log(this.pageElements);
                this.initDB();
            } else {
                // Handle null language flag
            }
        });
    }

    authenticate() {
        this.storage.get("userID").then((value) => {
            if(value == null) {
                this.navCtrl.setRoot(Login);
            }
            this.userID = value;
        });	
    }

    updateScores(selectedValue: any) {
        console.log("HIT");
    }
    

    initDB() {
        console.log("TJDE:", this.userID +".db" );
        this.sqlite.create({
            name: this.userID +".db",
            location: 'default'
        }).then((db: SQLiteObject) => {
            db.executeSql('CREATE TABLE IF NOT EXISTS wellness(rowid INTEGER PRIMARY KEY, userID INT, date TEXT, moodScore INT, dietScore INT, sleepScore INT, stressScore INT, entryNote TEXT)', {} as any)
            .then(res => {
                console.log('Executed Create Table Wellness Query');
                this.openDatabase = db;
            }).catch(e => console.log(e));
        })
    }

    saveData() {
        
        if(this.openDatabase != undefined) {
            
            var fullDate = this.data.date.substring(0, this.data.date.indexOf("T")) + "T" + this.data.dateTime.substring((this.data.dateTime.indexOf("T")+1));
            
            this.openDatabase.executeSql('INSERT INTO wellness VALUES(NULL,?,?,?,?,?,?,?)',[this.userID, fullDate,this.data.moodScore,this.data.dietScore,this.data.sleepScore,this.data.stressScore,this.data.entryNote]).then(res => {this.navCtrl.pop()});
        } else {
            console.log("openDatabase isn't initialized");
        }
    }

    // Shows alert based on the title, subtitle, and button text supplied
    showAlert(titleText, subtitleText, buttonText) {
        console.log(this.navCtrl);
        let alert = this.alertCtrl.create({
            title: titleText,
            subTitle: subtitleText,
            buttons: [buttonText]
        });
        alert.present(alert);
    }

    //POP a page off the menu stack        
    goBack() {
        this.navCtrl.pop();
    }
}