import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { User } from '../interfaces/user';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

const IP_API = environment.IP_API;


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
      "description": user.description
    }).subscribe(() => {
      this.router.navigate(['/profile']);
    });
  }

  postImage(image: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', image);
    return this.http.post(`${IP_API}/file/users`, formData);
  }

  deleteImage() {
    return this.http.delete(`${IP_API}/file/users`);
  }

  updatePassword(oldPassword: string, newPassword: string) {
    return this.http.put(`${IP_API}/users/password`, {
      "oldPassword": oldPassword,
      "newPassword": newPassword
    }).subscribe(() => {
      this.router.navigate(['/profile']);
    });
  }
}
