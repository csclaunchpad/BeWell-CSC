import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { Login } from '../pages/home/Login/login/login';

import { LanguageSelection } from '../pages/languageSelection/languageSelection';
import { SignOut } from '../pages/home/Login/signout/signout';
import { DailyEntry } from '../pages/WellnessTracker/DailyEntry/dailyEntry';
import { CheckinLog } from '../pages/WellnessTracker/CheckinLog/checkinLog';
import { Resources } from '../pages/Resources/resources';
import { Dashboard } from '../pages/Dashboard/analyticDashboard';
import { Updates } from '../pages/updates/updates';

import { ResInfo } from '../pages/Resources/ResPages/resinfo';

import { AddData } from '../pages/add-data/add-data';

import { Assessment } from '../pages/Tools/assessment/assessment';

//import { Tools } from '../pages/tools/tools';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

//  rootPage: any = LanguageSelection;
    rootPage: any = HomePage;
//rootPage: any = Assessment;

    pages: Array<{title: string, component: any}>;

	constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
		this.initializeApp();

		// used for an example of ngFor and navigation
		this.pages = [
			{ title: 'Home', component: HomePage },
			{ title: 'Daily Entry', component: DailyEntry },
			{ title: 'Checkin Log', component: CheckinLog },
			{ title: 'Analytic Dashboard', component: Dashboard },
			{ title: 'Resources', component: Resources },
			{ title: 'Self Assessment', component: Assessment },
			{ title: 'Update Log', component: Updates },
                        { title: 'FR/EN', component: LanguageSelection },
			{ title: 'Sign out', component: SignOut }
		];
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
}
