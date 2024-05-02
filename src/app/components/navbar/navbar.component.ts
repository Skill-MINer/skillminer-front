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

  imageUrl: string = '';
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  userProfile: User = {};

  constructor(protected readonly userService: UserService, protected themeService: ThemeService) {}

  protected readonly authService: AuthService = new AuthService();

  ngOnInit() {
    this.getProfile();
  }

  getProfile() {
    this.userService.getProfile().subscribe(profile => {
      this.userProfile = profile;
      this.imageUrl = `${environment.IP_API}/file/users/${this.userProfile.id}.png`;
      this.firstName = this.userProfile.prenom as string;
      this.lastName = this.userProfile.nom as string;
      this.email = this.userProfile.email as string;
    });
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
