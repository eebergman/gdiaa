import { Component, OnInit } from '@angular/core';

import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.css']
})
export class OrganizerComponent implements OnInit {

   items: FirebaseListObservable<any>;
  name: any;
  msgVal = '';

  constructor(public angularFire: AngularFire) {
    this.items = angularFire.database.list('/messages', {
      query: {
        limitToLast: 50
      }
    });

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

  Send(desc: string) {
      this.items.push({ message: desc});
      this.msgVal = '';
  }

  ngOnInit() {
  }

}
