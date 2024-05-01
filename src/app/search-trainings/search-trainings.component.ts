import { Component } from '@angular/core';
import { FormationService } from '../services/formation.service';
import { FormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Formation } from '../interfaces/formation';
import { FormationCardComponent } from '../components/formation-card/formation-card.component';

@Component({
  selector: 'app-search-trainings',
  standalone: true,
  imports: [
    FormsModule,
    FormationCardComponent
  ],
  templateUrl: './search-trainings.component.html',
  styleUrl: './search-trainings.component.sass'
})
export class SearchTrainingsComponent {
  valeurInput: string = "";
  listFormation: Formation[] = [];
  constructor(private formationService : FormationService){}

  getFormations() {
    this.formationService.getFormations(this.valeurInput).subscribe(
        (listFormation) => {
          this.listFormation = listFormation;
        },
        (error) => {
          //console.error('Une erreur est survenue :', error);
          this.listFormation = []; // Définir une liste vide en cas d'erreur
        }
      );
  }

  ngOnInit(): void {
    this.getFormations();
  }


  
}
