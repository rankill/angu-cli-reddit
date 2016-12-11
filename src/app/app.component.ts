import { Component } from '@angular/core';


@Component({
  selector: 'reddit-app',
  template: `
    <h1>{{title}}</h1>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})


export class AppComponent{
  title = 'Reddit Latest Posts - Angular 2 version';
}



