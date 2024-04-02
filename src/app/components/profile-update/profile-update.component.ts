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

  userProfile: User = {};

  protected updateProfileForm = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    email: new FormControl("", Validators.email),
    oldPassword: new FormControl(""),
    newPassword: new FormControl("", Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)),
    description: new FormControl(""),
  }, { validators: this.checkPassword });
  
  constructor(protected readonly userService: UserService) {}

  ngOnInit() {
    this.getProfile();
  }

  getProfile() {
    this.userService.getProfile().subscribe(profile => {
      this.userProfile = profile;
      this.updateProfileForm.patchValue({
        firstName: this.userProfile.prenom,
        lastName: this.userProfile.nom,
        email: this.userProfile.email,
        description: this.userProfile.description
      });
    });
  }

  checkPassword(control: AbstractControl) {
    const group = <FormGroup>control;
    const oldPassword = group.get('oldPassword');
    const newPassword = group.get('newPassword');
  
    if ((!newPassword || newPassword.value === "") || (oldPassword && oldPassword.value != "")) {  
      return null;
    }
  
    return { isOldPassword: false };
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
      console.log(user);
      this.userService.updateProfile(user);
    }
  }
}