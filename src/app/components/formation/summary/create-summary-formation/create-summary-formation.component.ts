import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDragPlaceholder,
  CdkDropList,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import {MatIconModule} from '@angular/material/icon';
import { Title1SectionComponent } from '@app/components/formation/sections/title1-section/title1-section.component';
import { AddElementSummaryComponent } from '@app/components/formation/summary/add-element-summary/add-element-summary.component';
import { SummaryTitle } from '@app/interfaces/summary-title';
import { CreateFormationService } from '@app/services/create-formation.service';
import { Page } from '@app/interfaces/page';
import { Markdown } from '@app/interfaces/markdown';
import { pageContent } from '@app/interfaces/page-content';

@Component({
  selector: 'app-create-summary-formation',
  standalone: true,
  imports: [CdkDropList, CdkDrag, CdkDragPlaceholder, MatIconModule, Title1SectionComponent, AddElementSummaryComponent],
  templateUrl: './create-summary-formation.component.html',
  styleUrl: './create-summary-formation.component.sass'
})
export class CreateSummaryFormationComponent {

  constructor(protected createFormationService: CreateFormationService) {}

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.createFormationService.formation.body as Page[], event.previousIndex, event.currentIndex);
  }

  edit(title: string) {
    console.log('Editing ' + title);
  }

  handleEventTitleHasChanged(title: string, id: number) {
    // change the title wich has the id
    this.createFormationService.formation.body?.forEach((t) => {
      if (t.id === id) {
        t.nom = title;
      }
    });
  }

  handleEventAddTitle(parrentTitle: Page){
    const newId: number = Math.max(...(this.createFormationService.formation.body ?? []).map((t) => t.id )) + 1;
    this.createFormationService.formation.body?.push({
      id: newId,
      nom: 'New Title',
      contenu: [
        {
          id: 0,
          title: 'First bloc title',
          contenu: {
          id: 1,
          type: 'markdown',
          text: '#### Contenu du bloc 1\n```\nCeci est un exemple de contenu en Markdown pour le bloc 1.\n```',
          } as Markdown,
      } as pageContent,
      ],
    });
    moveItemInArray(
      this.createFormationService.formation.body as Page[],
      newId,
      (this.createFormationService.formation.body ?? []).indexOf(parrentTitle)+1
    );
  }
}
