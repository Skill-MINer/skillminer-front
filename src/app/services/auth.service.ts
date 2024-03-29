import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import moment from "moment";
import { tap } from 'rxjs/internal/operators/tap';
import { User } from '../interfaces/user';
import { map, retry } from 'rxjs/operators';
import { Router } from '@angular/router';

import config from '../../../config';

const { IP_API } = config;

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	private readonly http = inject(HttpClient);
	private router: Router = inject(Router);

	signup(user: User) {
		return this.http.post(`${IP_API}/users`, {
			"prenom": user.prenom,
			"nom": user.nom,
			"email": user.email,
			"password": user.password
		}).pipe(tap((response: any) => this.setSession(response))).subscribe(() => {
			if (this.isLoggedIn()) {
				console.log('User successfully signed in');
				this.router.navigate(['/']);
			}
		});
	}

	login(user: User) {
		return this.http.post(`${IP_API}/login`, {
			"email": user.email,
			"password": user.password
		}).pipe(tap((response: any) => this.setSession(response))).subscribe(() => {
			if (this.isLoggedIn()) {
				console.log('User successfully signed in');
				this.router.navigate(['/']);
			}
		});
	}

	private setSession(authResult: any) {
		const expiresAt = moment().add(authResult.expiresIn, 'second');

		localStorage.setItem('token', authResult.token);
		localStorage.setItem('id_user', authResult.id);
		localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
	}

	isValidToken() {
		const token = localStorage.getItem("token");
		return this.http.get(`${IP_API}/users`).pipe(
			map((response: any) => response.status === 200),
			tap((response: any) => {
				if (!response) {
					this.logout();
				}
			})
		);
	}

	logout() {
		localStorage.removeItem("token");
		localStorage.removeItem("id_user");
		localStorage.removeItem("expires_at");
	}

	public isLoggedIn() {
		return moment().isBefore(this.getExpiration());
	}

	isLoggedOut() {
		return !this.isLoggedIn();
	}

	getExpiration() {
		const expiration: string = localStorage.getItem("expires_at") as string;
		const expiresAt = JSON.parse(expiration);
		return moment(expiresAt);
	}
}
