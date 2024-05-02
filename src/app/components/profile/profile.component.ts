import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UserService } from '@services/user.service';
import { User } from '@interfaces/user';
import { environment } from '@env/environment';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.sass'
})
export class ProfileComponent {
  userProfile: User = {};
  imageUrl: string = '';
  requiredFileType = 'image/png';
  fileName: string = '';
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  description: string = '';

  constructor(protected readonly userService: UserService) {}

  getProfile() {
    this.userService.getProfile().subscribe(profile => {
      this.userProfile = profile;
      this.firstName = this.userProfile.prenom ?? 'No first name provided.';
      this.lastName = this.userProfile.nom ?? ' and no last name provided.';
      this.email = this.userProfile.email ?? 'No email provided.';
      this.description = this.userProfile.description ?? 'No description provided.';
      this.imageUrl = `${environment.IP_API}/file/users/${this.userProfile.id}.png`;
    });
  }

  ngOnInit() {
    this.getProfile();
  }
  
}
