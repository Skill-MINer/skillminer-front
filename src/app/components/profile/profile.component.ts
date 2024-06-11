import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UserService } from '@services/user.service';
// import { CardContainerComponent } from '@components/card-container/card-container.component';
import { CardContainerProfileComponent } from '@components/card-container-profile/card-container-profile.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CardContainerProfileComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.sass',
})
export class ProfileComponent {
  constructor(protected userService: UserService) {}

  ngOnInit() {
    this.userService.getProfile();
  }
}
