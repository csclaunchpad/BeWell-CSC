// Angular/Ionic Imports

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ElementRef, ViewChild, AfterViewInit } from '@angular/core';

// JS Imports
import * as moment from 'moment';
import * as Chart from 'chart.js';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';  //services for SQLite FEB 2018

// Services
//import { DataServiceProvider } from '../../providers/data-service/data-service';


@Component({
  selector: 'page-analyticDashboard',
  templateUrl: 'analyticDashboard.html'
})

export class Dashboard implements AfterViewInit {

	// Fetch the canvas element that we're storing our chart in
	@ViewChild('mainChart') pageElement: ElementRef; 
	
	// 2D context for graph
	public context: CanvasRenderingContext2D;
	
	// Public declaration for our chart
	public mainChart: any;
	
	// Stores our DB results for scores
	public userRecords: any = [];
	
	// Mood = 0, sleep = 1, stress = 2, diet = 3 
	private graphColours: any = ["#FF9800", "#01579B", "#D32F2F", "#4CAF50"];
	
	private openDatabase: SQLiteObject;
	
	// Booleans for our checkboxes
	moodCheckbox: boolean;
	stressCheckbox: boolean;
	dietCheckbox: boolean;
	sleepCheckbox: boolean;
	
	fromDate: Date;
	toDate: Date;
	
	constructor(public navCtrl: NavController, private sqlite: SQLite) {}
	
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



/*
//------------------ Analytic Dashboard Controller --------------------
app.controller('analyticDashboardCtrl', ['$scope', "queryService", "translationService", "$window", function($scope, queryService, translationService, $window){
	
	
		// Called when "Generate" button is clicked, creates a chart
		$scope.generateChart = function(fromDate, toDate, pageLaunchFlag) {
			
			if(pageLaunchFlag === null) pageLaunchFlag = false;
			
			// Tell our loading bar that the back-end has started
			$scope.pageElements.loadStarted = true;
			
			// Reset our counters
			$scope.totalAverage = 0;
			$scope.totalCheckins = 0;
			$scope.moodScoreAverage = 0;
			$scope.stressScoreAverage = 0;
			$scope.dietScoreAverage = 0;
			$scope.sleepScoreAverage = 0;
			
			$scope.pageElements.maximizeButton = !$scope.pageElements.maximizeButton;
			$scope.pageElements.showOutput = true;
			
			// Display the appropriate elements if their checkbox was selected
			if($scope.userInput.moodCheckbox || pageLaunchFlag) {
				$scope.pageElements.moodValues = true;
			} else {
				$scope.pageElements.moodValues = false;
			}
			
			if($scope.userInput.stressCheckbox || pageLaunchFlag) {
				$scope.pageElements.stressValues = true;
			} else {
				$scope.pageElements.stressValues = false;
			}
			
			if($scope.userInput.dietCheckbox || pageLaunchFlag) {
				$scope.pageElements.dietValues = true;
			} else {
				$scope.pageElements.dietValues = false;
			}
			
			if($scope.userInput.sleepCheckbox || pageLaunchFlag) {
				$scope.pageElements.sleepValues = true;
			} else {
				$scope.pageElements.sleepValues = false;
			}
			
			var selectStatement = "";
			var whereClause = "";
			
			// We need to fill variables depending on whether they were selected or not (We avoid string building doing it this way)
			var moodScore = "";
			var stressScore = "";
			var dietScore = "";
			var sleepScore = "";
			
			if($scope.userInput.moodCheckbox || pageLaunchFlag) {
				moodScore = "moodScore, ";
			}
			
			if($scope.userInput.stressCheckbox || pageLaunchFlag) {
				stressScore = "stressScore, ";
			}
			
			if($scope.userInput.dietCheckbox || pageLaunchFlag) {
				dietScore = "dietScore, ";
			}
			
			if($scope.userInput.sleepCheckbox || pageLaunchFlag) {
				sleepScore = "sleepScore, ";
			}
			
			if(!pageLaunchFlag) {
			
				// Format our dates
				var fromDate = moment(fromDate).format('YYYY-MM-DD HH:mm:ss');
				var toDate = moment(toDate).format('YYYY-MM-DD HH:mm:ss');
					
				// Set the times to their min or max hour accordingly
				var finalFromDate = new String(fromDate.slice(0, 10) + ' 00' + fromDate.slice(13, fromDate.length));
				var finalToDate = new String(toDate.slice(0, 10) + ' 23' + toDate.slice(13, toDate.length));

				// Turn them into a string object so we can use them in our queries
				fromDate = finalFromDate.toString();
				toDate = finalToDate.toString();
			}
			
			// Generating the select and where clause
			selectStatement = moodScore + stressScore + dietScore + sleepScore + "dateEntered";		
			whereClause = "userID = '" + localStorage.getItem("user") + "' AND dateEntered BETWEEN DATETIME('" + fromDate + "') AND DATETIME('" + toDate + "') ORDER BY dateEntered DESC";

			// Query the actual line graph data
			queryService.selectQuery(selectStatement, "wellnessTrackerEntries", whereClause).then(function(response) {
				$scope.entries = response.data;
			
				var labelsArray = [];
				
				var moodScoreArray = [];
				var stressScoreArray = [];
				var dietScoreArray = [];
				var sleepScoreArray = [];				
				
				var moodScoreTotal = 0;
				var stressScoreTotal = 0;
				var dietScoreTotal = 0;
				var sleepScoreTotal = 0;
				
				$scope.totalCheckins = 0;
				
				// Each array is aligned, apply the actual values from our query
				for(var i = 0; i < $scope.entries.length; i++) {
					
					$scope.totalCheckins++;
					
					labelsArray[i] = $scope.entries[i].dateEntered;
					
					if($scope.userInput.moodCheckbox || pageLaunchFlag) {
						moodScoreArray[i] = $scope.entries[i].moodScore;
						moodScoreTotal = moodScoreTotal + parseInt($scope.entries[i].moodScore);
					}
					
					if($scope.userInput.stressCheckbox || pageLaunchFlag) {
						stressScoreArray[i] = $scope.entries[i].stressScore;
						stressScoreTotal = stressScoreTotal + parseInt($scope.entries[i].stressScore);
					}
					
					if($scope.userInput.dietCheckbox || pageLaunchFlag) {
						dietScoreArray[i] = $scope.entries[i].dietScore;
						dietScoreTotal = dietScoreTotal + parseInt($scope.entries[i].dietScore);
					}
					
					if($scope.userInput.sleepCheckbox || pageLaunchFlag) {
						sleepScoreArray[i] = $scope.entries[i].sleepScore;
						sleepScoreTotal = sleepScoreTotal + parseInt($scope.entries[i].sleepScore);
					}
				}
				
				// If their appropriate checkbox is selected, calculate the average score
				if($scope.userInput.moodCheckbox || pageLaunchFlag) $scope.moodScoreAverage = (moodScoreTotal / $scope.totalCheckins).toFixed(2);
				if($scope.userInput.stressCheckbox || pageLaunchFlag) $scope.stressScoreAverage = (stressScoreTotal / $scope.totalCheckins).toFixed(2);
				if($scope.userInput.dietCheckbox || pageLaunchFlag) $scope.dietScoreAverage = (dietScoreTotal / $scope.totalCheckins).toFixed(2);
				if($scope.userInput.sleepCheckbox || pageLaunchFlag) $scope.sleepScoreAverage = (sleepScoreTotal / $scope.totalCheckins).toFixed(2);
				
				// Build our graph object
				var graphDataSets = [];
				
				// If moodCheckbox was selected, build our mood line
				if($scope.userInput.moodCheckbox || pageLaunchFlag) {
					
					var moodCheckboxIndex = graphDataSets.length;
					
					graphDataSets[graphDataSets.length] = { 
						data: moodScoreArray,
						label: $scope.pageElements.moodText,
						borderColor: $scope.graphColours[0],
						fill: false
					}
				}
				
				// If stressCheckbox was selected, build our stress line
				if($scope.userInput.stressCheckbox || pageLaunchFlag) {
					
					var stressCheckboxIndex = graphDataSets.length;
					
					graphDataSets[graphDataSets.length] = { 
						data: stressScoreArray,
						label: $scope.pageElements.stressText,
						borderColor: $scope.graphColours[2],
						fill: false
					}
				}
				
				// If dietCheckbox was selected, build our diet line
				if($scope.userInput.dietCheckbox || pageLaunchFlag) {
					
					var dietCheckboxIndex = graphDataSets.length;
					
					graphDataSets[graphDataSets.length] = { 
						data: dietScoreArray,
						label: $scope.pageElements.dietText,
						borderColor: $scope.graphColours[3],
						fill: false
					}
				}
				
				// If sleepCheckbox was selected, build our sleep quality line
				if($scope.userInput.sleepCheckbox || pageLaunchFlag) {
					
					var sleepCheckboxIndex = graphDataSets.length;
					
					graphDataSets[graphDataSets.length] = { 
						data: sleepScoreArray,
						label: $scope.pageElements.sleepText,
						borderColor: $scope.graphColours[1],
						fill: false
					}
				}
				
				var datasetsObject = [];				
				
				if($scope.userInput.moodCheckbox || pageLaunchFlag) {
					datasetsObject[datasetsObject.length] = {label: graphDataSets[moodCheckboxIndex].label, data: graphDataSets[moodCheckboxIndex].data, borderColor: graphDataSets[moodCheckboxIndex].borderColor, fill: graphDataSets[moodCheckboxIndex].fill};
				}
				
				if($scope.userInput.stressCheckbox || pageLaunchFlag) {
					datasetsObject[datasetsObject.length] = {label: graphDataSets[stressCheckboxIndex].label, data: graphDataSets[stressCheckboxIndex].data, borderColor: graphDataSets[stressCheckboxIndex].borderColor, fill: graphDataSets[stressCheckboxIndex].fill};
				}
				
				if($scope.userInput.dietCheckbox || pageLaunchFlag) {
					datasetsObject[datasetsObject.length] = {label: graphDataSets[dietCheckboxIndex].label, data: graphDataSets[dietCheckboxIndex].data, borderColor: graphDataSets[dietCheckboxIndex].borderColor, fill: graphDataSets[dietCheckboxIndex].fill};
				}
				
				if($scope.userInput.sleepCheckbox || pageLaunchFlag) {
					datasetsObject[datasetsObject.length] = {label: graphDataSets[sleepCheckboxIndex].label, data: graphDataSets[sleepCheckboxIndex].data, borderColor: graphDataSets[sleepCheckboxIndex].borderColor, fill: graphDataSets[sleepCheckboxIndex].fill};
				}
				
				var chartDiv = document.getElementById("chartDiv");
				chartDiv.innerHTML = '<canvas id="mainChart"></canvas>';
				
				// Generate Chart
				var mainChart = new Chart(document.getElementById("mainChart").getContext('2d'), {
					
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
							}] 
						}
					}
				});
				
				$scope.pageElements.loadComplete = true;
			});
		}
		
		$scope.pageLoad();
	} else {
		$window.location.href = "#/home";
	}
	
//}]);*/ 

