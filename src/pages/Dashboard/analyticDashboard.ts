// Angular/Ionic
//  Imports
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ElementRef, ViewChild, AfterViewInit } from '@angular/core';

// JS Imports
import * as moment from 'moment';
import * as Chart from 'chart.js';

// SQLite3 Imports
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';  //services for SQLite FEB 2018

// Import for Translation Service
import { TranslationService } from './../../assets/services/translationService';
import { Login } from '../home/Login/login/login';

    @Component({
  selector: 'page-analyticDashboard',
  templateUrl: 'analyticDashboard.html'
})

export class Dashboard implements AfterViewInit {

	// Fetch the canvas element that we're storing our chart in
	@ViewChild('mainChart') pageElement: ElementRef; 

	// ------------------------- Mandatory variables for all pages ------------------------- 

	// Stores our DB results for scores
	private userRecords: any = [];
	
	// Persistent reference to our DB
	private openDatabase: SQLiteObject;
	
	// The actual content of the page, fetched via translationService.ts
	private pageElements: Object;
	
	// Controls whether our view is loaded based off of if pageElements has been loaded
	private pageElementsLoaded: boolean = false;        
        	
	// 2D context for graph
	public context: CanvasRenderingContext2D;
	
	// Public declaration for our chart
	public mainChart: any;
	
	// Mood = 0, sleep = 1, stress = 2, diet = 3 
	private graphColours: any = ["#FF9800", "#01579B", "#D32F2F", "#4CAF50"];
	
        private userID: string;
	
	// Booleans for our checkboxes
	moodCheckbox: boolean;
	stressCheckbox: boolean;
	dietCheckbox: boolean;
	sleepCheckbox: boolean;
        	
	fromDate: Date;
	toDate: Date;
	
	constructor(public navCtrl: NavController, private storage: Storage, private sqlite: SQLite, private translationService: TranslationService) {
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
                this.pageElements = this.translationService.load("analyticDashboard.html", value);
		this.pageElementsLoaded = true;
		console.log(this.pageElements);
            } 
            else {
                console.log("No language flag set");
            }			
	});
    } 
	// Triggers after view inits
	ngAfterViewInit() {
		
		this.sqlite.create({
			name: 'ionicdb5.db',
			location: 'default'
		}).then((db: SQLiteObject) => {
			
			this.openDatabase = db;
			
			db.executeSql('CREATE TABLE IF NOT EXISTS wellness(rowid INTEGER PRIMARY KEY, date TEXT, moodScore INT, dietScore INT, sleepScore INT, stressScore INT, entryNote TEXT, amount INT)', {})
			.then(res => console.log('Executed SQL'))
			.catch(e => console.log(e));
			
			db.executeSql('SELECT * FROM wellness ORDER BY rowid DESC', {})
				.then(res => {
					this.userRecords = [];
					for(var i=0; i<res.rows.length; i++) {
						this.userRecords.push({rowid:res.rows.item(i).rowid,date:res.rows.item(i).date,moodScore:res.rows.item(i).moodScore,dietScore:res.rows.item(i).dietScore,sleepScore:res.rows.item(i).sleepScore,stressScore:res.rows.item(i).stressScore,entryNote:res.rows.item(i).entryNote,amount:res.rows.item(i).amount})
					}
					console.log("User Records:");
					console.log(this.userRecords);
			}).catch(e => console.log(e));
		}).catch(e => console.log(e));
		
		// Fetch our 2D context for our graph, this is required when creating the graph
		this.context = ( <HTMLCanvasElement> this.pageElement.nativeElement).getContext('2d');
		
		// Labels and data within the graph
		var _data = {
			labels: ["Feb 8", "Feb 9", "Feb 10", "Feb 11"],
			datasets: [{
				label: "Test Chart",
				data: [5, 3, 10, 8],
				borderColor: "rgba(255, 99, 132, 0.2)",
				fill: false
			}]
		}
		
		// Options for chart
		var _options = {
			scales: {
				xAxes: [{
					type: "time",
					time: {
						displayFormats: {
							quarter: "MMM D"
						}
					},
					display: true
				}],
				yAxes: [{
					ticks: {
						beginAtZero: true
					}
				}]
			}
		}
		
		/* Generate Chart
		/
		/	Type: The kind of chart we want (bar, line, pie, etc)
		/	Data: Our data variable above that contains our labels and our input data
		/	Options: Our options variable above
		/
		*/
		
		this.mainChart = new Chart(this.context, {
			type: "line",
			data: _data,
			options: _options
		});
	}

        		
	generate(fromDate, toDate) {
		console.log("DB:");
		console.log(this.openDatabase);
		console.log(fromDate);
		console.log(toDate);
		
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
		whereClause = "WHERE date BETWEEN DATETIME('" + fromDate + "') AND DATETIME('" + toDate + "') ORDER BY date DESC";
		query = "SELECT " + selectStatement + " FROM wellness " + whereClause;
		console.log(query);
		
		// ----------- Query DB and build graph objects ----------- //
		
		this.openDatabase.executeSql(query, {})
			.then(res => {
				// Our Graph Data
				var graphDataSets = [];
				
				var labelsArray = [];
				
				var moodScoreArray = [];
				var stressScoreArray = [];
				var dietScoreArray = [];
				var sleepScoreArray = [];
				
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
				
				console.log(this.pageElement);
				//this.pageElement.nativeElement.outerHTML = '<canvas #mainChart width="100%" height="100%"></canvas>'; 
				//this.pageElement.nativeElement.parentElement.innerHTML = '<canvas #mainChart width="100%" height="100%"></canvas>';
				
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
						}
					}
				});				
			}).catch(e => console.log(e));
	}

}




