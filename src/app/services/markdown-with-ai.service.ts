import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, catchError, map, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Markdown } from '../interfaces/markdown';

const IP_API = environment.IP_API;

@Injectable({
  providedIn: 'root',
})
export class MarkdownWithAIService {
  private readonly http = inject(HttpClient);
  private toastr: ToastrService = inject(ToastrService);

  constructor() {}
  generate(title: string): Observable<Markdown> {
    return this.http
      .post(`${IP_API}/formations/generate`, { name: title })
      .pipe(map((obj) => obj as Markdown));
  }
}
