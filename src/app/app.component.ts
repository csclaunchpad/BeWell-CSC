import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';
import { Dashboard } from '../pages/Dashboard/analyticDashboard';
import { DailyEntry } from '../pages/WellnessTracker/DailyEntry/dailyEntry';
//import { CheckinLogInfo } from '../pages/WellnessTracker/CheckinLogInfo/checkinLogInfo';
import { CheckinLog } from '../pages/WellnessTracker/CheckinLog/checkinLog';
import { Resources } from '../pages/Resources/resources';
//import {CSCContacts} from '../pages/Resources/CscContacts/cscContacts';
//import { Employee } from '../pages/Resources/Employee/employee';
//import { EmployeeFam } from '../pages/Resources/EmployeeFamily/employeeFamily';
//import { Public } from '../pages/Resources/Public/public';
import { Tools } from '../pages/Tools/toolStore';
import { Settings } from '../pages/Settings/settings';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Dashboard;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    // This is the list that populates the displayed Menu items.
    this.pages = [
//      { title: 'Home', component: HomePage },
//      { title: 'List', component: ListPage },
      { title: 'Dashboard', component: Dashboard },
      { title: 'Daily Entry', component: DailyEntry },
//      { title: 'Daily Log', component: CheckinLogInfo },
      { title: 'Checking Log', component: CheckinLog },
      { title: 'Resources', component: Resources },
//      { title: 'Contacts', component: CSCContacts },      // Not needed on main menu
//      { title: 'Employee', component: Employee },
//      { title: 'Employee Family', component: EmployeeFam },
//      { title: 'Public', component: Public },
      { title: 'Tools', component: Tools },
      { title: 'Settings', component: Settings }
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
