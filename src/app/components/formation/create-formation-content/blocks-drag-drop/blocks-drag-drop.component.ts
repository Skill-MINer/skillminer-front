import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDragPlaceholder,
  CdkDropList,
  CdkDragHandle,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { Title1SectionComponent } from '@app/components/formation/sections/title1-section/title1-section.component';
import { ElementCollapseBoxComponent } from '@app/components/formation/sections/element-collapse-box/element-collapse-box.component';
import { Markdown } from '@app/interfaces/markdown';
import { pageContent } from '@app/interfaces/page-content';
import { AddBlockComponent } from '@app/components/formation/create-formation-content/add-block/add-block.component';
import { Page } from '@app/interfaces/page';
import { CreateFormationService } from '@app/services/create-formation.service';


@Component({
  selector: 'app-blocks-drag-drop',
  standalone: true,
  imports: [
    CdkDropList,
    CdkDrag,
    CdkDragPlaceholder,
    CdkDragHandle,
    MatIconModule,
    Title1SectionComponent,
    AddBlockComponent,
    ElementCollapseBoxComponent,
  ],
  templateUrl: './blocks-drag-drop.component.html',
  styleUrl: './blocks-drag-drop.component.sass',
})
export class BlocksDragDropComponent {

  page: Page = {
    id: 1,
    nom: 'Page 1',
    contenu: [
      {
        id: 1,
        title: 'Bloc 1',
        contenu: {
          id: 1,
          type: 'markdown',
          text: '#### Contenu du bloc 1\n```\nCeci est un exemple de contenu en Markdown pour le bloc 1.\n```',
        },
      },
    ]
  };

  @Input()
  set setPageBlocks(page: Page) {
    this.page = page;
  }

  constructor(protected createFormationService: CreateFormationService) { }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.page.contenu, event.previousIndex, event.currentIndex);
    this.createFormationService.wsSendMoveBlock(this.page.id, event.previousIndex, event.currentIndex);
  }

  handleEventTitleHasChanged(title: string, id: number, endEdit: boolean = false) {
    this.page.contenu.find((block) => block.id === id)!.title = title;
    console.log(this.page.contenu);
    this.createFormationService.wsSendEdit(this.page.id, id, title, endEdit);
  }

  handleEventContentHasChanged(markdown: Markdown, id: number, endEdit: boolean = false) {
    if (markdown.id) {
      this.page.contenu.forEach((t) => {
        if (t.id === id) {
          t.contenu.text = markdown.text;
        }
      });
    }
    this.createFormationService.wsSendEdit(this.page.id, id, markdown.text, endEdit);
  }

  handleEventAddBlock(parentBlock: pageContent) {
    const newId: number = Math.max(...this.page.contenu.map(block => block.id)) + 1;
    this.page.contenu.push({
      id: newId,
      title: 'New Bloc',
      contenu: {
        id: newId,
        type: 'markdown',
        text: 'markdown\n### Content of the new bloc\n```\nCeci est un exemple de contenu en Markdown.\n```',
      },
    });
    const parentBlockIndex = this.page.contenu.indexOf(parentBlock);
    moveItemInArray(this.page.contenu, this.page.contenu.length-1, parentBlockIndex + 1);
    this.createFormationService.wsSendAddBlock(this.page.id, parentBlockIndex, newId);
  }

  handleEventAddVideoBlock(parentBlock: pageContent) {
    const newId: number = Math.max(...this.page.contenu.map(block => block.id)) + 1;
    this.page.contenu.push({
      id: newId,
      title: 'Bloc 3',
      contenu: {
        id: newId,
        type: 'video',
        text: '',
      },
    });
    this.createFormationService.wsSendAddVideoBlock(this.page.id, this.page.contenu.indexOf(parentBlock), newId);
    moveItemInArray(this.page.contenu, this.page.contenu.length-1, this.page.contenu.indexOf(parentBlock) + 1);
  }
}
