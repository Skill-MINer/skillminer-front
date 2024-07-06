import { inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { User } from '@interfaces/user';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

const IP_API = environment.IP_API;


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly http = inject(HttpClient);
  private router: Router = inject(Router);
  public currentUser: User = { };

  getProfile() {
    this.http.get<User>(`${IP_API}/users/token-info`).subscribe(user => {
      this.currentUser = user;
      const timestamp = (new Date()).getTime();
      this.currentUser.imageUrl = `${IP_API}/file/users/${this.currentUser.id}.png?${timestamp}`;
    });
  }

  updateProfile(user: User) {
    this.http.patch(`${IP_API}/users`,{
      "prenom": user.prenom,
      "nom": user.nom,
      "email": user.email,
      "description": user.description
    }).subscribe(() => {
      this.router.navigate(['/profile']);
    });
  }

  postImage(image: File) {
    const formData = new FormData();
    formData.append('file', image);
    this.http.post(`${IP_API}/file/users`, formData).subscribe(() => {
      const timestamp = (new Date()).getTime();
      this.currentUser.imageUrl = `${IP_API}/file/users/${this.currentUser.id}.png?${timestamp}`;
    });
  }

  deleteImage() {
    this.http.delete(`${IP_API}/file/users`).subscribe(() => {
      const timestamp = (new Date()).getTime();
      this.currentUser.imageUrl = `${IP_API}/file/users/${this.currentUser.id}.png?${timestamp}`;
    });
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
