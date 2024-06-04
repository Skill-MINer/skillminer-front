import { Component, Input } from '@angular/core';
import { Markdown } from '@app/interfaces/markdown';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-markdown-view-only',
  standalone: true,
  imports: [MarkdownModule],
  templateUrl: './markdown-view-only.component.html',
  styleUrl: './markdown-view-only.component.sass'
})
export class MarkdownViewOnlyComponent {

  @Input() markdown: Markdown = {} as Markdown;

  constructor() { }

}
