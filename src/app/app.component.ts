import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';

import { Events } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Import for Translation Service
import { TranslationService } from '../assets/services/translationService';

import { Storage } from '@ionic/storage';

import { HomePage } from '../pages/home/home';
import { Login } from '../pages/home/Login/login/login';
//import { WellnessTracker } from '../pages/WellnessTracker/wellnesstracker';

import { LanguageSelection } from '../pages/languageSelection/languageSelection';
import { SignOut } from '../pages/home/Login/signout/signout';
import { Resources } from '../pages/Resources/resources';
import { Updates } from '../pages/updates/updates';

import { Tools } from '../pages/Tools/tools';
import { SelfAssessment } from '../pages/Tools/assessment/selfassessment/selfAssessment';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = LanguageSelection;

    // The actual content of the page, fetched via translationService.ts
    private pageElements: any;

    // Controls whether our view is loaded based off of if pageElements has been loaded
    private pageElementsLoaded: boolean = false;   

    private userID: string;

    private home: any;

    pages: Array<{title: string, component: any}>;

    constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private storage: Storage, private translationService: TranslationService, events: Events) {
        this.initializeApp();
        this.configuration();
        
        events.subscribe('languageFlag:changed', languageFlagRetrieval => {
            this.pageElements = this.translationService.load("app.component.ts", languageFlagRetrieval);
            this.buildMenu();
        })
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
        var languageFlagRetrieval = this.storage.get("languageFlag").then((value) => {
            if(value != null) {
                this.pageElements = this.translationService.load("app.component.ts", value);
                this.pageElementsLoaded = true;
                this.buildMenu();

            } else {
                console.log("No language flag set");
            }	
        });
    }

    buildMenu(){
        console.log("Building Menu");
        console.log(this.pageElements);

        this.pages = [
            { title: this.pageElements.home, component: HomePage },
//          { title: 'Wellness Tracker', component: WellnessTracker },
            { title: this.pageElements.tools, component: Tools },
            { title: this.pageElements.resources, component: Resources },
            { title: this.pageElements.updates, component: Updates },
            { title: 'FR/EN', component: LanguageSelection },
            { title: this.pageElements.signout, component: SignOut }
        ];

        /*this.pages = [
            { title: "Home", component: HomePage },
//          { title: 'Wellness Tracker', component: WellnessTracker },
            { title: "Tools", component: Tools },
            { title: "Resources", component: Resources },
            { title: "Updates", component: Updates },
            { title: 'FR/EN', component: LanguageSelection },
            { title: "Sign Out", component: SignOut }
        ];*/     
    }
}
