import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormGroup, AbstractControl, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-profile-update',
  standalone: true,
  imports: [ RouterLink, RouterLinkActive, RouterOutlet, ReactiveFormsModule],
  templateUrl: './profile-update.component.html',
  styleUrl: './profile-update.component.sass'
})
export class ProfileUpdateComponent {

  protected readonly userService: UserService = inject(UserService);
  protected updateProfileForm = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    email: new FormControl("", Validators.email),
    oldPassword: new FormControl(""),
    newPassword: new FormControl("", Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)),
    description: new FormControl(""),
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
    if (this.updateProfileForm.valid) {
      const user: User = {
        prenom: this.updateProfileForm.value.firstName as string,
        nom: this.updateProfileForm.value.lastName as string,
        email: this.updateProfileForm.value.email as string,
        password: this.updateProfileForm.value.newPassword as string,
        description: this.updateProfileForm.value.description as string
      };
      this.userService.updateProfile(user);
    }
  }
}