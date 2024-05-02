import { Component } from '@angular/core';
import { FormationCardComponent } from '../formation-card/formation-card.component';
import { CardContainerService } from '../../services/card-container.service';
import { Formation } from '../../interfaces/formation';
@Component({
  selector: 'app-card-container',
  standalone: true,
  imports: [FormationCardComponent],
  templateUrl: './card-container.component.html',
  styleUrl: './card-container.component.sass',
})
export class CardContainerComponent {
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
