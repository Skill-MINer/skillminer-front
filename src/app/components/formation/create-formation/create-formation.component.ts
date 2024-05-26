import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { CreateHeaderFormationComponent } from '../create-header-formation/create-header-formation.component';
import { CreateSummaryFormationComponent } from '@app/components/formation/summary/create-summary-formation/create-summary-formation.component';
import { Formation } from '@app/interfaces/formation';
import { SummaryTitle } from '@app/interfaces/summary-title';
import { Markdown } from '@app/interfaces/markdown';
import { pageContent } from '@app/interfaces/page-content';
import { Page } from '@app/interfaces/page';
import { SummaryViewComponent } from '../summary-view/summary-view.component';
import { CreateFormationService } from '@app/services/create-formation.service';

@Component({
  selector: 'app-create-formation',
  standalone: true,
  imports: [NgClass, CreateHeaderFormationComponent, CreateSummaryFormationComponent, SummaryViewComponent],
  templateUrl: './create-formation.component.html',
  styleUrl: './create-formation.component.sass',
})
export class CreateFormationComponent {

  activeStep: number;
  numberOfSteps: number = 3;

  constructor(protected createFormationService: CreateFormationService) {
    this.activeStep = 1;
  }

  ngOnInit(): void {
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
    console.log('submit');
  }
}