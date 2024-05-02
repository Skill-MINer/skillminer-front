import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, catchError, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AIMarkdown } from '../interfaces/AImarkdown';

const IP_API = environment.IP_API;

@Injectable({
  providedIn: 'root',
})
export class MarkdownWithAIService {
  private readonly http = inject(HttpClient);
  private toastr: ToastrService = inject(ToastrService);

  constructor() {}
  generate(title: string): Observable<AIMarkdown> {
    return this.http
      .post(`${IP_API}/formations/generate`, { name: title })
      .pipe(catchError(this.handleError));
  }

  private handleError = (error: HttpErrorResponse) => {
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
