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

  createEmptyFormation() {
    this.http.post<{id: number}>(`${IP_API}/formations`, {}).subscribe((rep) => {
      this.formation.id = rep.id;
    });
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

  postImageHeader(id: number, file: File): Observable<any> {
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

  saveFormationInLocal() {
    localStorage.setItem('formation-' + this.formation.id, JSON.stringify(this.formation));
    localStorage.setItem('headerIsValidated-' + this.formation.id, JSON.stringify(this.headerIsValidated));
    localStorage.setItem('imageUrl-' + this.formation.id, JSON.stringify(this.imageUrl));
    localStorage.setItem('imageFile-' + this.formation.id, JSON.stringify(this.imageFile));
  }

  getFormationFromLocal() {
    if (!this.formation.id) {
      this.createEmptyFormation();
    } else {
      const formation = localStorage.getItem('formation-' + this.formation.id);
      const headerIsValidated = localStorage.getItem('headerIsValidated-' + this.formation.id);
      const imageUrl = localStorage.getItem('imageUrl-' + this.formation.id);
      const imageFile = localStorage.getItem('imageFile-' + this.formation.id);
      if (formation) {
        this.formation = JSON.parse(formation);
      }
      if (headerIsValidated) {
        this.headerIsValidated = JSON.parse(headerIsValidated);
      }
      if (imageUrl) {
        this.imageUrl = JSON.parse(imageUrl);
      }
      if (imageFile) {
        this.imageFile = JSON.parse(imageFile);
      }
    }
  }

  saveAllFormationInRemote() {
    if (this.formation.id) {
      this.http.put(`${IP_API}/formations/${this.formation.id}/header`, {
        titre: this.formation.titre,
        description: this.formation.description,
        tags: this.formation.tag?.map((tag) => tag.id),
      }).pipe(catchError(this.handleError)).subscribe();
      if (this.imageFile) {
        this.postImageHeader(this.formation.id, this.imageFile as File).pipe(catchError(this.handleError)).subscribe();
      }
      if (this.formation.body) {
          this.http.put(`${IP_API}/formations/${this.formation.id}/contenu`, this.formation.body)
            .pipe(catchError(this.handleError))
            .subscribe();
      }
      localStorage.removeItem('formation-' + this.formation.id);
      localStorage.removeItem('headerIsValidated-' + this.formation.id);
      localStorage.removeItem('imageUrl-' + this.formation.id);
      localStorage.removeItem('imageFile-' + this.formation.id);
    }
  }
}
