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

  constructor() {}

  getTags(): Observable<Tag[]> {
    const temp = this.http.get<Tag[]>(`${IP_API}/tags`);
    console.log('Tags: ', temp);
    return temp;
  }

  createFormation(formation: any) {
    return this.http
      .post(`${IP_API}/formations`, {
        titre: formation.titre,
        tags: formation.tags,
        //"description": formation.description,
      })
      .pipe(catchError(this.handleError))
      .subscribe(() => {
        console.log('Formation created');
        this.toastr.success('Formation created', 'Success!');
      });
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
