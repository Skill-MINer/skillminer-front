import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormGroup, AbstractControl, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { UserService } from '@services/user.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-profile-update',
  standalone: true,
  imports: [ RouterLink, RouterLinkActive, RouterOutlet, ReactiveFormsModule ],
  templateUrl: './profile-update.component.html',
  styleUrl: './profile-update.component.sass'
})
export class ProfileUpdateComponent {
  requiredFileType = 'image/png';
  fileName: string = '';
  
  constructor(protected userService: UserService) {}

  protected fieldProfileForm = new FormGroup({
    imageUrl: new FormControl(""),
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    email: new FormControl("", Validators.email),
    description: new FormControl(""),
  });

  protected passwordProfileForm = new FormGroup({
    oldPassword: new FormControl("", Validators.required),
    newPassword: new FormControl("", Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)),
    confirmPassword: new FormControl(""),
  }, { validators: this.matchPassword });
  

  ngOnInit() {
    this.getProfile();
    // this.userService.updateUser();
  }

  getProfile() {
    this.userService.getProfile();

    this.fieldProfileForm.patchValue({
      firstName: this.userService.currentUser.prenom,
      lastName: this.userService.currentUser.nom,
      email: this.userService.currentUser.email,
      description: this.userService.currentUser.description
    });
  }

  matchPassword(control: AbstractControl) {
    const group = <FormGroup>control;
    const passwordControl = group.get('newPassword');
    const confirmPasswordControl = group.get('confirmPassword');
  
    if (passwordControl && confirmPasswordControl) {
      const password = passwordControl.value;
      const confirmPassword = confirmPasswordControl.value;
  
      return password === confirmPassword ? null : { notSame: true };
    }
  
    return { notSame: true };
  }

  onSubmitField() {
    if (this.fieldProfileForm.valid) {
      const user: User = {
        prenom: this.fieldProfileForm.value.firstName as string,
        nom: this.fieldProfileForm.value.lastName as string,
        email: this.fieldProfileForm.value.email as string,
        description: this.fieldProfileForm.value.description as string
      };
      console.log(user);
      this.userService.updateProfile(user);
      this.userService.getProfile();
    }
  }

  onSubmitPassword() {
    if (this.passwordProfileForm.valid) {
      const oldPassword: string = this.passwordProfileForm.value.oldPassword as string;
      const newPassword: string = this.passwordProfileForm.value.newPassword as string;
      this.userService.updatePassword(oldPassword, newPassword);
    }
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.userService.postImage(file);
    }
  }

  onFileRemoved() {
    this.userService.deleteImage();
  }
}