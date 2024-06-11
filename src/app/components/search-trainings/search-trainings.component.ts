import { Component } from '@angular/core';
import { FormationService } from '../../services/formation.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { map } from 'rxjs';
import { Formation } from '../../interfaces/formation';
import { FormationCardComponent } from '../formation-card/formation-card.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { CreateFormationService } from '@app/services/create-formation.service';
import { Tag } from '@app/interfaces/tag';
import { TagsService } from '@app/services/tags.service';

@Component({
  selector: 'app-search-trainings',
  standalone: true,
  imports: [
    FormsModule,
    FormationCardComponent,
    MultiSelectModule,
    ReactiveFormsModule,
  ],
  templateUrl: './search-trainings.component.html',
  styleUrl: './search-trainings.component.sass',
})
export class SearchTrainingsComponent {
  valeurInput: string = '';
  formaPerPage: number = 4;
  pageNumber: number = 0;
  listFormation: Formation[] = [];
  buttonTags: Tag[] = [
    { id: '940', nom: 'Machine Learning' },
    { id: '133', nom: 'Productivity' },
    { id: '242', nom: 'Mental Health' },
    { id: '950', nom: 'Mathematical Modeling' },
    { id: '132', nom: 'Work-Life Balance' },
    { id: '893', nom: 'Management Skills' },
  ];
  tags: any[] = [];
  selectedTags: { id: number; name: string }[] = [];
  isTagsLoading: boolean = true;

  constructor(
    private formationService: FormationService,
    protected createFormationService: CreateFormationService,
    protected tagsService: TagsService
  ) {}

  getFormations() {
    if (this.selectedTags.length === 0) {
      console.log('requetes sans tags');
      this.formationService
        .getFormations(
          this.valeurInput,
          this.formaPerPage,
          this.pageNumber * this.formaPerPage
        )
        .subscribe(
          (listFormation) => {
            this.listFormation = listFormation;
          },
          (error) => {
            this.listFormation = [];
          }
        );
    } else {
      console.log('requetes avec tags');
      console.log(this.selectedTags.map((tag) => tag.id).join(','));
      this.formationService
        .getFormations(
          this.valeurInput,
          this.formaPerPage,
          this.pageNumber * this.formaPerPage,
          this.selectedTags.map((tag) => tag.id).join(',')
        )
        .subscribe(
          (listFormation) => {
            this.listFormation = listFormation;
          },
          (error) => {
            this.listFormation = [];
          }
        );
    }
  }

  smoothScroll(target: string) {
    const element = document.getElementById(target);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
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

    this.createFormationService
      .getTags()
      .pipe(map((tags) => tags.map((tag) => ({ id: tag.id, name: tag.nom }))))
      .subscribe((tags) => {
        this.tags = tags;
        this.isTagsLoading = false;
      });
    if (this.tagsService.activeTag) {
      this.addTagToSearch(this.tagsService.activeTag as Tag);
    }
  }

  onFilterChange() {
    this.getFormations();
  }
  addTagToSearch(tag: Tag) {
    this.selectedTags.push({ id: Number(tag.id), name: tag.nom } as {
      id: number;
      name: string;
    });
    this.getFormations();
  }
}
