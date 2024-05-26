import { Formation } from './../interfaces/formation';
import { Injectable, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Tag } from '../interfaces/tag';

import { environment } from '../../environments/environment';
import { Observable, catchError, throwError } from 'rxjs';

const IP_API = environment.IP_API;

@Injectable({
  providedIn: 'root',
})
export class CreateFormationService {
  private toastr: ToastrService = inject(ToastrService);
  private readonly http = inject(HttpClient);
  public formation: Formation = {
    titre: 'My new Formation',
    description: 'This is a description',
    tag: [],
    body: [
      {
        id: 1,
        nom: 'Page 1',
        contenu: [
          {
            id: 1,
            title: 'Bloc 1',
            contenu: {
              id: 1,
              type: 'markdown',
              text: 'Ligne 1\nLigne 2\nLigne 3\nLigne 4',
            },
          }
        ],
      },
    ],
  } as Formation;
  public headerIsValidated = false;
  public imageFile: File | undefined;
  public imageUrl: string | undefined;

  constructor() { }

  getTags(): Observable<Tag[]> {
    const temp = this.http.get<Tag[]>(`${IP_API}/tags`);
    return temp;
  }

  createFormation(formation: any): Observable<any> {
    return this.http
      .post<Formation>(`${IP_API}/formations`, {
        titre: formation.titre,
        tags: formation.tags,
        description: formation.description,
      })
      .pipe(catchError(this.handleError));
  }

  postImageHeader(id: String, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${IP_API}/file/formations/${id}`, formData);
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
