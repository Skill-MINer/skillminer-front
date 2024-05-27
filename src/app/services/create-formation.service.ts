import { Formation } from './../interfaces/formation';
import { Injectable, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Tag } from '../interfaces/tag';
import { FormationService } from './formation.service';
import { environment } from '../../environments/environment';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

const IP_API = environment.IP_API;

@Injectable({
  providedIn: 'root',
})
export class CreateFormationService {
  private toastr: ToastrService = inject(ToastrService);
  private readonly http = inject(HttpClient);
  private readonly  defaultFormation: Formation = {
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
  public formation: Formation = this.defaultFormation;
  public headerIsValidated = false;
  public imageFile: File | undefined;
  public imageUrl: string | undefined;
  public loading: boolean = true;
  private router: Router = inject(Router);
  private formationService: FormationService = inject(FormationService);

  constructor() { }

  getTags(): Observable<Tag[]> {
    const temp = this.http.get<Tag[]>(`${IP_API}/tags`);
    return temp;
  }

  createEmptyFormation() {
    this.formation = this.defaultFormation;
    this.headerIsValidated = false;
    this.imageFile = undefined;
    this.imageUrl = undefined;
    this.http.post<{ id: number }>(`${IP_API}/formations`, {}).subscribe((rep) => {
      this.formation.id = rep.id;
      this.router.navigate(['create-formation', this.formation.id])
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
  }

  loadFormation() {
    if (this.formation.id) {
      const formation = localStorage.getItem('formation-' + this.formation.id);
      const headerIsValidated = localStorage.getItem('headerIsValidated-' + this.formation.id);
      const imageUrl = localStorage.getItem('imageUrl-' + this.formation.id);
      if (formation) {
        this.formation = JSON.parse(formation);
        if (headerIsValidated) {
          this.headerIsValidated = JSON.parse(headerIsValidated);
        }
        if (imageUrl) {
          this.imageUrl = JSON.parse(imageUrl);
        }
        this.loading = false;
      } else {
        this.formationService.getFormationByIdContent(this.formation.id).subscribe((formation) => {
          if (formation.titre) {
            this.formation.titre = formation.titre;
          }
          if (formation.description) {
            this.formation.description = formation.description;
          }
          if (formation.tag) {
            this.formation.tag = formation.tag;
          }
          if (formation.body && formation.body?.length > 0) {
            this.formation.body = formation.body;
          }
          if (formation.publier) {
            this.formation.publier = formation.publier;
          }
          if (formation.user) {
            this.formation.user = formation.user;
          }
          if (formation.date_creation) {
            this.formation.date_creation = formation.date_creation;
          }
          this.imageUrl = `${IP_API}/file/formations/${this.formation.id}.png`;
          this.loading = false;
        });
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

  saveHeaderImage() {
    if (this.imageFile && this.formation.id) {
      this.postImageHeader(this.formation.id, this.imageFile as File).pipe(catchError(this.handleError)).subscribe(() => {
        this.toastr.success('Image uploaded', 'Success');
      });
    }
  }
}
