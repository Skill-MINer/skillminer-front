import { Component, inject } from '@angular/core';
import { FormGroup, AbstractControl, Validators, ReactiveFormsModule, FormControl } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { User } from "../../interfaces/user";
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.sass'
})
export class SignupComponent {

  constructor(private router: Router) {
    this.router = inject(Router);
  }

  protected readonly authService: AuthService = inject(AuthService);
  protected readonly loginForm = new FormGroup({
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)]),
    confirmPassword: new FormControl("", Validators.required)
  }, { validators: this.passwordsMatch });


  passwordsMatch(control: AbstractControl) {
    const group = <FormGroup>control;
    const passwordControl = group.get('password');
    const confirmPasswordControl = group.get('confirmPassword');
  
    if (passwordControl && confirmPasswordControl) {
      const password = passwordControl.value;
      const confirmPassword = confirmPasswordControl.value;
  
      return password === confirmPassword ? null : { notSame: true };
    }
  
    return { notSame: true };
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const user: User = {
        prenom: this.loginForm.value.firstName as string,
        nom: this.loginForm.value.lastName as string,
        email: this.loginForm.value.email as string,
        password: this.loginForm.value.password as string
      };
      this.authService.signup(user);
    }
  }
}
