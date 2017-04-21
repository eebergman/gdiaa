import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home.component';
import { EventsComponent } from './views/events/events.component';
import { AboutComponent } from './views/pages/about.component';
import { NewsletterComponent } from './views/pages/newsletter.component';
import { ResourcesComponent } from './views/pages/resources.component';
import { ScholarshipComponent } from './views/pages/scholarship.component';
import { SponsorsComponent } from './views/pages/sponsors.component';
import { SponsorshipComponent } from './views/pages/sponsorship.component';
import { SurveyComponent } from './views/pages/survey.component';
import { VolunteerComponent } from './views/pages/volunteer.component';
import { OrganizerComponent } from './organizer/organizer.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'events', component: EventsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'newsletter', component: NewsletterComponent },
  { path: 'organizer', component: OrganizerComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'scholarship', component: ScholarshipComponent },
  { path: 'sponsors', component: SponsorsComponent },
  { path: 'sponsorship', component: SponsorshipComponent },
  { path: 'survey', component: SurveyComponent },
  { path: 'volunteer', component: VolunteerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
