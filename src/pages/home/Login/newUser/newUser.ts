// Base Imports

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Import for SQLite3
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Component({
    selector: 'page-newUser',
    templateUrl: 'newUser.html'
})

export class NewUser {
    
	// Our persistent connection to our DB which is set in initDB();
	private openDatabase: SQLiteObject;
	
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
	
	// Stores our SQLite3 table data
	private userRecords: any = [];
	
	constructor(public navCtrl: NavController, private sqlite: SQLite) {
		
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
		
		// Reset our input validation flags
		this.firstNameFound = false;
		this.invalidName = false;
		this.invalidPin = false;
		this.invalidSecurityQuestion = false;
		this.invalidSecurityAnswer = false;
		
		// Check if the first name is blank, if it is, set the flag
		if(this.firstName == "") {
			this.invalidName = true;
		}
		
		// Check to see if that firstName is already used, if so, set the flag
		for(var i = 0; i < this.userRecords.length; i++) {
			if(this.firstName == this.userRecords[i].firstName) {
				this.firstNameFound = true;
			}
		}
		
		// Check to see if the pin provided is between 4 and 6 characters, if not, set the flag
		if(this.pin.length < 4 || this.pin.length > 6) {
			this.invalidPin = true;
			console.log("Pin is invalid");
		}
		
		// Check to see if the security question is blank, if so, set the flag
		if(this.securityQuestion == "") {
			this.invalidSecurityQuestion = true;
		}
		
		// Check to see if the security answer is blank, if so, set the flag
		if(this.securityAnswer == "") {
			this.invalidSecurityAnswer = true;
		}
		
		// If all flags are false, execute the insert query
		if(!this.invalidName && !this.firstNameFound && !this.invalidPin && !this.invalidSecurityQuestion && !this.invalidSecurityAnswer) {
			this.openDatabase.executeSql('INSERT INTO users(firstName, pin, securityQuestion, securityAnswer) VALUES (?,?,?,?)', [this.firstName, this.pin, this.securityQuestion, this.securityAnswer])
				.then(res => {
					console.log("User added successfully");
					
					// Redirect back to the only possible page call, login.html
					this.navCtrl.pop();
			}).catch(e => console.log(e));
		}
	}
	
	// Initializes our DB, and fetchs all user records storing them in userRecords[]
	initDB() {
		this.sqlite.create({
			name: 'ionicdb5.db',
			location: 'default'
		}).then((db: SQLiteObject) => {
			
			this.openDatabase = db;
			
			db.executeSql('CREATE TABLE IF NOT EXISTS users(rowid INTEGER PRIMARY KEY, firstName TEXT, pin TEXT, securityQuestion TEXT, securityAnswer TEXT)', {})
			.then(res => console.log('Executed SQL'))
			.catch(e => console.log(e));
			
			db.executeSql('SELECT * FROM users ORDER BY rowid DESC', {})
				.then(res => {
					this.userRecords = [];
					for(var i=0; i<res.rows.length; i++) {
						this.userRecords.push({rowid:res.rows.item(i).rowid, firstName:res.rows.item(i).firstName, pin:res.rows.item(i).pin, securityQuestion:res.rows.item(i).securityQuestion, securityAnswer:res.rows.item(i).securityAnswer})
					}
					console.log("User Records:");
					console.log(this.userRecords);
			}).catch(e => console.log(e));
		}).catch(e => console.log(e));
	}
}
