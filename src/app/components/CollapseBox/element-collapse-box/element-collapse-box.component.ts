import { Component, Input } from '@angular/core';
import { MarkdownEditorComponent } from '@app/components/markdown-editor/markdown-editor.component';
@Component({
  selector: 'app-element-collapse-box',
  standalone: true,
  imports: [MarkdownEditorComponent],
  templateUrl: './element-collapse-box.component.html',
  styleUrl: './element-collapse-box.component.sass',
})
export class ElementCollapseBoxComponent {
  @Input() title: string = 'TITLE';
  @Input() content: string = 'Lorem Ipsum';
  @Input() id: number = 0;
  isCollapseBoxVisible = false;
  constructor() {}
  toggleVisibility() {
    this.isCollapseBoxVisible = !this.isCollapseBoxVisible;
  }
}
