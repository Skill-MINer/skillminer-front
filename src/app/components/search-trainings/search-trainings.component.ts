import { Component } from '@angular/core';
import { FormationService } from '../../services/formation.service';
import { FormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Formation } from '../../interfaces/formation';
import { FormationCardComponent } from '../formation-card/formation-card.component';

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
  formaPerPage: number = 4;
  pageNumber: number = 0;
  listFormation: Formation[] = [];
  constructor(private formationService : FormationService){}

  getFormations() {
    this.formationService.getFormations(this.valeurInput, this.formaPerPage, this.pageNumber*this.formaPerPage).subscribe(
        (listFormation) => {
          this.listFormation = listFormation;
        },
        (error) => {
          //console.error('Une erreur est survenue :', error);
          this.listFormation = []; // Définir une liste vide en cas d'erreur
        }
      );
  }

  smoothScroll(target: string) {
    const element = document.getElementById(target);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  }

  nextPage() {
    this.pageNumber++;
    this.getFormations();

    setTimeout(() => {
      const inputElement = document.getElementById('hs-search-article-1');
      if (inputElement) {
        this.smoothScroll(inputElement.id);
        //inputElement.focus();
      }
    });
  }

  previousPage() {
    this.pageNumber--;
    this.getFormations();

    setTimeout(() => {
      const inputElement = document.getElementById('hs-search-article-1');
      if (inputElement) {
        this.smoothScroll(inputElement.id);
      }
    });
  }

  ngOnInit(): void {
    this.getFormations();
  }



  
}
