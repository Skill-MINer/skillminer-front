import { Component, Input, inject } from '@angular/core';
import { FormGroup, AbstractControl, Validators, ReactiveFormsModule, FormControl } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { User } from "../../interfaces/user";
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.sass'
})
export class ResetPasswordComponent {
  @Input() token: string = "" ;

  constructor(private router: Router) {
    this.router = inject(Router);
  }

  protected readonly authService: AuthService = inject(AuthService);
  protected readonly resetPasswordForm = new FormGroup({
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
    console.log(this.token);
    if (this.resetPasswordForm.valid) {
      this.authService.resetPassword(this.resetPasswordForm.value.password as string, this.token);
    }
  }
}
