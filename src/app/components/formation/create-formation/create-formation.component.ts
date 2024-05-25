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
  headerValidated: boolean = true;
  formation: Formation = {} as Formation;

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
    return this.activeStep === this.numberOfSteps || !this.headerValidated;
  }

  getActiveStep() {
    return this.activeStep;
  }

  endStepper() {
    return this.activeStep === this.numberOfSteps;
  }

  setActiveStep(step: number) {
    if (step <= this.numberOfSteps && step >= 1 && this.headerValidated){
      this.activeStep = step;
    }
  }

  submit() {
    console.log('submit');
  }

  enableNextStep(step: number) {
    this.headerValidated = true;
  }

  setFormationSummary(titles: SummaryTitle[]) {
    this.formation.body = [] as Page[];
    for (let i = 0; i < titles.length; i++) {
        const title = titles[i];
        this.formation.body.push({
            id: i,
            nom: title.title,
            contenu: [
            {
                id: 0,
                title: 'First Title',
                contenu: {
                id: 1,
                type: 'markdown',
                text: '### Titre du bloc 1\n```\nCeci est un exemple de contenu en Markdown pour le bloc 1.\n```',
                } as Markdown,
            } as pageContent,
            ],
        } as Page);
    }  
  }

}