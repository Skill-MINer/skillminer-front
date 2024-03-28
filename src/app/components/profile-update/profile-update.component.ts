import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-profile-update',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './profile-update.component.html',
  styleUrl: './profile-update.component.sass'
})
export class ProfileUpdateComponent {

}
