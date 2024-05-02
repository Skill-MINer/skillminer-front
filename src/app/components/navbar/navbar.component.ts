import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';
import { ThemeService } from '../../services/theme.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ RouterLink, RouterLinkActive, RouterOutlet ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.sass'
})
export class NavbarComponent {
  constructor(protected userService: UserService, protected themeService: ThemeService) {}

  protected readonly authService: AuthService = new AuthService();

  ngOnInit() {
    this.getProfile();
  }

  getProfile() {
    this.userService.getProfile();
  }

  logout() {
    this.authService.logout();
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  toSystemMode() {
    localStorage['theme'] = 'system';
    this.themeService.updateTheme();
  }

  toLightMode() {
    localStorage['theme'] = 'light';
    this.themeService.updateTheme();
  }

  toDarkMode() {
    localStorage['theme'] = 'dark';
    this.themeService.updateTheme();
  }
}
