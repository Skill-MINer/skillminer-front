import { Component, Input } from '@angular/core';
import { FormationCard } from '../../Formation-cards';
import { FORMATIONCARDS } from '../../mock-Formation-cards';

@Component({
  selector: 'app-formation-card',
  standalone: true,
  imports: [],
  templateUrl: './formation-card.component.html',
  styleUrl: './formation-card.component.sass',
})
export class FormationCardComponent {
  constructor() {}
  @Input() formationcard: FormationCard = FORMATIONCARDS[0];
}
