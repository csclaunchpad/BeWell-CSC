import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { Login } from '../pages/home/Login/login';
import { DailyEntry } from '../pages/WellnessTracker/DailyEntry/dailyEntry';
import { CheckinLog } from '../pages/WellnessTracker/CheckinLog/checkinLog';
import { Resources } from '../pages/Resources/resources';
import { SQLTester } from '../pages/SQLTester/sqltester';
import { Dashboard } from '../pages/Dashboard/analyticDashboard';



//import { AddDataPage } from '../pages/add-data/add-data';
//import { EditDataPage } from '../pages/edit-data/edit-data';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Daily Entry', component: DailyEntry },
      { title: 'Checkin Log', component: CheckinLog },
      { title: 'SQL Tester', component: SQLTester },
		  { title: 'Analytic Dashboard', component: Dashboard },
//      { title: 'Add Data', component: AddDataPage },
      { title: 'Resorces', component: Resources },
      { title: 'Log In', component: Login }

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
