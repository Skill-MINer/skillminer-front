import { Component, inject } from '@angular/core';
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
export class CreateHeaderFormationComponent  {

  tags: any[] = [];
  imageFile: File | null = null;
  requiredFileType = 'image/png';
  selectedImageUrl = 'https://preline.co/assets/svg/examples/abstract-bg-1.svg'; // default image URL

  protected readonly createFormationService: CreateFormationService = inject(CreateFormationService);
  protected readonly headerForm = new FormGroup({
    titre: new FormControl("", [Validators.required, Validators.minLength(3)]),
    description: new FormControl("", [Validators.required, Validators.minLength(10)]),
    selectedTags: new FormControl<Tag[]>([])
  });

  ngOnInit() {
    this.createFormationService
      .getTags()
      .pipe(
        // change nom to name
        map((tags) => tags.map((tag) => ({ id: tag.id, name: tag.nom })))
      )
      .subscribe((tags) => {
        this.tags = tags;});
  }

  onSubmit() {
    if (this.headerForm.valid) {
      let id: String;
      const selectedTags = this.headerForm.value.selectedTags;
      const tags = selectedTags ? selectedTags.map((tag) => tag.id) : [];
      if (this.imageFile !== null) {
        this.createFormationService.createFormation({
          ...this.headerForm.value,
          tags: tags
        }).subscribe((formation) => {
          let id = formation.id;
          if (this.imageFile !== null) {
            this.createFormationService.postImageHeader(id, this.imageFile);
          }
        });
      }
    }
  }

  onFileSelected(event: any) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => {
        if (e.target) {
          this.selectedImageUrl = e.target.result as string;
        }
      };
      reader.readAsDataURL(file);
      this.imageFile = file;
    }
  }

}
