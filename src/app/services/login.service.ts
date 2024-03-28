import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from "@angular/common/http";
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
      // Save the user data in the service
    })).subscribe();
  }
}
