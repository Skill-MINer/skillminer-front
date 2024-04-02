import { Component, Input } from '@angular/core';
import { FormationCard } from '../../Formation-cards';
import { FORMATIONCARDS } from '../../mock-Formation-cards';

@Component({
  selector: 'app-mock-formation-cards',
  standalone: true,
  imports: [],
  templateUrl: './mock-formation-cards.component.html',
  styleUrl: './mock-formation-cards.component.sass',
})
export class MockFormationCardsComponent {
  constructor() {}
  @Input() formationcard: FormationCard = FORMATIONCARDS[0];
}
