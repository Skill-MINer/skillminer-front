import { Input, Component } from '@angular/core';
import { FormationCardComponent } from '@components/formation-card/formation-card.component';
import { CardContainerService } from '@services/card-container.service';
import { Formation } from '@interfaces/formation';
@Component({
  selector: 'app-card-container',
  standalone: true,
  imports: [FormationCardComponent],
  templateUrl: './card-container.component.html',
  styleUrl: './card-container.component.sass'
})
export class CardContainerComponent {
  @Input() status: 'full' | 'user' | string = 'full';
  constructor(private cardContainerService: CardContainerService) {}
  cards: Formation[] = [];
  getCards() {
    // get cards from server
    if (this.status === 'user') {
      this.cardContainerService
        .getFormationsByUser()
        .subscribe((cards) => (this.cards = cards));
      return;
    } else {
      this.cardContainerService
        .getFormations()
        .subscribe((cards) => (this.cards = cards));
    }
  }
  ngOnInit(): void {
    this.getCards();
  }
}
