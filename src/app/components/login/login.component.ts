import { Component, inject } from '@angular/core';
import { FormGroup, Validators, ReactiveFormsModule, FormControl } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { User } from "../../interfaces/user";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})
export class LoginComponent {

  constructor(private router: Router) {
    this.router = inject(Router);
  }

  protected readonly authService: AuthService = inject(AuthService);
  protected readonly loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]).{12,}$/)])
  });

  onSubmit() {
    if (this.loginForm.valid) {
      const user: User = {
        email: this.loginForm.value.email as string,
        password: this.loginForm.value.password as string
      };
      this.authService.login(user);
    }
  }
}
