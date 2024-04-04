import { Component, Input } from '@angular/core';
import { FormationCard } from '../../Formation-cards';
import { FORMATIONCARDS } from '../../mock-Formation-cards';
import { Formation } from '../../interfaces/formation';

@Component({
  selector: 'app-formation-card',
  standalone: true,
  imports: [],
  templateUrl: './formation-card.component.html',
  styleUrl: './formation-card.component.sass',
})
export class FormationCardComponent {
  constructor() {}
  @Input() formationcard: Formation = {};
  ngOnInit(): void {
    //scraps the hours from the date
    if (this.formationcard && this.formationcard.date_creation) {
      this.formationcard.date_creation = this.formationcard.date_creation.slice(
        0,
        10
      );
    }
    //makes sure the tag array is not longer than 3
    if (this.formationcard && this.formationcard.tag?.[3]) {
      this.formationcard.tag = this.formationcard.tag.slice(0, 3);
    }
  }
}
