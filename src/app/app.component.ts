import { Component } from '@angular/core';
import { RouterOutlet, Router, Event, NavigationEnd } from '@angular/router';

import { IStaticMethods } from 'preline/preline';

import { ThemeService } from './services/theme.service';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { RecoverAccountComponent } from './components/recover-account/recover-account.component';
import { ProfileUpdateComponent } from './components/profile-update/profile-update.component';

import { CardContainerComponent } from './components/card-container/card-container.component';
import { ProfileComponent } from './components/profile/profile.component';
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    RecoverAccountComponent,
    ProfileUpdateComponent,
    CardContainerComponent,
    ProfileComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title: string = 'skillminer-front';

  constructor(private router: Router, public themeService: ThemeService) { }

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          window.HSStaticMethods.autoInit();
          this.themeService.updateTheme();
        }, 100);
      }
    });
  }

  isFooterVisible() {
    const currentRoute = this.router.url.split("#")[0].split("/")[1];
    return currentRoute !== 'summary' && currentRoute !== 'signup' && currentRoute !== 'recover-account' && currentRoute !== 'login' && currentRoute !== 'reset-password';
  }

  isNavbarVisible() {
    const currentRoute = this.router.url.split("/")[1];
    return currentRoute !== 'signup' && currentRoute !== 'recover-account' && currentRoute !== 'login' && currentRoute !== 'reset-password';
  }
}
