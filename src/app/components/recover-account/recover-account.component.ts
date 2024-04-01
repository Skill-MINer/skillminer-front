import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-recover-account',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './recover-account.component.html',
  styleUrl: './recover-account.component.sass'
})
export class RecoverAccountComponent {

  constructor(private router: Router) {
    this.router = inject(Router);
  }

  protected readonly authService: AuthService = inject(AuthService);
  protected readonly recoverAccountForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email])
  });


  onSubmit() {
    if (this.recoverAccountForm.valid) {
      const email: string = this.recoverAccountForm.value.email as string;
      this.authService.recoverAccount(email);
    }
  }

}
