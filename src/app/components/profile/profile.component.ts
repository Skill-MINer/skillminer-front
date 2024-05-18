import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UserService } from '@services/user.service';
import { CardContainerComponent } from '@components/card-container/card-container.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CardContainerComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.sass',
})
export class ProfileComponent {
  status = 'user';
  constructor(protected userService: UserService) {}

  ngOnInit() {
    this.userService.getProfile();
  }
}
