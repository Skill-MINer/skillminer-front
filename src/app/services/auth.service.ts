import { inject, Injectable, signal } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import moment from "moment";
import { tap } from 'rxjs/internal/operators/tap';
import { User } from '../interfaces/user';
import { catchError, map, retry } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';
import { environment } from '../../environments/environment';

const IP_API = environment.IP_API;

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	
	private toastr: ToastrService = inject(ToastrService);
	private readonly http = inject(HttpClient);
	private router: Router = inject(Router);

	signup(user: User) {
		return this.http.post(`${IP_API}/users`, {
			"prenom": user.prenom,
			"nom": user.nom,
			"email": user.email,
			"password": user.password
		}).pipe(
			catchError(this.handleError),
			tap((response: any) => this.setSession(response))).subscribe(() => {
			if (this.isLoggedIn()) {
				console.log('User successfully signed in');
				this.router.navigate(['/']);
				this.toastr.success('Registration successful', 'Welcome to SkillMiner!');
			}
		});
	}

	login(user: User) {
		return this.http.post(`${IP_API}/login`, {
			"email": user.email,
			"password": user.password
		}).pipe(
			catchError(this.handleError),
			tap((response: any) => this.setSession(response))			
			).subscribe(() => {
			if (this.isLoggedIn()) {
				console.log('User successfully signed in');
				this.router.navigate(['/']);
				this.toastr.success('Registration successful', 'Welcome to SkillMiner!');
			}
		});
	}

	recoverAccount(email: string) {
		return this.http.post(`${IP_API}/reset-request`, {
			"email": email
		}).pipe(
			catchError(this.handleError)
		).subscribe(() => {
			this.router.navigate(['/']);
			this.toastr.success('An email has been sent to you', 'Recover your account');
		});
	}

	resetPassword(password: string, token: string) {
		return this.http.post(`${IP_API}/reset-password`, {
			password,
			token
		}).pipe(
			catchError(this.handleError)
		).subscribe(() => {
			this.router.navigate(['login']);
			this.toastr.success('Password successfully reset', 'Welcome back!');
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
		if (moment().isBefore(this.getExpiration())){
			return true;	
		} else {
			this.logout();
			return false;
		}
	}

	isLoggedOut() {
		return !this.isLoggedIn();
	}

	getExpiration() {
		const expiration: string = localStorage.getItem("expires_at") as string;
		const expiresAt = JSON.parse(expiration);
		return moment(expiresAt);
	}

	private handleError = (error: HttpErrorResponse) => {
		if (error.status === 0) {
			this.toastr.error('Server is down', 'Something went wrong');
		} else {
			this.toastr.error(error.error.error, 'Something went wrong');
		}

		return throwError(() => new Error('Something bad happened; please try again later.'));
	}

	getToken() {
		if (this.isValidToken()){
			return localStorage.getItem("token");
		}
		return new Error("Token is not valid");
	}

	isContributor(formationId: number) {
		return this.http.get(`${IP_API}/formations/${formationId}/contributors/token-info`)
	}
}
