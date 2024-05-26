import { Component, EventEmitter, Output, inject } from '@angular/core';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormGroup, AbstractControl, Validators, ReactiveFormsModule, FormControl } from "@angular/forms";
import { Tag } from "../../../interfaces/tag"
import { CreateFormationService } from '../../../services/create-formation.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-create-header-formation',
  standalone: true,
  imports: [MultiSelectModule, ReactiveFormsModule],
  templateUrl: './create-header-formation.component.html',
  styleUrl: './create-header-formation.component.sass',
})
export class CreateHeaderFormationComponent {

  tags: any[] = [];
  imageFile: File | null = null;
  requiredFileType = 'image/png';
  selectedImageUrl = 'https://preline.co/assets/svg/examples/abstract-bg-1.svg'; // default image url

  protected readonly headerForm;

  constructor(protected createFormationService: CreateFormationService) {
    this.headerForm = new FormGroup({
      titre: new FormControl(this.createFormationService.formation.titre, [Validators.required, Validators.minLength(3)]),
      description: new FormControl(this.createFormationService.formation.description, [Validators.required, Validators.minLength(10)]),
      selectedTags: new FormControl<Tag[]>(this.createFormationService.formation.tag as Tag[])
    });
    if (this.createFormationService.imageUrl) {
      this.selectedImageUrl = this.createFormationService.imageUrl;
    }
  }

  ngOnInit() {
    this.createFormationService
      .getTags()
      .pipe(
        // change nom to name
        map((tags) => tags.map((tag) => ({ id: tag.id, name: tag.nom })))
      )
      .subscribe((tags) => {
        this.tags = tags;
      });
  }

  onSubmit() {
    if (this.headerForm.valid) {
      let id: String;
      const selectedTags: Tag[] = this.headerForm.value.selectedTags as Tag[];
      if (this.imageFile !== null) {
        this.createFormationService.formation.titre = this.headerForm.value.titre as string;
        this.createFormationService.formation.description = this.headerForm.value.description as string;
        this.createFormationService.formation.tag = selectedTags;
        this.createFormationService.imageFile = this.imageFile;
        this.createFormationService.headerIsValidated = true;
        /*this.createFormationService.createFormation({
          ...this.headerForm.value,
          tags: tags
        }).subscribe((formation) => {
          let id = formation.id;
          if (this.imageFile !== null) {
            this.createFormationService.postImageHeader(id, this.imageFile).subscribe(() => {
              this.nextStep.emit();
            });
          }
        });*/
      } else {
        this.createFormationService.headerIsValidated = false;
      }
    } else {
      this.createFormationService.headerIsValidated = false;
    }

    this.createFormationService.saveFormationInLocal();
  }

  onFileSelected(event: any) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => {
        if (e.target) {
          this.createFormationService.imageUrl = e.target.result as string;
          this.selectedImageUrl = e.target.result as string;
        }
      };
      reader.readAsDataURL(file);
      this.imageFile = file;
    }
  }
}
