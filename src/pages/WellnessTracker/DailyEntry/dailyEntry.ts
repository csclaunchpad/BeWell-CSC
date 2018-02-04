import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//services
import { DataServiceProvider } from '../../../providers/data-service/data-service';


@Component({
  selector: 'page-dailyEntry',
  templateUrl: 'dailyEntry.html'
})
export class DailyEntry {
    public moodScore:number = 5;
    public sleepScore:number = 5;
    public dietScore:number = 5;
    public stressScore:number = 5;
    public totalScore:number = 10;
    public entryNote:string = "";
        
    constructor(public navCtrl: NavController, public dataService: DataServiceProvider ) {
        
  	//automatically load the wellness tracker listing when the page arrives
        this.dataService.wellness_tracker_list("wellness").subscribe((response)=> 
        {
            this.dataService.wellness = response;

          //convert the JSON text to a JSON object so you can reference it as wellness.moodScore in the ngFor
      		for (var a = 0; a < response.length;a++)
	      		{this.dataService.wellness[a] = JSON.parse(this.dataService.wellness[a].jsondata);}
        });
    }

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
    calcTotalScore()
    {
        this.totalScore = (((this.moodScore+this.sleepScore+this.dietScore+this.stressScore)/40)*10);
    }

}
//define the variables to link with the ngModel in the main page
    
//    		$scope.updatePicture = function(totalScore, moodScore, sleepScore, dietScore, scoreManager, stressScore) {
//			totalScore = ((parseInt(moodScore) + parseInt(sleepScore) + parseInt(dietScore) + parseInt(stressScore)) / 4); //Added by JW
//		}
//		
		
		
//		$scope.$watch(function( totalScore, moodScore, sleepScore, dietScore, scoreManager, stressScore) { return moodScore },
//			function(totalScore, moodScore, sleepScore, dietScore, scoreManager, stressScore) {
//				totalScore = ((parseInt(moodScore) + parseInt(sleepScore) + parseInt(dietScore) + parseInt(stressScore)) / 4).toFixed(0); //Added by JW
//
//			}
//		);
		
//		$scope.$watch(function(scope) { return $scope.sleepScore },
//			function() {
//				$scope.totalScore = ((parseInt($scope.moodScore) + parseInt($scope.sleepScore) + parseInt($scope.dietScore) + scoreManager.reverseScore(parseInt($scope.stressScore))) / 4).toFixed(0); //Added by JW

//			}
//		);
		
//		$scope.$watch(function(scope) { return $scope.stressScore },
//			function() {
//				$scope.totalScore = ((parseInt($scope.moodScore) + parseInt($scope.sleepScore) + parseInt($scope.dietScore) + scoreManager.reverseScore(parseInt($scope.stressScore))) / 4).toFixed(0); //Added by JW

//			}
//		);
		
//		$scope.$watch(function(scope) { return $scope.dietScore },
//			function() {
//				$scope.totalScore = ((parseInt($scope.moodScore) + parseInt($scope.sleepScore) + parseInt($scope.dietScore) + scoreManager.reverseScore(parseInt($scope.stressScore))) / 4).toFixed(0); //Added by JW

//			}
//		);
//}
