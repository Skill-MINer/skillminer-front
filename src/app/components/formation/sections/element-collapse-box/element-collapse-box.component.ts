import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MarkdownEditorComponent } from '@app/components/markdown-editor/markdown-editor.component';
import { Markdown } from '@app/interfaces/markdown';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Title1SectionComponent } from '@app/components/formation/sections/title1-section/title1-section.component';
import { BlocVideoComponent } from '../bloc-video/bloc-video.component';
import { CdkDragHandle } from '@angular/cdk/drag-drop';
import { pageContent } from '@app/interfaces/page-content';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-element-collapse-box',
  standalone: true,
  imports: [
    MarkdownEditorComponent,
    Title1SectionComponent,
    BlocVideoComponent,
    CdkDragHandle,
    NgClass
  ],
  templateUrl: './element-collapse-box.component.html',
  styleUrl: './element-collapse-box.component.sass',
  animations: [
    trigger('toggle', [
      state('collapsed', style({ opacity: 0.0, height: 0 })),
      state('expanded', style({ opacity: 1.0, height: '*' })),
      transition('collapsed => expanded', [
        style({ opacity: 0.0, height: 0 }),
        animate('0.3s ease-in-out', style({ opacity: 1.0, height: '*' })),
      ]),
      transition('expanded => collapsed', [
        style({ opacity: 1.0, height: '*' }),
        animate('0.3s ease-in-out', style({ opacity: 0.0, height: 0 })),
      ]),
    ]),
  ],
})
export class ElementCollapseBoxComponent {
  [x: string]: any;
  @Input() block: pageContent = {} as pageContent;
  _markdown: Markdown = { type: 'markdown', text: 'I love markdown' };
  @Output() titleHasChanged = new EventEmitter<string>();
  @Output() titleHasFinishedToChange = new EventEmitter<string>();
  @Output() markdownHasChanged = new EventEmitter<Markdown>();
  @Output() markdownHasFinishedToChange = new EventEmitter<Markdown>();

  public state: 'collapsed' | 'expanded' = 'expanded';
  isCollapseBoxVisible = false;

  constructor() {}

  @Input()
  set markdown(_markdown: Markdown) {
    this._markdown = _markdown;
  }

  toggleVisibility() {
    this.state = this.state === 'collapsed' ? 'expanded' : 'collapsed';
  }
  toggleTitleVisibility() {
    this.isCollapseBoxVisible = !this.isCollapseBoxVisible;
  }
  sendEventTitle(newTitle: string, endEdit: boolean = false) {
    this.block.title = newTitle;
    if (endEdit) {
      this.titleHasFinishedToChange.emit(this.block.title);
    } else {
      this.titleHasChanged.emit(this.block.title);
    }
  }
  sendEventMarkdown(markdown: Markdown, endEdit: boolean = false) {
    if (endEdit) {
      this.markdownHasFinishedToChange.emit(markdown);
    } else {
      this.markdownHasChanged.emit(markdown);
    }
  }
}
