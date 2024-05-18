import { inject, Component } from '@angular/core';
import { MarkdownEditorComponent } from '../markdown-editor/markdown-editor.component';
import { FormsModule } from '@angular/forms';
import { MarkdownWithAIService } from '../../services/markdown-with-ai.service';
import { catchError, throwError } from 'rxjs';
import { Markdown } from '../../interfaces/markdown';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-markdown-with-ai',
  standalone: true,
  imports: [MarkdownEditorComponent, FormsModule],
  templateUrl: './markdown-with-ai.component.html',
  styleUrl: './markdown-with-ai.component.sass',
})
export class MarkdownWithAiComponent {
  private toastr: ToastrService = inject(ToastrService);
  constructor(private MarkdownWithAIService: MarkdownWithAIService) {}
  markdown: Markdown = { type: 'markdown', text: '' };
  valeurInput: string = '';
  requestPending = false;
  generateMarkdown() {
    this.requestPending = true;
    this.MarkdownWithAIService.generate(this.valeurInput)
      .pipe(catchError(this.handleError))
      .subscribe((md) => {
        this.requestPending = false;
        this.markdown = md;
      });
  }
  ngonInit(): void {
    this.generateMarkdown();
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
}
