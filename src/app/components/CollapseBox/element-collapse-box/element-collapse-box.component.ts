import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() markdown: Markdown = { text: '' };
  @Output() markdownHasChanged = new EventEmitter<Markdown>();

  isCollapseBoxVisible = false;
  constructor() {}
  toggleVisibility() {
    this.isCollapseBoxVisible = !this.isCollapseBoxVisible;
  }
  sendEventMarkdown(markdown: Markdown) {
    this.markdownHasChanged.emit(markdown);
  }
}
