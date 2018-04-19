// Base Imports
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Import for localStorage
import { Storage } from '@ionic/storage';

// Alert Imports
import { AlertController } from 'ionic-angular';

// Import for SQLite3
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

// Import for Translation Service
import { TranslationService } from './../../../../assets/services/translationService';

import * as PH from "password-hash";

@Component({
    selector: 'page-newUser',
    templateUrl: 'newUser.html'
})

export class NewUser {
    
    // Our persistent connection to our DB which is set in initDB();
    private openDatabase: SQLiteObject;
    private openWTDatabase: SQLiteObject;

    // Our references to our view
    private firstName: String;
    private pin: String;
    private securityQuestion: String;
    private securityAnswer: String;

    // Our user input validation flags
    private firstNameFound: boolean;
    private invalidName: boolean;
    private invalidPin: boolean;
    private invalidSecurityQuestion: boolean;
    private invalidSecurityAnswer: boolean;

    private hashedPassword: any;
    private hashedDbName: any;

    // Stores our SQLite3 table data
    private userRecords: any = [];

    // The actual content of the page, fetched via translationService.ts
    private pageElements: Object;

    // Controls whether our view is loaded based off of if pageElements has been loaded
    private pageElementsLoaded: boolean = false;
    
    constructor(public navCtrl: NavController, private sqlite: SQLite, private storage: Storage, private translationService: TranslationService, public alertCtrl: AlertController) {

        // Fetch the content from our language translation service
        var languageFlag = this.storage.get("languageFlag").then((value) => {
            if(value != null) {
                this.pageElements = this.translationService.load("newUser.html", value);
                this.pageElementsLoaded = true; 
                console.log("this.pageElementsNewUser: ");
                console.log(this.pageElements);
            } else {
                // Handle null language flag
            }
        });

        // Initialize our view variables
        this.firstName = "";
        this.pin = "";
        this.securityQuestion = "";
        this.securityAnswer = "";

        // Initialize our input validation flags
        this.firstNameFound = false;
        this.invalidPin= false;
        this.invalidSecurityQuestion = false;
        this.invalidSecurityAnswer = false;

        // Initialize our DB
        this.initDB();
    }

    createUser() {

        // Tracks whether an alert as been shown yet, if one has, and there are other incorrect fields, it won't spam the user with every alert at once
        var alertShown = false;

        // Reset our input validation flags
        this.firstNameFound = false;
        this.invalidName = false;
        this.invalidPin = false;
        this.invalidSecurityQuestion = false;
        this.invalidSecurityAnswer = false;

        // Check if the first name is blank, if it is, set the flag
        if(this.firstName == "" && !alertShown) {
            alertShown = true;
            this.invalidName = true;
            this.showAlert("Invalid First Name", "The first name field is blank!", "No Problem!");
            
        }

        // Check to see if that firstName is already used, if so, set the flag
        if(!alertShown) {
            for(var i = 0; i < this.userRecords.length; i++) {
                if(this.firstName == this.userRecords[i].firstName) {
                    alertShown = true;
                    this.firstNameFound = true;
                    this.showAlert("Invalid First Name", "That name has already been taken!", "Alright!");
                }
            }
        }

        // Check to see if the pin provided is between 4 and 50 characters, if not, set the flag
        if((this.pin.length < 4 || this.pin.length > 50) && !alertShown) {
            alertShown = true;
            this.invalidPin = true;
            this.showAlert("Invalid Pin", "Your pin must be between 4 and 50 characters!", "Sounds good!");
        }
        else {
            this.hashedPassword = PH.generate(this.pin); 
        }                   

        // Check to see if the security question is blank, if so, set the flag
        if(this.securityQuestion == "" && !alertShown) {
            alertShown = true;
            this.invalidSecurityQuestion = true;
            this.showAlert("Invalid Security Question", "Your security question can't be blank!", "Cool!");
        }

        // Check to see if the security answer is blank, if so, set the flag
        if(this.securityAnswer == "" && !alertShown) {
            alertShown = true;
            this.invalidSecurityAnswer = true;
            this.showAlert("Invalid Security Answer", "Your answer cannot be blank!", "For Sure!");
        }

        // If all flags are false, execute the insert query
        if(!this.invalidName && !this.firstNameFound && !this.invalidPin && !this.invalidSecurityQuestion && !this.invalidSecurityAnswer) {
            this.openDatabase.executeSql('INSERT INTO users(firstName, pin, securityQuestion, securityAnswer) VALUES (?,?,?,?)', [this.firstName, this.hashedPassword, this.securityQuestion, this.securityAnswer])
                .then(res => {
                    console.log("User added successfully");

                    // Redirect back to the only possible page call, login.html
                    this.navCtrl.pop();
            }).catch(e => console.log(e));
        }

        // Build Wellness Tracker Table
        this.createWTtable();
    }

    // Initializes our DB, and fetchs all user records storing them in userRecords[]
    initDB() {
        this.sqlite.create({
            name: 'users_CSC.db',
            location: 'default'
        }).then((db: SQLiteObject) => {

            this.openDatabase = db;

            db.executeSql('CREATE TABLE IF NOT EXISTS users(rowid INTEGER PRIMARY KEY, firstName TEXT, pin TEXT, securityQuestion TEXT, securityAnswer TEXT)', {})
            .then(res => console.log('Executed SQL'))
            .catch(e => console.log(e));

            db.executeSql('SELECT * FROM users ORDER BY rowid DESC', {}).then(res => {
                this.userRecords = [];
                for(var i=0; i<res.rows.length; i++) {
                    this.userRecords.push({rowid:res.rows.item(i).rowid, firstName:res.rows.item(i).firstName, pin:res.rows.item(i).pin, securityQuestion:res.rows.item(i).securityQuestion, securityAnswer:res.rows.item(i).securityAnswer})
                }
                console.log("User Records: TJ");
                console.log("User Records: TJ", this.userRecords[1].pin);
                console.log("User Records: TJ", (this.userRecords.length+1));                                
            }).catch(e => console.log(e));
        }).catch(e => console.log(e));
    }

    createWTtable(){
        console.log("userid tj", this.userRecords.rowid)

        this.sqlite.create({
            name: (this.userRecords.length+1) + ".db",
            location: 'default'
        }).then((db: SQLiteObject) => {

            this.openWTDatabase = db;
                db.executeSql('CREATE TABLE IF NOT EXISTS wellness(rowid INTEGER PRIMARY KEY, userID INT, date TEXT, moodScore INT, dietScore INT, sleepScore INT, stressScore INT, entryNote TEXT)', {})
                .then(res => console.log('Executed SQL'))
                .catch(e => console.log(e));
                console.log("wellness created.")
            }).catch(e => console.log(e));
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
}
