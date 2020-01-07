import { Component } from '@angular/core';
import { ActivatedRoute, Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'healthpro';
  active = '';
  constructor(public activatedRoute: ActivatedRoute, public router: Router){
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd ) {
        this.active = event.url;
      }
    });
  }
}
