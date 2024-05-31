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
    this.createFormationService.wsSendMovePage(event.previousIndex, event.currentIndex);
  }

  supprimer(id: number) {
    if(this.createFormationService.formation.body && this.createFormationService.formation.body.length > 1){
      this.createFormationService.formation.body = this.createFormationService.formation.body?.filter((t) => t.id !== id);
      this.createFormationService.wsSendDeletePage(id);
    }
  }

  handleEventTitleHasChanged(title: string, id: number, endEdit: boolean = false) {
    this.createFormationService.formation.body?.forEach((t) => {
      if (t.id === id) {
        t.nom = title;
      }
    });
    this.createFormationService.wsSendEditPageTitle(id, title, endEdit);
  }

  handleEventAddTitle(parrentTitle: Page){
    const newId: number = Math.max(...(this.createFormationService.formation.body ?? []).map((t) => t.id )) + 1;
    if(!this.createFormationService.formation.body) this.createFormationService.formation.body = [];
    this.createFormationService.formation.body.push({
      id: newId,
      nom: 'New Title',
      contenu: [
        {
          id: 0,
          title: 'New Bloc',
          contenu: {
          id: 1,
          type: 'markdown',
          text: '```\nContent\n```',
          } as Markdown,
      } as pageContent,
      ],
    });
    this.createFormationService.wsSendAddPage(this.createFormationService.formation.body.indexOf(parrentTitle), newId);
    moveItemInArray(
      this.createFormationService.formation.body as Page[],
      this.createFormationService.formation.body.length - 1,
      this.createFormationService.formation.body.indexOf(parrentTitle)+1
    );
  }
}
