import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { CreateHeaderFormationComponent } from '../create-header-formation/create-header-formation.component';

@Component({
  selector: 'app-create-formation',
  standalone: true,
  imports: [NgClass, CreateHeaderFormationComponent],
  templateUrl: './create-formation.component.html',
  styleUrl: './create-formation.component.sass',
})
export class CreateFormationComponent {

  activeStep: number;
  numberOfSteps: number = 3;

  constructor() {
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
    return this.activeStep === this.numberOfSteps;
  }

  getActiveStep() {
    return this.activeStep;
  }

  endStepper() {
    return this.activeStep === this.numberOfSteps;
  }

  setActiveStep(step: number) {
    if (step <= this.numberOfSteps && step >= 1){
      this.activeStep = step;
    }
  }

  submit() {
    console.log('submit');
  }

}
