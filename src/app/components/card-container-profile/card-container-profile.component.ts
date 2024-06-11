import { Input, Component, OnInit } from '@angular/core';
import { FormationCardComponent } from '@components/formation-card/formation-card.component';
import { CardContainerService } from '@services/card-container.service';
import { Formation } from '@interfaces/formation';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-container-profile',
  standalone: true,
  imports: [MatIcon, FormationCardComponent],
  templateUrl: './card-container-profile.component.html',
  styleUrl: './card-container-profile.component.sass'
})
export class CardContainerProfileComponent implements OnInit{
  @Input() owner: boolean = false;

  constructor(private cardContainerService: CardContainerService, private router: Router) {}
  cards: Formation[] = [];
  
  getCards() {
    if (this.owner) {
    this.cardContainerService
      .getFormationsByUser()
      .subscribe((cards) => (this.cards = cards));
    } else {
      this.cardContainerService
        .getFormationByContributor()
        .subscribe((cards) => (this.cards = cards));
    }
    return; 
  }

  ngOnInit(): void {
    this.getCards();
  }
  deleteFormation(id: number | undefined )  {
    if (id === undefined || !this.owner) {
      return;
    }
    this.cardContainerService.deleteFormation(id).subscribe(() => {
      this.getCards();
    });
  }
  editFormation(id: number | undefined) {
    if (id === undefined) {
      return;
    }
    this.router.navigate(['/create-formation', id]);
  }

  validationProposals(id: number | undefined) {
    if (id === undefined) {
      return;
    }
    this.router.navigate(['/merge-edit-proposal', id]);
  }
}
