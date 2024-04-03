import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RecoverAccountComponent } from './components/recover-account/recover-account.component';
import { TestSecureComponent } from './components/test-secure/test-secure.component';
import { authGuard } from './auth/auth.guard';
import { noAuthGuard } from './auth/no-auth.guard';
import { ProfileUpdateComponent } from './components/profile-update/profile-update.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { CreateHeaderFormationComponent } from './components/formation/create-header-formation/create-header-formation.component';
import { TestComponent } from './components/formation/test/test.component';

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
  },
  { path: 'profile-update', component: ProfileUpdateComponent },
  { path: 'profile', component: ProfileComponent},
  { 
    path: 'reset-password/:token',
    component: ResetPasswordComponent,
    canActivate: [noAuthGuard]
  },
  { path: 'create-header-formation', component: CreateHeaderFormationComponent},
  { path: 'test-multiS-select', component: TestComponent},
];
