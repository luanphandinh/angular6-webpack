import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.css'],
  template: `
    <ngx-loading-bar [includeSpinner]="false"></ngx-loading-bar>
    <router-outlet></router-outlet>
  `,
})

export class AppComponent { }
