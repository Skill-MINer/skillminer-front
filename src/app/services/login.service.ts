import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import Cookies from "js-cookie";
import { tap } from 'rxjs/internal/operators/tap';
import { single } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly http = inject(HttpClient);
  user: any = {
    id: '',
    nom: '',
    prenom: '',
    email: '',
  };


  signup(user: any) {
    return this.http.post('http://localhost:3000/users', { 
      "prenom": user.firstName, 
      "nom": user.lastName, 
      "email": user.email, 
      "password": user.password 
    }).pipe(tap((response: any) => {
      Cookies.set('token', response.token, { expires: 1/6 });
    })).subscribe();
  }
}
