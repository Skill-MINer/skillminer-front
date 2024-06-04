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
import { SummaryViewOnlyComponent } from './components/formation/summary/summary-view-only/summary-view-only.component';
import { CreateSectionsContainerComponent } from './components/formation/create-sections-container/create-sections-container.component';
import { PageComponent } from './components/formation/page/page.component';
import { CreateFormationComponent } from './components/formation/create-formation/create-formation.component';
import { CreateSummaryFormationComponent } from './components/formation/summary/create-summary-formation/create-summary-formation.component';
import { BlocVideoComponent } from './components/formation/sections/bloc-video/bloc-video.component';
import { MarkdownEditorComponent } from './components/markdown-editor/markdown-editor.component';
import { MarkdownWithAiComponent } from './components/markdown-with-ai/markdown-with-ai.component';
import { LiveCursorComponent } from './components/formation/live-cursor/live-cursor.component';
import { BlocksDragDropComponent } from './components/formation/create-formation-content/blocks-drag-drop/blocks-drag-drop.component';
import { MergeEditProposalComponent } from './components/formation/edit-proposal/merge-edit-proposal/merge-edit-proposal.component';
import { ShowEditProposalsComponent } from './components/formation/edit-proposal/show-edit-proposals/show-edit-proposals.component';


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
  { path: 'summary/:id', component: SummaryViewOnlyComponent },
  { path: 'test', component: TestComponent },
  {
    path: 'create-header-formation',
    component: CreateHeaderFormationComponent,
  },
  { path: 'test-multiS-select', component: TestComponent },
  {
    path: 'test-formationCreateSections',
    component: CreateSectionsContainerComponent,
  },
  {
    path: 'create-formation',
    component: CreateFormationComponent,
    canActivate: [authGuard],
  },
  {
    path: 'create-formation/:id',
    component: CreateFormationComponent,
    canActivate: [authGuard],
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
    component: CreateSummaryFormationComponent,
  },
  { path: 'block-drag-drop', component: BlocksDragDropComponent },
  {
    path: 'bloc-video',
    component: BlocVideoComponent,
  },
  {
    path: 'live-cursor/:id',
    component: LiveCursorComponent,
  },
  {
    path: 'merge-edit-proposal/:id',
    canActivate: [authGuard],
    component: MergeEditProposalComponent,
  },
  {
    path: 'show-edit-proposals',
    component: ShowEditProposalsComponent,
  },
  { path: '**', redirectTo: ''}
];
