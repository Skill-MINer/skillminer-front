import { Component } from '@angular/core';
import { FormationCardComponent } from '../formation-card/formation-card.component';
import { FormationCard } from '../../Formation-cards';
import { FORMATIONCARDS } from '../../mock-Formation-cards';
@Component({
  selector: 'app-card-container',
  standalone: true,
  imports: [FormationCardComponent],
  templateUrl: './card-container.component.html',
  styleUrl: './card-container.component.sass',
})
export class CardContainerComponent {
  cards = FORMATIONCARDS;
}
