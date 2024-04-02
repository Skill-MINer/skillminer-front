import { Component } from '@angular/core';
import { FormationCardComponent } from '../formation-card/formation-card.component';
import { MockFormationCardsComponent } from '../mock-formation-cards/mock-formation-cards.component';
import { FORMATIONCARDS } from '../../mock-Formation-cards';
import { CardContainerService } from '../../services/card-container.service';
import { Formation } from '../../interfaces/formation';
@Component({
  selector: 'app-card-container',
  standalone: true,
  imports: [FormationCardComponent, MockFormationCardsComponent],
  templateUrl: './card-container.component.html',
  styleUrl: './card-container.component.sass',
})
export class CardContainerComponent {
  mockcards = FORMATIONCARDS; // mock data
  constructor(private cardContainerService: CardContainerService) {}
  cards: Formation[] = [];
  getCards() {
    // get cards from server
    this.cardContainerService
      .getFormations()
      .subscribe((cards) => (this.cards = cards));
  }
  ngOnInit(): void {
    this.getCards();
  }
}
