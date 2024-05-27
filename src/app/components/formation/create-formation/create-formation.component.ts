import { Component, Input, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { CreateHeaderFormationComponent } from '../create-header-formation/create-header-formation.component';
import { CreateSummaryFormationComponent } from '@app/components/formation/summary/create-summary-formation/create-summary-formation.component';
import { SummaryEditComponent } from '@app/components/formation/summary/summary-edit/summary-edit.component';
import { CreateFormationService } from '@app/services/create-formation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-formation',
  standalone: true,
  imports: [NgClass, CreateHeaderFormationComponent, CreateSummaryFormationComponent, SummaryEditComponent],
  templateUrl: './create-formation.component.html',
  styleUrl: './create-formation.component.sass',
})
export class CreateFormationComponent {

  activeStep: number;
  numberOfSteps: number = 3;
  @Input() id: number | undefined;

  constructor(protected createFormationService: CreateFormationService, private router: Router) {
    this.activeStep = 1;
    this.router = inject(Router);
  }

  ngOnInit(): void {
    if(!this.id) {
      this.createFormationService.createEmptyFormation();
    } else {
      this.createFormationService.formation.id = this.id;
      this.createFormationService.loadFormation();
    }
  }

  nextStep() {
    if (this.activeStep < this.numberOfSteps){
      this.activeStep += 1;
    }
  }

  previousStep() {
    if (this.activeStep > 1){
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
    if (step <= this.numberOfSteps && step >= 1 && this.createFormationService.headerIsValidated){
      this.activeStep = step;
    }
  }

  submit() {
    this.createFormationService.saveAllFormationInRemote();
  }
}