import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
import 'prismjs';
import './prism-imports';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';
import { AIMarkdown } from '../../interfaces/AImarkdown';

@Component({
  selector: 'app-markdown-editor',
  standalone: true,
  imports: [FormsModule, MarkdownModule],
  templateUrl: './markdown-editor.component.html',
  styleUrl: './markdown-editor.component.sass',
  encapsulation: ViewEncapsulation.None,
})
export class MarkdownEditorComponent {
  @Input() markdown: AIMarkdown = {};
}
