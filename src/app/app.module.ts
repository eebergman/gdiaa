import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { Config } from '../../config';

import { AppComponent } from './app.component';
import { OrganizerComponent } from './organizer/organizer.component';
import { HomeComponent } from './views/home.component';
import { FooterComponent } from './views/footer.component';
import { EventsComponent } from './views/events/events.component';
import { AboutComponent } from './views/pages/about.component';
import { NewsletterComponent } from './views/pages/newsletter.component';
import { ResourcesComponent } from './views/pages/resources.component';
import { ScholarshipComponent } from './views/pages/scholarship.component';
import { SponsorsComponent } from './views/pages/sponsors.component';
import { SponsorshipComponent } from './views/pages/sponsorship.component';
import { SurveyComponent } from './views/pages/survey.component';
import { VolunteerComponent } from './views/pages/volunteer.component';

export const firebaseConfig = {
  apiKey: Config.myApiKey,
  authDomain: Config.myAuthDomain,
  databaseURL: Config.myDatabaseURL,
  projectId: Config.myProjectId,
  storageBucket: Config.myStorageBucket,
  messagingSenderId: Config.myMessagingSenderId
};

@NgModule({
  declarations: [
    AppComponent,
    OrganizerComponent,
    HomeComponent,
    FooterComponent,
    EventsComponent,
    AboutComponent,
    NewsletterComponent,
    ResourcesComponent,
    ScholarshipComponent,
    SponsorsComponent,
    SponsorshipComponent,
    SurveyComponent,
    VolunteerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    Angular2FontAwesomeModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    Title
  ],
  entryComponents: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
