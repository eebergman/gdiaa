import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';

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

  var config = {
    apiKey: "AIzaSyDX5q__U2DcJFDTh4WGticxKWL0T_KVDEc",
    authDomain: "gdiaa-adeaf.firebaseapp.com",
    databaseURL: "https://gdiaa-adeaf.firebaseio.com",
    projectId: "gdiaa-adeaf",
    storageBucket: "gdiaa-adeaf.appspot.com",
    messagingSenderId: "26313623630"
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
