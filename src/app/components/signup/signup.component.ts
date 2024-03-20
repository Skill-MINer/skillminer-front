import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.sass'
})
export class SignupComponent {
  firstName: string;
  lastName: string;
  email: string;
  password: string;

  constructor() {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.password = '';
  }

  onSubmit() {
    console.log('Form submitted');
    console.log('First name: ' + this.firstName);
    console.log('Last name: ' + this.lastName);
    console.log('Email: ' + this.email);
    console.log('Password: ' + this.password)
  }
}
