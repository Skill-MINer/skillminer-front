import { Component, EventEmitter, input, Input, Output } from '@angular/core';
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

@Component({
  selector: 'app-element-collapse-box',
  standalone: true,
  imports: [MarkdownEditorComponent, Title1SectionComponent],
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
  @Input() title: string = 'Title ';
  @Input() markdown: Markdown = { text: '' };
  @Output() titleHasChanged = new EventEmitter<string>();
  @Output() markdownHasChanged = new EventEmitter<Markdown>();

  public state: 'collapsed' | 'expanded' = 'expanded';
  isCollapseBoxVisible = false;

  constructor() {}

  toggleVisibility() {
    this.state = this.state === 'collapsed' ? 'expanded' : 'collapsed';
  }
  toggleTitleVisibility() {
    this.isCollapseBoxVisible = !this.isCollapseBoxVisible;
  }
  sendEventTitle(newTitle: string) {
    this.title = newTitle;
    this.titleHasChanged.emit(this.title);
  }
  sendEventMarkdown(markdown: Markdown) {
    this.markdownHasChanged.emit(markdown);
  }
}
