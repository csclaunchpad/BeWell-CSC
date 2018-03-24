import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Import for Translation Service
import { TranslationService } from '../assets/services/translationService';

import { Storage } from '@ionic/storage';

import { HomePage } from '../pages/home/home';
import { Login } from '../pages/home/Login/login/login';
import { WellnessTracker } from '../pages/WellnessTracker/wellnesstracker';
import { LanguageSelection } from '../pages/languageSelection/languageSelection';
import { SignOut } from '../pages/home/Login/signout/signout';
import { DailyEntry } from '../pages/WellnessTracker/DailyEntry/dailyEntry';
import { CheckinLog } from '../pages/WellnessTracker/CheckinLog/checkinLog';
import { Resources } from '../pages/Resources/resources';
import { Dashboard } from '../pages/Dashboard/analyticDashboard';
import { Updates } from '../pages/updates/updates';

import { ResInfo } from '../pages/Resources/ResPages/resinfo';
import { EAP } from '../pages/Resources/ResPages/EAP/eap';

import { Assessment } from '../pages/Tools/assessment/assessment';
import { SelfAssessment } from '../pages/Tools/assessment/selfassessment/selfAssessment';
import { EmpRev1 } from '../pages/Resources/Employee/Rev1/empRev1';
import { EmpRev2 } from '../pages/Resources/Employee/Rev2/empRev2';
import { EmpRev3 } from '../pages/Resources/Employee/Rev3/empRev3';


//import { Tools } from '../pages/tools/tools';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

    rootPage: any = LanguageSelection;
//    rootPage: any = Resources;
//    rootPage: any = Assessment;

    // The actual content of the page, fetched via translationService.ts
    private pageElements: Object;
	
    // Controls whether our view is loaded based off of if pageElements has been loaded
    private pageElementsLoaded: boolean = false;   

    private userID: string;

    pages: Array<{title: string, component: any}>;

	constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private storage: Storage, private translationService: TranslationService) {
		this.initializeApp();
                this.configuration();
                this.buildMenu();
		// used for an example of ngFor and navigation
 
/*		this.pages = [
			{ title: 'Welcome', component: HomePage },
			{ title: 'Wellness Tracker', component: WellnessTracker },
			{ title: 'Resources', component: Resources },
			{ title: 'Update Log', component: Updates },
                        { title: 'FR/EN', component: LanguageSelection },
			{ title: 'Sign out', component: SignOut }
		];
*/
	}

	initializeApp() {
		this.platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}

	openPage(page) {
		// Reset the content nav to have just this page
		// we wouldn't want the back button to show in this scenario
		this.nav.setRoot(page.component);
	}
        
        configuration() {		
            // Fetch the content from our language translation service
            var languageFlag = this.storage.get("languageFlag").then((value) => {
                if(value != null) {
                    this.pageElements = this.translationService.load("component.ts", value);
                    this.pageElementsLoaded = true;
                    console.log(this.pageElements);
                } 
                else {
                    console.log("No language flag set");
                }			
            });
        }
       
        buildMenu(){
                            // used for an example of ngFor and navigation
            /*
            this.pages = [
                { title: this.pageElements.home, component: HomePage },
                { title: this.pageElements.dailyentry, component: DailyEntry },
                { title: this.pageElements.checkinglog, component: CheckinLog },
                { title: this.pageElements.dashboard, component: Dashboard },
                { title: this.pageElements.resources, component: Resources },
                { title: this.pageElements.assessment, component: Assessment },
                { title: this.pageElements.updates, component: Updates },
                { title: 'FR/EN', component: LanguageSelection },
                { title: this.pageElements.signout, component: SignOut }
            ];
*/

  
		this.pages = [
			{ title: 'Welcome', component: HomePage },
			{ title: 'Wellness Tracker', component: WellnessTracker },
			{ title: 'Resources', component: Resources },
			{ title: 'Update Log', component: Updates },
                        { title: 'FR/EN', component: LanguageSelection },
			{ title: 'Sign out', component: SignOut }
		];          
        }

}
