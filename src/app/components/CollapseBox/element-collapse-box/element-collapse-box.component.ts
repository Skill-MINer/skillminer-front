import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { MarkdownEditorComponent } from '@app/components/markdown-editor/markdown-editor.component';
import { Markdown } from '@app/interfaces/markdown';

@Component({
  selector: 'app-element-collapse-box',
  standalone: true,
  imports: [MarkdownEditorComponent],
  templateUrl: './element-collapse-box.component.html',
  styleUrl: './element-collapse-box.component.sass',
})
export class ElementCollapseBoxComponent {
  [x: string]: any;
  @Input() title: string = 'Title ';
  @Input() markdown: Markdown = { text: '' };
  @Output() titleHasChanged = new EventEmitter<string>();
  @Output() markdownHasChanged = new EventEmitter<Markdown>();

  isCollapseBoxVisible = false;
  constructor() {}
  toggleVisibility() {
    this.isCollapseBoxVisible = !this.isCollapseBoxVisible;
  }
  changeTitleToText() {
    const changeTitleElement = document.getElementById(
      'TitleChange'
    ) as HTMLInputElement;
    const titleElement = document.getElementById('TitleButton') as HTMLElement;

    if (changeTitleElement && titleElement) {
      this.title = changeTitleElement.value;
      this.titleHasChanged.emit(this.title);
    }
  }
  sendEventMarkdown(markdown: Markdown) {
    this.markdownHasChanged.emit(markdown);
  }
}
