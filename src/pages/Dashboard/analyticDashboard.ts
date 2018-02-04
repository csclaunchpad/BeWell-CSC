
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


//services
import { DataServiceProvider } from '../../providers/data-service/data-service';


@Component({
  selector: 'page-analyticDashboard',
  templateUrl: 'analyticDashboard.html'
})
export class Dashboard {

    constructor(public navCtrl: NavController, public dataService: DataServiceProvider) 

    {
  	//automatically load the wellness tracker listing when the page arrives
        this.dataService.wellness_tracker_list("wellness").subscribe((response)=> 
        {
            this.dataService.wellness = response;

          //convert the JSON text to a JSON object so you can reference it as wellness.moodScore in the ngFor
      		for (var a = 0; a < response.length;a++)
	      		{this.dataService.wellness[a] = JSON.parse(this.dataService.wellness[a].jsondata);}
        });
    }


//define the variables to link with the ngModel in the main page
    private moodScore:number = 1;
    private sleepScore:number = 1;
    private stressScore:number = 1;
    private dietScore:number = 1;
    private entryNote:string = "";

  
//a simple function to submit the scores into the database
submitWellness()
{
      this.dataService.wellness_tracker_add(this.moodScore, this.sleepScore, this.stressScore, this.dietScore, this.entryNote).subscribe((response)=> 
        {
          alert("Score Submitted");
          console.log(response);

		//load the latest version from the DB
		 this.dataService.wellness_tracker_list("wellness").subscribe((response2)=> 
        {

        	 this.dataService.wellness = response2;
          //convert the JSON text to a JSON object so you can reference it as wellness.moodScore in the ngFor
      		for (var a = 0; a < response2.length;a++)
	      		{this.dataService.wellness[a] = JSON.parse(this.dataService.wellness[a].jsondata);}
        });



        });

}



}



/*
//------------------ Analytic Dashboard Controller --------------------
app.controller('analyticDashboardCtrl', ['$scope', "queryService", "translationService", "$window", function($scope, queryService, translationService, $window){
	
	// Check to see if a user is logged in, if not, redirect to login screen
	if(localStorage.getItem("user") != null) {
		
		// Mood = 0, sleep = 1, stress = 2, diet = 3 
		$scope.graphColours = ["#FF9800", "#01579B", "#D32F2F", "#4CAF50"];
		
		// Form values
		$scope.userInput = {
			moodCheckbox: false,
			sleepCheckbox: false,
			stressCheckbox: false,
			dietCheckbox: false,
			fromDate: new Date(),
			toDate: new Date()
		}
		
		// Page elements
		$scope.pageElements = translationService.translate("analyticDashboard.html");

		$scope.redirectToCheckinLog = function() {
			$window.location.href= "#/checkinLog";
		}
		
		// Launch function
		$scope.pageLoad = function() {
			// Tell our loading bar that the back-end has started
			$scope.pageElements.loadStarted = true;
			
			// Set up our dates for last month
			
			// Grab both our dates
			var today = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
			var todayMinusAMonth = moment().subtract(1, 'months').format('YYYY-MM-DD HH:mm:ss');
				
			// Set the times to their min or max hour accordingly
			var finalTodayDate = new String(today.slice(0, 10) + ' 23' + today.slice(13, today.length));
			var finalTodayMinusAMonth = new String(todayMinusAMonth.slice(0, 10) + ' 00' + todayMinusAMonth.slice(13, todayMinusAMonth.length));

			// Turn them into a string object so we can use them in our queries
			finalTodayDate = finalTodayDate.toString();
			finalTodayMinusAMonth = finalTodayMinusAMonth.toString();
			
			// Call the method to generate the chart
			$scope.generateChart(finalTodayMinusAMonth, finalTodayDate, true);
		}
		
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

