import { Component } from '@angular/core';
import { RouterOutlet, Router, Event, NavigationEnd } from '@angular/router';

import { IStaticMethods } from 'preline/preline';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormationCardComponent } from './components/formation-card/formation-card.component';
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FormationCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})

export class AppComponent {
  title: string = 'skillminer-front';

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          window.HSStaticMethods.autoInit();
        }, 100);
      }
    });
  }
}