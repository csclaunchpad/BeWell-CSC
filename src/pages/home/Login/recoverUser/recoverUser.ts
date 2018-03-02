// Base Imports

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Import for SQLite3
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Component({
    selector: 'page-recoverUser',
    templateUrl: 'recoverUser.html'
})

export class RecoverUser {
	
	// Our references to our view
	private firstName: String;
	private securityQuestion: String;
	private securityAnswer: String;
	private pin: String;
	private userFoundID: String;
	
	// Our phase and input validation flags
	private phase1: boolean;
	private phase2: boolean;
	private phase3: boolean;
	private incorrectInput: boolean;
	private inputNotFound: boolean;
	private invalidPin: boolean;
	
	// Stores our SQLite3 table data
	private userRecords: any = [];
	
	// Our persistent connection to our DB which is set in initDB()
	private openDatabase: SQLiteObject;
	
	constructor(public navCtrl: NavController, private sqlite: SQLite) {
		
		// Set our initial flags
		this.phase1 = true;
		this.phase2 = false;
		this.phase3 = false;
		
		// Initialize our input validation flags
		this.incorrectInput = false;
		this.inputNotFound = false;
		this.invalidPin = false;
		
		// Initialize our DB
		this.initDB();
    }
	
	// Phase 1: Grab first name and check to see if it exists in our DB
	submitPhase1() {
	
		var nameFound = false;
		
		for(var i = 0; i < this.userRecords.length; i++) {
			if(this.firstName == this.userRecords[i].firstName) {
				this.phase1 = false;
				this.phase2 = true;
				nameFound = true;
				console.log("Name Found");
				this.userFoundID = this.userRecords[i].rowid;
				this.securityQuestion = this.userRecords[i].securityQuestion;
			}
		}
		
		if(!nameFound) {
			this.inputNotFound = true;
			console.log("Name not found");
		}
	}
	
	// Phase 2: User has been found, now ask them their security question
	submitPhase2() {
		var answerFound = false;
		
		for(var i = 0; i < this.userRecords.length; i++) {
			if(this.securityAnswer == this.userRecords[i].securityAnswer) {
				this.phase2 = false;
				this.phase3 = true;
				answerFound = true;
				console.log("Answer is correct");
			}
		}
		
		if(!answerFound) {
			this.incorrectInput = true;
			console.log("Answer is not correct");
		}
	}
	
	// Phase 3: User got the security question right, allow them to enter a new pin, once entered, update the user in the DB
	submitPhase3() {
		if(this.pin.length < 4 || this.pin.length > 6) {
			this.invalidPin = true;
			console.log("That pin is invalid");
		} else {
			this.openDatabase.executeSql('UPDATE users SET pin = ? WHERE rowid= ?', [this.pin, this.userFoundID]).then(res => {
				console.log(this.userFoundID);
				console.log("User pin successfully updated");
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
