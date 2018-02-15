import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';  //services for SQLite FEB 2018
import { Toast } from '@ionic-native/toast';

@Component({
  selector: 'page-dailyEntry',
  templateUrl: 'dailyEntry.html'
})
export class DailyEntry {

    data = { entryDate:"", moodScore:5, sleepScore:5, dietScore:5, stressScore:5, totalScore:10, entryNote:""};
        
    constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private sqlite: SQLite,
    private toast: Toast) {}
    
    saveData() {
        this.sqlite.create({ name: 'wellnessdb1.db', location: 'default' }).then((db: SQLiteObject) => {
            db.executeSql('INSERT INTO wellnesstracker VALUES(NULL,?,?,?,?,?,?,?)',
            [this.data.entryDate,
            this.data.moodScore,
            this.data.sleepScore,
            this.data.dietScore,
            this.data.stressScore,
            this.data.totalScore,
            this.data.entryNote]).then(res => {
                console.log(res);
                this.toast.show('Data saved', '5000', 'center').subscribe(
                toast => {
                    this.navCtrl.popToRoot();
                }
                );
            })
            
/// Left off here - Continue             
            
        .catch(e => {
            console.log(e);
            this.toast.show(e, '5000', 'center').subscribe(
            toast => {
                console.log(toast);
            }
          );
        });
        
    }).catch(e => {
      console.log(e);
      this.toast.show(e, '5000', 'center').subscribe(
        toast => {
          console.log(toast);
            }
        );
        });
    }
        
// Given a number, this method will reverse it. 10 = 1, 9 = 2, 8 = 3, 7 = 4, 6 = 5, 5 = 6, 4 = 7, 3 = 8, 2 = 9, 1 = 10
//    reverseScore(score) 
//    { 
//       return ((10 - score) + 1); 
//    }
    
    calcTotalScore()
    {
        this.data.totalScore = (((this.data.moodScore+this.data.sleepScore+this.data.dietScore+this.data.stressScore)/40)*10);
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
