import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from '../interfaces/user';
import config from '../../../config';

const { IP_API } = config;


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly http = inject(HttpClient);

  getProfile() {
    return this.http.get<User>(`${IP_API}/api/token`).subscribe();
  }

  updateProfile(user: User) {
    return this.http.patch(`${IP_API}/api/users`, user).subscribe();
  }
}
