import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


//services
import { DataServiceProvider } from '../../providers/data-service/data-service';


@Component({
  selector: 'page-analyticDashboard',
  templateUrl: 'analyticDashboard.html'
})
export class Dashboard {

  constructor(public navCtrl: NavController,  public dataService: DataServiceProvider) 

  {
      this.dataService.wellness_tracker_list("wellness").subscribe((response)=> 
        {
          this.dataService.wellness = response;

          //convert the JSON text to a JSON object so you can reference it as wellness.moodScore in the ngFor
      		for (var a = 0; a < response.length;a++)
	      		{this.dataService.wellness[a] = JSON.parse(this.dataService.wellness[a].jsondata);}
        });
  }

  private moodScore:number = 1;
  private sleepScore:number = 1;
  private stressScore:number = 1;
  private dietScore:number = 1;
  private entryNote:string = "";

  

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
