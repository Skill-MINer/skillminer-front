import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { User } from '../interfaces/user';
import config from '../../../config';
import { Observable } from 'rxjs';

const { IP_API } = config;


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly http = inject(HttpClient);
  private router: Router = inject(Router);

  getProfile(): Observable<User> {
    return this.http.get<User>(`${IP_API}/token-info`);
  }

  updateProfile(user: User) {
    return this.http.patch(`${IP_API}/users`,{
      "prenom": user.prenom,
      "nom": user.nom,
      "email": user.email,
      "password": user.password,
      "description": user.description
    }).subscribe(() => {
      this.router.navigate(['/profile']);
    });
  }

  postImage(image: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', image);
    return this.http.post(`${config.IP_API}/file/users`, formData);
  }
}
