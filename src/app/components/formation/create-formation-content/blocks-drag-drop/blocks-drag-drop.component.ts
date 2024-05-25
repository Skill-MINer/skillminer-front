import { Component, Input } from '@angular/core';
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

  @Input() pageBlocks: pageContent[] = [
    {
      id: 1,
      title: 'Bloc 1',
      contenu: {
        id: 1,
        type: 'markdown',
        text: '### Titre du bloc 1\n```\nCeci est un exemple de contenu en Markdown pour le bloc 1.\n```',
      },
    },
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.pageBlocks, event.previousIndex, event.currentIndex);
  }

  edit(title: string) {
    console.log('Editing ' + title);
  }

  handleEventTitleHasChanged(title: string, id: number) {
    this.pageBlocks[id - 1].title = title;
    console.log(this.pageBlocks);
  }

  handleEventContentHasChanged(markdown: Markdown, id: number) {
    {
      if (markdown.id) {
        //change contenu of block with id
        this.pageBlocks.forEach((t) => {
          if (t.id === id) {
            t.contenu.text = markdown.text;
          }
        });
      }
      console.log(
        'block content changed' +
          this.pageBlocks[id - 1].contenu.text +
          'RECEIVED' +
          markdown.text
      );
    }
  }

  handleEventAddBlock(parentBlock: pageContent) {
    const newId: number = Math.max(...this.pageBlocks.map(block => block.id)) + 1;
    this.pageBlocks.push({
      id: newId,
      title: 'Bloc 3',
      contenu: {
        id: newId,
        type: 'markdown',
        text: '```markdown\n### Titre du bloc 3\n\nCeci est un exemple de contenu en Markdown.\n```',
      },
    });
    moveItemInArray(this.pageBlocks, newId, this.pageBlocks.indexOf(parentBlock) + 1);
  }

  handleEventAddVideoBlock(parentBlock: pageContent) {
    const newId: number = Math.max(...this.pageBlocks.map(block => block.id)) + 1;
    this.pageBlocks.push({
      id: newId,
      title: 'Bloc 3',
      contenu: {
        id: newId,
        type: 'video',
        text: 'url-de-votre-video',
      },
    });
    moveItemInArray(this.pageBlocks, newId, this.pageBlocks.indexOf(parentBlock) + 1);
  }
}
