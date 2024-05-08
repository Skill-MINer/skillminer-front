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
import { SearchTrainingsComponent } from './components/search-trainings/search-trainings.component';
import { CreateHeaderFormationComponent } from './components/formation/create-header-formation/create-header-formation.component';
import { TestComponent } from './components/formation/test/test.component';
import { SummaryViewComponent } from './components/formation/summary-view/summary-view.component';
import { CreateSectionsContainerComponent } from './components/formation/create-sections-container/create-sections-container.component';
import { PageComponent } from './components/formation/page/page.component';
import { CreateFormationComponent } from './components/formation/create-formation/create-formation.component';
import { DragDropComponent } from './components/summary/drag-drop/drag-drop.component';
import { BlocVideoComponent } from './components/formation/sections/bloc-video/bloc-video.component';
import { MarkdownEditorComponent } from './components/markdown-editor/markdown-editor.component';
import { MarkdownWithAiComponent } from './components/markdown-with-ai/markdown-with-ai.component';
import { LiveCursorComponent } from './components/formation/live-cursor/live-cursor.component';

export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [noAuthGuard],
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [noAuthGuard],
  },
  { path: 'recover-account', component: RecoverAccountComponent },
  {
    path: 'testsecure',
    component: TestSecureComponent,
    canActivate: [authGuard],
  },
  {
    path: 'profile-update',
    component: ProfileUpdateComponent,
    canActivate: [authGuard],
  },
  { path: 'profile', component: ProfileComponent, canActivate: [authGuard] },
  {
    path: 'formation/:id',
    component: PageComponent,
  },
  {
    path: 'reset-password/:token',
    component: ResetPasswordComponent,
    canActivate: [noAuthGuard],
  },
  {
    path: 'search',
    component: SearchTrainingsComponent,
  },
  { path: 'summary/:id', component: SummaryViewComponent },
  { path: 'test', component: TestComponent },
  {
    path: 'create-header-formation',
    component: CreateHeaderFormationComponent,
  },
  //TEST PATHS
  { path: 'summary/:id', component: SummaryViewComponent },
  { path: 'test-multiS-select', component: TestComponent },
  {
    path: 'test-formationCreateSections',
    component: CreateSectionsContainerComponent,
  },
  {
    path: 'create-formation',
    component: CreateFormationComponent,
  },
  {
    path: 'markdown',
    component: MarkdownEditorComponent,
  },
  {
    path: 'markdown-with-ai',
    component: MarkdownWithAiComponent,
  },
  {
    path: 'drag-drop',
    component: DragDropComponent,
  },
  {
    path: 'bloc-video',
    component: BlocVideoComponent,
  },
  {
    path: 'live-cursor',
    component: LiveCursorComponent,
  }
];
