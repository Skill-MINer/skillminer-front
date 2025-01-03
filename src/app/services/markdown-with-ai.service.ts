import { inject, Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Page } from '@app/interfaces/page';

const IP_API = environment.IP_API;

@Injectable({
  providedIn: 'root',
})
export class MarkdownWithAIService {
  private readonly http = inject(HttpClient);

  generate(pageTitle: string, formationTitle?: string): Observable<Page> {
    return this.http
      .post<Page>(`${IP_API}/formations/generate`, {
        formationTitle: formationTitle as string,
        pageTitle: pageTitle,
      })
  }
}
