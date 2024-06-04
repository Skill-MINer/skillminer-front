import { Component, EventEmitter, Output, inject } from '@angular/core';
import { MultiSelectModule } from 'primeng/multiselect';
import {
  FormGroup,
  AbstractControl,
  Validators,
  ReactiveFormsModule,
  FormControl,
} from '@angular/forms';
import { Tag } from '../../../interfaces/tag';
import { CreateFormationService } from '../../../services/create-formation.service';
import { catchError, throwError } from 'rxjs';
import { map } from 'rxjs';
import { MarkdownWithAIService } from '@app/services/markdown-with-ai.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-header-formation',
  standalone: true,
  imports: [MultiSelectModule, ReactiveFormsModule],
  templateUrl: './create-header-formation.component.html',
  styleUrl: './create-header-formation.component.sass',
})
export class CreateHeaderFormationComponent {
  readonly defaultImageUrl: string =
    'https://preline.co/assets/svg/examples/abstract-bg-1.svg';
  private toastr: ToastrService = inject(ToastrService);
  tags: any[] = [];
  imageFile: File | null = null;
  requiredFileType = 'image/png';
  selectedImageUrl = this.defaultImageUrl;
  requestPending = false;
  protected readonly headerForm;

  constructor(
    protected createFormationService: CreateFormationService,
    private MarkdownWithAIService: MarkdownWithAIService
  ) {
    this.headerForm = new FormGroup({
      titre: new FormControl(this.createFormationService.formation.titre, [
        Validators.required,
        Validators.minLength(3),
      ]),
      description: new FormControl(
        this.createFormationService.formation.description,
        [Validators.required, Validators.minLength(10)]
      ),
      selectedTags: new FormControl<{id: number, name: string}[]>(
        this.createFormationService.formation.tag?.map((tag) => ({ id: Number(tag.id), name: tag.nom })) as {id: number, name: string}[]
      ),
    });
    if (this.createFormationService.imageUrl) {
      this.selectedImageUrl = this.createFormationService.imageUrl;
    }
    if (this.createFormationService.imageFile) {
      this.imageFile = this.createFormationService.imageFile;
    }
    if (
      this.headerForm.valid &&
      this.createFormationService.imageUrl !== this.defaultImageUrl
    ) {
      this.createFormationService.headerIsValidated = true;
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
  
  private handleError = (error: HttpErrorResponse) => {
    this.requestPending = false;
    if (error.status === 0) {
      this.toastr.error('Server is down', 'Something went wrong');
    } else {
      this.toastr.error(error.error.error, 'Something went wrong');
    }

    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  };

  onSubmit() {
    if (this.headerForm.valid) {
      let id: String;
      const selectedTags: Tag[] = this.headerForm.value.selectedTags?.map((tag) => ({ id: String(tag.id), nom: tag.name })) as Tag[];
      this.createFormationService.formation.titre = this.headerForm.value
          .titre as string;
        this.createFormationService.formation.description = this.headerForm
          .value.description as string;
        this.createFormationService.formation.tag = selectedTags;
        this.createFormationService.headerIsValidated = true;
        this.createFormationService.saveAllFormationInRemote();
    } else {
      this.createFormationService.headerIsValidated = false;
    }
  }

  onFileSelected(event: any) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          this.createFormationService.imageUrl = e.target.result as string;
          this.selectedImageUrl = e.target.result as string;
        }
      };
      reader.readAsDataURL(file);
      this.imageFile = file;
      if (this.imageFile !== null) {
        this.createFormationService.imageFile = this.imageFile;
        this.createFormationService.saveHeaderImage();
      }
    }
  }
}
