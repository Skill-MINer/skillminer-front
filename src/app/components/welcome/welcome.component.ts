import { Component } from '@angular/core';
import { CardContainerComponent } from '../card-container/card-container.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CardContainerComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.sass',
})
export class WelcomeComponent {}
