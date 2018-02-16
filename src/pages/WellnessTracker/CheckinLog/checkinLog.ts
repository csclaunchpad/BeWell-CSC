import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { CheckinLogInfo } from '../CheckinLogInfo/checkinLogInfo';
//import { DailyEntry } from '../DailyEntry/dailyEntry';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';  //services for SQLite FEB 2018
import { Toast } from '@ionic-native/toast';

//import { DataServiceProvider } from '../../../providers/data-service/data-service';



@Component({
  selector: 'page-checkinLog',
  templateUrl: 'checkinLog.html'
})

export class CheckinLog {
//    checkinLogInfo = CheckinLogInfo;
//        dailyntry = DailyEntry;

    constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private sqlite: SQLite,
    private toast: Toast) {}




/*
 * //------------------ Checkin Log Controller Controller --------------------
app.controller('CheckinLogInfoCtrl', ['$scope', "$routeParams", "$location", "$window", "entryList", "scoreManager", "translationService", function($scope, $routeParams, $location, $window, entryList, scoreManager, translationService){

	// Check to see if a user is logged in, if not, redirect to login screen
//	if(localStorage.getItem("user") != null) {
		
		$scope.pageElements = translationService.translate("checkinLogInfo.html");
		
		var id = $routeParams.id, currentIndex;

		$scope.entry = null;
		$scope.hasNext = true;
		$scope.hasPrev = true;
		$scope.nextEntry = nextEntry;
		$scope.prevEntry = prevEntry;
		
		$scope.notesProvided = true;

		setEntry();
		
		// Calculate the total score of the checkin, and then use it to display the appropriate images
		$scope.checkinTotal = ((parseInt($scope.entry.moodScore) + parseInt($scope.entry.sleepScore) + scoreManager.reverseScore(parseInt($scope.entry.stressScore)) + parseInt($scope.entry.dietScore)) / 4).toFixed(0);
		
		// Check if the note is blank, if so, enable our "No notes were entered" element.
		if($scope.entry.entryNote === null) {
			$scope.notesProvided = false;
		}
		
		function setEntry() {

			for(var i = 0, len = entryList.length; i < len; i++){
				var entry = entryList[i];

				if (entry.entryID === id){
					$scope.entry = entry;
					currentIndex = i;
					setHasNext();
					setHasPrev();
					break;
				}
			}
		}

		function nextEntry(){
			if ($scope.hasNext) {
				currentIndex++;
				updateUrl();
			}
		}

		function prevEntry(){
			if($scope.hasPrev) {
				currentIndex--;
				updateUrl();
			}
		}

		function updateUrl(){
			if (currentIndex <= entryList.length - 1 && currentIndex >= 0) {
				var entryId = entryList[currentIndex].entryID;
				$location.path("checkinLogInfo/" + entryId);
			}
		}

		function setHasNext(){
			$scope.hasNext = currentIndex < entryList.length - 1;
		}

		function setHasPrev(){
			$scope.hasPrev = currentIndex !== 0;
		}
	} else {
		$window.location.href = "#/home";
	}
}]);

 * 
 */    
}

