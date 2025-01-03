import { Component, HostListener, Input, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { CreateHeaderFormationComponent } from '../create-header-formation/create-header-formation.component';
import { CreateSummaryFormationComponent } from '@app/components/formation/summary/create-summary-formation/create-summary-formation.component';
import { SummaryEditComponent } from '@app/components/formation/summary/summary-edit/summary-edit.component';
import { CreateFormationService } from '@app/services/create-formation.service';
import { Router } from '@angular/router';
import { LiveCursorComponent } from '../live-cursor/live-cursor.component';
import { environment } from '@env/environment';
import { Formation } from '@app/interfaces/formation';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '@app/interfaces/user';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ToastrService } from 'ngx-toastr';

const IP_API = environment.IP_API;

@Component({
  selector: 'app-create-formation',
  standalone: true,
  imports: [MatTooltipModule, NgClass, CreateHeaderFormationComponent, CreateSummaryFormationComponent, SummaryEditComponent, LiveCursorComponent, FormsModule],
  templateUrl: './create-formation.component.html',
  styleUrl: './create-formation.component.sass',
})
export class CreateFormationComponent {
  private toastr: ToastrService = inject(ToastrService);
  activeStep: number;
  numberOfSteps: number = 3;
  @Input() id: number | undefined;
  isFormationCreated: boolean = false;
  collaboratorEmail: string = '';
  contributeurList: Observable<any>[] = [];
  collaborators: User[] = [];

  constructor(protected createFormationService: CreateFormationService, private router: Router) {
    this.activeStep = 1;
    this.router = inject(Router);
  }

  ngOnInit(): void {
    if (!this.id) {
      this.createFormationService.createEmptyFormation();
    } else {
      this.isFormationCreated = true;
      this.createFormationService.formation.id = this.id;
      this.createFormationService.loadFormation();
      this.getCollaborators();
    }
  }

  nextStep() {
    if (this.activeStep < this.numberOfSteps) {
      this.activeStep += 1;
    }
  }

  previousStep() {
    if (this.activeStep > 1) {
      this.activeStep -= 1;
    }
  }

  previousButtonDisabled() {
    return this.activeStep === 1;
  }

  nextButtonDisabled() {
    return this.activeStep === this.numberOfSteps || !this.createFormationService.headerIsValidated;
  }

  getActiveStep() {
    return this.activeStep;
  }

  endStepper() {
    return this.activeStep === this.numberOfSteps;
  }

  setActiveStep(step: number) {
    if (step <= this.numberOfSteps && step >= 1 && this.createFormationService.headerIsValidated) {
      this.activeStep = step;
    }
  }

  submit() {
    this.createFormationService.saveAllFormationInRemote();
    this.createFormationService.publish(true);
    this.router.navigate([`summary/${this.createFormationService.formation.id}`]);
  }

  /*@HostListener('window:beforeunload', ['$event'])
  onBeforeUnload(event: Event): void {
    if (this.isFormationCreated && this.createFormationService.nbModif > 0) {
      this.createFormationService.wsSendAllFormation();
      fetch(`${IP_API}/formations/${this.createFormationService.formation.id}/contenu`, {
        keepalive: true,
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(this.createFormationService.formation.body),
      }).then((response) => {
        console.log(response);
      });
      this.createFormationService.formation = {} as Formation;
      this.createFormationService.headerIsValidated = false;
      this.createFormationService.imageFile = undefined;
      this.createFormationService.imageUrl = undefined;
    }
  }

  ngOnDestroy() {
    if (this.isFormationCreated && this.createFormationService.nbModif > 0) {
      this.createFormationService.wsSendAllFormation();
      fetch(`${IP_API}/formations/${this.createFormationService.formation.id}/contenu`, {
        keepalive: true,
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(this.createFormationService.formation.body),
      }).then((response) => {
        console.log(response);
      });
      this.createFormationService.formation = {} as Formation;
      this.createFormationService.headerIsValidated = false;
      this.createFormationService.imageFile = undefined;
      this.createFormationService.imageUrl = undefined;
    }
  }*/

  addCollaborator() {
    if (this.collaboratorEmail !== '') {
      this.createFormationService.addCollaborator(this.collaboratorEmail).subscribe((data) => {
        this.toastr.success('Collaborateur ajouté avec succès', 'Succès');
        this.getCollaborators();
      });
      this.collaboratorEmail = '';
    }
  }

  
  
  getCollaborators() {
    this.createFormationService.getCollaborators().subscribe((data) => {
      for (let i = 0; i < data.length; i++) {
        if (this.collaborators.length > i) {
          this.collaborators[i] = data[i];
        } else {
          this.collaborators.push(data[i]);
        }
      }
    });
  }

  getCollaboratorUrl(collaborator: User) {
    return `${IP_API}/file/users/${collaborator.id}`;
  }
}