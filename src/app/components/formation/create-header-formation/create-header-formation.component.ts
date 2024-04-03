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
        console.log(tags);
        this.tags = tags;});
  }

  onSubmit() {
    console.log(this.headerForm.value);
    if (this.headerForm.valid) {
      const selectedTags = this.headerForm.value.selectedTags;
      console.log(selectedTags);
      const tags = selectedTags ? selectedTags.map((tag) => tag.id) : [];
      console.log(tags);
      this.createFormationService.createFormation({
        ...this.headerForm.value,
        tags: tags
      });
      console.log("Form Submitted!");
    }
  }

}
