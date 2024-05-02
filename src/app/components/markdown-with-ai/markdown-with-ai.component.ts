import { Component } from '@angular/core';
import { MarkdownEditorComponent } from '../markdown-editor/markdown-editor.component';
@Component({
  selector: 'app-markdown-with-ai',
  standalone: true,
  imports: [MarkdownEditorComponent],
  templateUrl: './markdown-with-ai.component.html',
  styleUrl: './markdown-with-ai.component.sass',
})
export class MarkdownWithAiComponent {}
