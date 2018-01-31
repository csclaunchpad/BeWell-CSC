import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


//plugins

/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataServiceProvider {

  constructor(public http: Http) {}



//define the array wellness that will be used across all of the pages
public wellness:any[] = [];

//uuid subscription number
private uuidsubscription: string = "cf22320c-c988-4350-a591-3b3f9b34999f";


//sort a json array by its property field alphabetically
   sortByProperty(property) {
      return function (x, y) {
          return ((x[property] === y[property]) ? 0 : ((x[property] > y[property]) ? 1 : -1));
      };
  };


//adds an entry in the SQL Server database
//You can push any JSONdata variable to the database.  if you wwant different element types, just update the wellness type variable accordingly
wellness_tracker_add(moodScore:number, sleepScore: number, stressScore: number, dietScore: number, entryNote:string)
{
    try
    {
      var timeNow = new Date().toISOString();
      var link = 'https://countboard.com/mhapp/mhapp_element_create_app.php';
      var jsondata = JSON.stringify({ moodScore: moodScore, sleepScore:sleepScore, stressScore: stressScore, dietScore: dietScore, entryNote:entryNote, dateEntered:timeNow });
      var data = JSON.stringify({uuidsubscription: this.uuidsubscription, elementtype: 'wellness', name:"Wellness Tracker Entry",description:"Optional Description Field",jsondata:jsondata});
      return this.http.post(link, data).map(res => res.json());
    }
    catch(err)
    {
      alert("An error was found: " + err);
    }
}

//pull the list of wellness elements from the SQL Server database
wellness_tracker_list(elementtype:string)
{
  var link = 'https://countboard.com/mhapp/mhapp_elements_list_app.php';
  var data = JSON.stringify({uuidsubscription: this.uuidsubscription, elementtype: elementtype});
  return this.http.post(link, data).map(res => res.json());
}

//generic AJAX function
  //generic async function
  async(link:string, data:string)
  {
        return this.http.post(link, data).map(res => res.json());
  }

}
