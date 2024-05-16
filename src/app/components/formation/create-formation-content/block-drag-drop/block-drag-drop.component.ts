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
import { AddElementSummaryComponent } from '@app/components/summary/add-element-summary/add-element-summary.component';
import { ElementCollapseBoxComponent } from '@app/components/CollapseBox/element-collapse-box/element-collapse-box.component';
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
    AddElementSummaryComponent,
    ElementCollapseBoxComponent,
  ],
  templateUrl: './block-drag-drop.component.html',
  styleUrl: './block-drag-drop.component.sass',
})
export class BlockDragDropComponent {
  blocks = [
    {
      id: '1',
      title: 'Bloc 1',
      contenu: {
        id: '1',
        text: '```markdown\n# Titre du bloc 1\n\nCeci est un exemple de contenu en Markdown pour le bloc 1.\n```',
      },
    },
    {
      id: '2',
      title: 'Bloc 2',
      contenu: {
        id: '2',
        text: '```markdown\n## Titre du bloc 2\n\nCeci est un exemple de contenu en Markdown pour le bloc 2.\n```',
      },
    },
    {
      id: '3',
      title: 'Bloc 3',
      contenu: {
        id: '3',
        text: '```markdown\n### Titre du bloc 3\n\nCeci est un exemple de contenu en Markdown pour le bloc 3.\n```',
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

  handleEventAddBlock(parentBlock: {
    id: string;
    title: string;
    contenu: { id: string; text: string };
  }) {
    const newId: number = this.blocks.length + 1;
    this.blocks.push({
      id: newId.toString(),
      title: 'Bloc 3',
      contenu: {
        id: '3',
        text: '```markdown\n### Titre du bloc 3\n\nCeci est un exemple de contenu en Markdown pour le bloc 3.\n```',
      },
    });
    moveItemInArray(this.blocks, newId, this.blocks.indexOf(parentBlock) + 1);
  }
}
