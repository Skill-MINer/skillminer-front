import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RecoverAccountComponent } from './components/recover-account/recover-account.component';
import { TestSecureComponent } from './components/test-secure/test-secure.component';
import { authGuard } from './auth/auth.guard';
import { noAuthGuard } from './auth/no-auth.guard';

export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { 
    path: 'login',
    component: LoginComponent,
    canActivate: [noAuthGuard]
  },
  { 
    path: 'signup',
    component: SignupComponent,
    canActivate: [noAuthGuard]
  },
  { path: 'recover-account', component: RecoverAccountComponent },
  { 
    path: 'testsecure',
    component: TestSecureComponent,
    canActivate: [authGuard]
  }
];
