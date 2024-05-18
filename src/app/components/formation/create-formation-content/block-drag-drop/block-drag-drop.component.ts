import { Component } from '@angular/core';
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
import { pageContent } from '@app/interfaces/pageContent';
import { AddBlockComponent } from '../add-block/add-block.component';
@Component({
  selector: 'app-block-drag-drop',
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
  templateUrl: './block-drag-drop.component.html',
  styleUrl: './block-drag-drop.component.sass',
})
export class BlockDragDropComponent {
  blocks: pageContent[] = [
    //just one block
    {
      id: 1,
      title: 'Bloc 1',
      contenu: {
        id: 1,
        type: 'markdown',
        text: '```markdown\n### Titre du bloc 1\n\nCeci est un exemple de contenu en Markdown pour le bloc 1.\n```',
      },
    },
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.blocks, event.previousIndex, event.currentIndex);
  }

  edit(title: string) {
    console.log('Editing ' + title);
  }

  handleEventTitleHasChanged(title: string, id: number) {
    this.blocks[id - 1].title = title;
    console.log(this.blocks);
  }

  handleEventContentHasChanged(markdown: Markdown, id: number) {
    {
      if (markdown.id) {
        //change contenu of block with id
        this.blocks.forEach((t) => {
          if (t.id === id) {
            t.contenu.text = markdown.text;
          }
        });
      }
      console.log(
        'block content changed' +
          this.blocks[id - 1].contenu.text +
          'RECEIVED' +
          markdown.text
      );
    }
  }
  handleEventAddBlock(parentBlock: pageContent) {
    const newId: number = this.blocks.length + 1;
    this.blocks.push({
      id: newId,
      title: 'Bloc 3',
      contenu: {
        id: newId,
        type: 'markdown',
        text: '```markdown\n### Titre du bloc 3\n\nCeci est un exemple de contenu en Markdown pour le bloc 3.\n```',
      },
    });
    moveItemInArray(this.blocks, newId, this.blocks.indexOf(parentBlock) + 1);
  }
  handleEventAddVideoBlock(parentBlock: pageContent) {
    const newId: number = this.blocks.length + 1;
    this.blocks.push({
      id: newId,
      title: 'Bloc 3',
      contenu: {
        id: newId,
        type: 'video',
        text: 'url-de-votre-video',
      },
    });
    moveItemInArray(this.blocks, newId, this.blocks.indexOf(parentBlock) + 1);
  }
}
