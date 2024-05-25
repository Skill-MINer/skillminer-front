import { Formation } from './../interfaces/formation';
import { Injectable, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Tag } from '../interfaces/tag';

import { environment } from '../../environments/environment';
import { Observable, catchError, throwError, of } from 'rxjs';

const IP_API = environment.IP_API;

@Injectable({
  providedIn: 'root',
})
export class CreateFormationService {
  private toastr: ToastrService = inject(ToastrService);
  private readonly http = inject(HttpClient);

  constructor() {}

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

  postImageHeader(id: String, file: File) {
    const formData = new FormData();
    formData.append('file', file);
    this.http.post(`${IP_API}/file/formations/${id}`, formData).subscribe();
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
