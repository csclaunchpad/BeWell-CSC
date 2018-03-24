// ------------------------- Mandatory imports for all pages ------------------------- //
// Component Imports
import { Component } from '@angular/core';
import { NavController, Content } from 'ionic-angular';

// Local Storage Imports
import { Storage } from '@ionic/storage';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';  //services for SQLite FEB 2018
// Import for Translation Service
import { TranslationService } from './../../assets/services/translationService';

// ------------------------- Page Specific Imports ------------------------- //
// Accessible DOM Imports
import { ElementRef, ViewChild } from '@angular/core';

// Alert Imports
import { AlertController } from 'ionic-angular';

// Page Imports
import { Login } from '../home/Login/login/login';

// JS Imports
import * as moment from 'moment';
import * as Chart from 'chart.js';

@Component({
  selector: 'page-analyticDashboard',
  templateUrl: 'analyticDashboard.html'
})

export class Dashboard {
	
	// ------------------------- Mandatory variables for all pages ------------------------- 
	// Stores our DB results for scores
	private userRecords: any = [];
	
	// Persistent reference to our DB
	private openDatabase: SQLiteObject;
	
	// The actual content of the page, fetched via translationService.ts
	private pageElements: Object;
	
	// Controls whether our view is loaded based off of if pageElements has been loaded
	private pageElementsLoaded: boolean = false;
	
	// ------------------------- Page Specific Variables ------------------------- //
	
	// Fetch the canvas element that we're storing our chart in
	@ViewChild('mainChart') pageElement: ElementRef; 
	
	// 2D context for graph
	private context: CanvasRenderingContext2D;
	
	// Public declaration for our chart
	private mainChart: any;
	
	// Mood = 0, sleep = 1, stress = 2, diet = 3 
	private graphColours: any = ["#FF9800", "#01579B", "#D32F2F", "#4CAF50"];
	
	private userID: string;
	
	// Initializing references to our view
	moodCheckbox: boolean;
	stressCheckbox: boolean;
	dietCheckbox: boolean;
	sleepCheckbox: boolean;
	fromDate: Date;
	toDate: Date;
	
	constructor(public navCtrl: NavController, private sqlite: SQLite, public alertCtrl: AlertController, private storage: Storage, private translationService: TranslationService) {
		
		this.authenticate();
		this.configuration();
	}
	
	authenticate() {
		// Grabs login flag, if null, redirect to login page
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
				this.pageElements = this.translationService.load("analyticDashboard.html", value);
				this.pageElementsLoaded = true;
			} else {
				// Handle null language flag
			}
			
			// Initialize our DB
			this.initDB();
		});		
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
	
	// Checks if input is valid, returns true if input is valid, shows alerts and returns false if not
	validateInput() {
		
		if(!this.moodCheckbox && !this.stressCheckbox && !this.dietCheckbox && !this.sleepCheckbox) {
			this.showAlert("Whoops!", "You don't have a score checkbox checked!", "Right on!");
			return false;
		}
		
		if(this.fromDate == null || this.toDate == null) {
			this.showAlert("Whoops!", "You haven't selected both a from-date and to-date", "For sure!");
			return false;
		}
		
		return true;
	}
	
	
	// Generates a chart based off data from view
	generate(fromDate, toDate) {
		
		// Checks if the input is valid, if not, don't run
		if(this.validateInput()) {
			
			var selectStatement = "";
			var whereClause = "";
			var query = "";
			
			// ----------- Building SQL Query ----------- //
			
			// We need to fill variables depending on whether they were selected or not (We avoid string building doing it this way)
			var moodScore = "";
			var stressScore = "";
			var dietScore = "";
			var sleepScore = "";
			
			if(this.moodCheckbox) {
				moodScore = "moodScore, ";
			}
			
			if(this.stressCheckbox) {
				stressScore = "stressScore, ";
			}
			
			if(this.dietCheckbox) {
				dietScore = "dietScore, ";
			}
			
			if(this.sleepCheckbox) {
				sleepScore = "sleepScore, ";
			}

			// ----------- Building/Formatting Dates ----------- //
			
			// Formatting dates
			fromDate = moment(fromDate).format('YYYY-MM-DD HH:mm:ss');
			toDate = moment(toDate).format('YYYY-MM-DD HH:mm:ss');
				
			// Set the times to their min or max hour accordingly
			var finalFromDate = new String(fromDate.slice(0, 10) + ' 00' + fromDate.slice(13, fromDate.length));
			var finalToDate = new String(toDate.slice(0, 10) + ' 23' + toDate.slice(13, toDate.length));

			// Turn them into a string object so we can use them in our queries
			fromDate = finalFromDate.toString();
			toDate = finalToDate.toString();
			
			// ----------- Combining above data to form queries ----------- //
			
			// Generating the select and where clause based off data above
			selectStatement = moodScore + stressScore + dietScore + sleepScore + "date";		
			whereClause = "WHERE date BETWEEN DATETIME('" + fromDate + "') AND DATETIME('" + toDate + "') AND userID = '" + this.userID + "' ORDER BY date DESC";
			query = "SELECT " + selectStatement + " FROM wellness " + whereClause;
			
			// ----------- Query DB and build graph objects ----------- //
			
			this.openDatabase.executeSql(query, {}).then(res => {
				
				// Our Graph Data
				var graphDataSets = [];
				
				var labelsArray = [];
				
				// Stores all data in their respective arrays
				var moodScoreArray = [];
				var stressScoreArray = [];
				var dietScoreArray = [];
				var sleepScoreArray = [];
				
				console.log(res);
				
				for(var i=0; i< res.rows.length; i++) {
					
					labelsArray[i] = res.rows.item(i).date;
					
					if(this.moodCheckbox) {
						moodScoreArray[i] = res.rows.item(i).moodScore;
					}
					
					if(this.stressCheckbox) {
						stressScoreArray[i] = res.rows.item(i).stressScore;
					}
					
					if(this.dietCheckbox) {
						dietScoreArray[i] = res.rows.item(i).dietScore;
					}
					
					if(this.sleepCheckbox) {
						sleepScoreArray[i] = res.rows.item(i).sleepScore;
					}
				}
				
				// If moodCheckbox was selected, build our mood line
				if(this.moodCheckbox) {

					var moodCheckboxIndex = graphDataSets.length;

					graphDataSets[graphDataSets.length] = { 
						data: moodScoreArray,
						label: "Mood",
						borderColor: this.graphColours[0],
						fill: false
					}
				}

				// If stressCheckbox was selected, build our stress line
				if(this.stressCheckbox) {

					var stressCheckboxIndex = graphDataSets.length;

					graphDataSets[graphDataSets.length] = { 
						data: stressScoreArray,
						label: "Stress",
						borderColor: this.graphColours[2],
						fill: false
					}
				}

				// If dietCheckbox was selected, build our diet line
				if(this.dietCheckbox) {

					var dietCheckboxIndex = graphDataSets.length;

					graphDataSets[graphDataSets.length] = { 
						data: dietScoreArray,
						label: "Diet",
						borderColor: this.graphColours[3],
						fill: false
					}
				}

				// If sleepCheckbox was selected, build our sleep quality line
				if(this.sleepCheckbox) {

					var sleepCheckboxIndex = graphDataSets.length;

					graphDataSets[graphDataSets.length] = { 
						data: sleepScoreArray,
						label: "Sleep",
						borderColor: this.graphColours[1],
						fill: false
					}
				}
				
				var datasetsObject = [];				
				
				if(this.moodCheckbox) {
					datasetsObject[datasetsObject.length] = {label: graphDataSets[moodCheckboxIndex].label, data: graphDataSets[moodCheckboxIndex].data, borderColor: graphDataSets[moodCheckboxIndex].borderColor, fill: graphDataSets[moodCheckboxIndex].fill};
				}
				
				if(this.stressCheckbox) {
					datasetsObject[datasetsObject.length] = {label: graphDataSets[stressCheckboxIndex].label, data: graphDataSets[stressCheckboxIndex].data, borderColor: graphDataSets[stressCheckboxIndex].borderColor, fill: graphDataSets[stressCheckboxIndex].fill};
				}
				
				if(this.dietCheckbox) {
					datasetsObject[datasetsObject.length] = {label: graphDataSets[dietCheckboxIndex].label, data: graphDataSets[dietCheckboxIndex].data, borderColor: graphDataSets[dietCheckboxIndex].borderColor, fill: graphDataSets[dietCheckboxIndex].fill};
				}
				
				if(this.sleepCheckbox) {
					datasetsObject[datasetsObject.length] = {label: graphDataSets[sleepCheckboxIndex].label, data: graphDataSets[sleepCheckboxIndex].data, borderColor: graphDataSets[sleepCheckboxIndex].borderColor, fill: graphDataSets[sleepCheckboxIndex].fill};
				}
				
				console.log(datasetsObject);
				
				// Fetch our 2D context for our graph, this is required when creating the graph
				this.context = ( <HTMLCanvasElement> this.pageElement.nativeElement).getContext('2d');
				
				// Generate Chart
				var mainChart = new Chart(this.context, {
					
					type: 'line',
					data: {
						labels: labelsArray,
						datasets: datasetsObject
					},
					options: {					
						scales: {
							xAxes: [{
								type: 'time',
								distribution: 'series',
								time: {
									displayFormats: {
										quarter: 'MMM D'                            
									}
								}
							}],
							yAxes: [{
								ticks: {
									beginAtZero: true
								}
							}]
						},
						responsive: true
					}
				});				
			}).catch(e => console.log(e));
		}
	}
	
	// Initializes our DB, and fetchs all user records storing them in userRecords[]
	initDB() {
		this.sqlite.create({
			name: 'ionicdb9.db',
			location: 'default'
		}).then((db: SQLiteObject) => {
			
			this.openDatabase = db;
			
			this.openDatabase.executeSql('CREATE TABLE IF NOT EXISTS wellness(rowid INTEGER PRIMARY KEY, userID INT, date TEXT, moodScore INT, dietScore INT, sleepScore INT, stressScore INT, entryNote TEXT)', {})
			.then(res => console.log('Executed SQL'))
			.catch(e => console.log(e));
			
			this.openDatabase.executeSql('SELECT * FROM wellness ORDER BY rowid DESC', {})
				.then(res => {
					this.userRecords = [];
					for(var i=0; i<res.rows.length; i++) {
						this.userRecords.push({rowid:res.rows.item(i).rowid,date:res.rows.item(i).date,moodScore:res.rows.item(i).moodScore,dietScore:res.rows.item(i).dietScore,sleepScore:res.rows.item(i).sleepScore,stressScore:res.rows.item(i).stressScore,entryNote:res.rows.item(i).entryNote})
					}
					console.log("User Records:");
					console.log(this.userRecords);
			}).catch(e => console.log(e));
		}).catch(e => console.log(e));
	}
}