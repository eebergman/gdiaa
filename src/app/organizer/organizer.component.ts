import { Component, OnInit } from '@angular/core';

import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.css']
})
export class OrganizerComponent implements OnInit {

  classes: FirebaseListObservable<any>;
  name: any;
  date: number = 0;
  class: string = '';
  link: string = '';

  constructor(public angularFire: AngularFire) {
    this.classes = angularFire.database.list('/classes');

    this.angularFire.auth.subscribe(auth => {
      if (auth) {
        this.name = auth;
      }
    });

  }

  login() {
    this.angularFire.auth.login({
      provider: AuthProviders.Anonymous,
      method: AuthMethods.Anonymous
    });
  }

  onSubmit() {
    this.classes.push({
      class: this.class,
      link: this.link,
      date: this.date
    });
  }

  ngOnInit() {
  }

}
