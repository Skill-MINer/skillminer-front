import { Component } from '@angular/core';
import { CardContainerComponent } from '../card-container/card-container.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CardContainerComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.sass',
})
export class WelcomeComponent {
  constructor(private router : Router) {}

  clickNavBar(){
    this.router.navigate(['/search'])
  }
}
