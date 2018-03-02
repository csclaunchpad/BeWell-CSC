// Base Imports

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Import for alerts
import { AlertController } from 'ionic-angular';

// Import for localStorage
import { Storage } from '@ionic/storage';

// Import for SQLite3
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

// Page imports
import { NewUser } from '../newUser/newUser'; // newUser.html
import { RecoverUser } from '../recoverUser/recoverUser'; // recoverUser.html
import { HomePage } from '../../home'; // home.html

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})

export class Login {

	// Stores our SQLite3 table data
	private userRecords: any = [];
	
	// Our persistent connection to our DB which is set in initDB()
	private openDatabase: SQLiteObject;
	
	// Our references to our view
	private pin: string;
	private firstName: string;
	private userID: string;
	
    constructor(public navCtrl: NavController, private sqlite: SQLite, public alertCtrl: AlertController, private storage: Storage) {
		console.log("Login Page, userID: " + storage.get("userID"));
		
		// Fetch our login flag and check it's value, if it's null, the user is not logged in so redirect them to the login screen
		this.storage.get("userID").then((value) => {
			if(value != null) {
				this.navCtrl.setRoot(HomePage);
			}
		});
		
		// Call initDB without the login flag
		this.initDB(false);
    }

	// Redirect the user to newUser.html
	newUser() {
		this.navCtrl.push(NewUser);
	}
	
	// Redirect the user to recoverUser.html
	recoverUser() {
		this.navCtrl.push(RecoverUser);
	}
	
	// Our login method, call initDB() with the login flag
	login() {
		this.initDB(true);
	}
	
	// This method will show an alert based off the title, subtitle, and button text inputs
	showAlert(titleText, subtitleText, buttonText) {
		console.log(this.navCtrl);
		let alert = this.alertCtrl.create({
			title: titleText,
			subTitle: subtitleText,
			buttons: [buttonText]
		});
		alert.present(alert);
	}
	
	// Queries the DB for the provided pin, returns true if the account was found
	checkPin() {
		// Check our DB variable
		if(this.openDatabase != null) {
			
			// Check our records variable
			if(this.userRecords != null) {
				
				// Iterate through our records variable, if we have a match, take in the userID and return true
				for(var i = 0; i < this.userRecords.length; i++) {
					if(this.userRecords[i].pin.toLowerCase() == this.pin.toLowerCase() && this.userRecords[i].firstName.toLowerCase() == this.firstName.toLowerCase()) {
						this.userID = this.userRecords[i].rowid;
						return true;
					}
				}
			} else {
				console.log("userRecords hasn't been set");
				return false;
			}
		} else {
			console.log("openDatabase hasn't been set");
			return false;
		}
		
		// No user found
		console.log("No user found");
		return false;
	}
	
	loginProcess() {
		// If found
		if(this.checkPin()) {
			console.log("User ID:" + this.userID);
			
			// Set our login flag in localStorage and then redirect to the home page
			this.storage.set("userID", this.userID);
			this.navCtrl.setRoot(HomePage);
		
		// If not found
		} else {
			this.showAlert("Invalid Login", "The first name or pin you have entered wasn't found", "Let's try again!");
		}
	}
	
	// Creates a connection to our DB, performs the login process if given the login flag
	initDB(loginFlag) {
		this.sqlite.create({
			name: 'ionicdb5.db',
			location: 'default'
		}).then((db: SQLiteObject) => {
			
			// Take the open connection and save it to our openDatabase variable
			this.openDatabase = db;
			
			// If the table hasn't been created yet, create it (This will eventually be moved to an initial script that'll run on launch
			db.executeSql('CREATE TABLE IF NOT EXISTS users(rowid INTEGER PRIMARY KEY, firstName TEXT, pin TEXT, securityQuestion TEXT, securityAnswer TEXT)', {})
			.then(res => console.log('Executed SQL'))
			.catch(e => console.log(e));
			
			// Fetch all the users from our DB
			db.executeSql('SELECT * FROM users ORDER BY rowid DESC', {})
				.then(res => {
					
					// Store them all in our userRecords variable
					this.userRecords = [];
					for(var i=0; i<res.rows.length; i++) {
						this.userRecords.push({rowid:res.rows.item(i).rowid, firstName:res.rows.item(i).firstName, pin:res.rows.item(i).pin, securityQuestion:res.rows.item(i).securityQuestion, securityAnswer:res.rows.item(i).securityAnswer})
					}
					
					console.log("User Records:");
					console.log(this.userRecords);
					
					// If login flag is set, start our login checking process, we do it this way because our DB is retrieved as a promise. (Possibly explore better promise handling techniques in the future - JW) 
					if(loginFlag) {
						this.loginProcess();
					}
					
			}).catch(e => console.log(e));
		}).catch(e => console.log(e));
	}
}
