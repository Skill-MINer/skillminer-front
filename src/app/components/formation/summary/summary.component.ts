import { Component, inject } from '@angular/core';
import { SummaryPage } from '../../../interfaces/summary-page';
import { RouterLink, Router } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import 'prismjs';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [RouterLink, FooterComponent, MarkdownModule],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.sass',
})
export class SummaryComponent {
  summary: SummaryPage[];
  private router: Router = inject(Router);

  constructor() {
    this.summary = [
      {
        id: 1,
        title: 'Introduction',
        subtitle: [
          {
            id: 1,
            title: 'Introduction section 1',
            contenu: {
              text: "Markdown __rulez__!\n\n\nSyntax highlight\n```typescript\nconst language = 'typescript';\n```\n\nLists\n1. Ordered list\n2. Another bullet point\n  - Unordered list\n  - Another unordered bullet point\n\nBlockquote\n> Blockquote to the max\n\nJe suis en dehors ",
            },
          },
          {
            id: 2,
            title: 'Introduction section 2',
            contenu: {
              text: "Markdown __rulez__!\n\n\nSyntax highlight\n```typescript\nconst language = 'typescript';\n```\n\nLists\n1. Ordered list\n2. Another bullet point\n  - Unordered list\n  - Another unordered bullet point\n\nBlockquote\n> Blockquote to the max",
            },
          },
          {
            id: 3,
            title: 'Introduction section 3',
            contenu: {
              text: "Markdown __rulez__!\n\n\nSyntax highlight\n```typescript\nconst language = 'typescript';\n```\n\nLists\n1. Ordered list\n2. Another bullet point\n  - Unordered list\n  - Another unordered bullet point\n\nBlockquote\n> Blockquote to the max",
            },
          },
        ],
      },
      {
        id: 2,
        title: 'Chapter 1',
        subtitle: [
          {
            id: 1,
            title: 'Chapter section 1',
            contenu: {
              text: "Markdown __rulez__!\n\n\nSyntax highlight\n```typescript\nconst language = 'typescript';\n```\n\nLists\n1. Ordered list\n2. Another bullet point\n  - Unordered list\n  - Another unordered bullet point\n\nBlockquote\n> Blockquote to the max",
            },
          },
          {
            id: 2,
            title: 'Chapter section 2',
            contenu: {
              text: "Markdown __rulez__!\n\n\nSyntax highlight\n```typescript\nconst language = 'typescript';\n```\n\nLists\n1. Ordered list\n2. Another bullet point\n  - Unordered list\n  - Another unordered bullet point\n\nBlockquote\n> Blockquote to the max",
            },
          },
          {
            id: 3,
            title: 'Chapter section 3',
            contenu: {
              text: "Markdown __rulez__!\n\n\nSyntax highlight\n```typescript\nconst language = 'typescript';\n```\n\nLists\n1. Ordered list\n2. Another bullet point\n  - Unordered list\n  - Another unordered bullet point\n\nBlockquote\n> Blockquote to the max",
            },
          },
          {
            id: 4,
            title: 'Chapter section 4',
            contenu: {
              text: "Markdown __rulez__!\n\n\nSyntax highlight\n```typescript\nconst language = 'typescript';\n```\n\nLists\n1. Ordered list\n2. Another bullet point\n  - Unordered list\n  - Another unordered bullet point\n\nBlockquote\n> Blockquote to the max",
            },
          },
          {
            id: 5,
            title: 'Chapter section 5',
            contenu: {
              text: "Markdown __rulez__!\n\n\nSyntax highlight\n```typescript\nconst language = 'typescript';\n```\n\nLists\n1. Ordered list\n2. Another bullet point\n  - Unordered list\n  - Another unordered bullet point\n\nBlockquote\n> Blockquote to the max",
            },
          },
        ],
      },
      {
        id: 3,
        title: 'Chapter 2',
        subtitle: [
          {
            id: 1,
            title: 'Chapter section 1',
            contenu: {
              text: "Markdown __rulez__!\n\n\nSyntax highlight\n```typescript\nconst language = 'typescript';\n```\n\nLists\n1. Ordered list\n2. Another bullet point\n  - Unordered list\n  - Another unordered bullet point\n\nBlockquote\n> Blockquote to the max",
            },
          },
          {
            id: 2,
            title: 'Chapter section 2',
            contenu: {
              text: "Markdown __rulez__!\n\n\nSyntax highlight\n```typescript\nconst language = 'typescript';\n```\n\nLists\n1. Ordered list\n2. Another bullet point\n  - Unordered list\n  - Another unordered bullet point\n\nBlockquote\n> Blockquote to the max",
            },
          },
          {
            id: 3,
            title: 'Chapter section 3',
            contenu: {
              text: "Markdown __rulez__!\n\n\nSyntax highlight\n```typescript\nconst language = 'typescript';\n```\n\nLists\n1. Ordered list\n2. Another bullet point\n  - Unordered list\n  - Another unordered bullet point\n\nBlockquote\n> Blockquote to the max",
            },
          },
        ],
      },
      {
        id: 4,
        title: 'Chapter 3',
        subtitle: [
          {
            id: 1,
            title: 'Chapter section 1',
            contenu: {
              text: "Markdown __rulez__!\n\n\nSyntax highlight\n```typescript\nconst language = 'typescript';\n```\n\nLists\n1. Ordered list\n2. Another bullet point\n  - Unordered list\n  - Another unordered bullet point\n\nBlockquote\n> Blockquote to the max",
            },
          },
          {
            id: 2,
            title: 'Chapter section 2',
            contenu: {
              text: "Markdown __rulez__!\n\n\nSyntax highlight\n```typescript\nconst language = 'typescript';\n```\n\nLists\n1. Ordered list\n2. Another bullet point\n  - Unordered list\n  - Another unordered bullet point\n\nBlockquote\n> Blockquote to the max",
            },
          },
          {
            id: 3,
            title: 'Chapter section 3',
            contenu: {
              text: "Markdown __rulez__!\n\n\nSyntax highlight\n```typescript\nconst language = 'typescript';\n```\n\nLists\n1. Ordered list\n2. Another bullet point\n  - Unordered list\n  - Another unordered bullet point\n\nBlockquote\n> Blockquote to the max",
            },
          },
          {
            id: 4,
            title: 'Chapter section 4',
            contenu: {
              text: "Markdown __rulez__!\n\n\nSyntax highlight\n```typescript\nconst language = 'typescript';\n```\n\nLists\n1. Ordered list\n2. Another bullet point\n  - Unordered list\n  - Another unordered bullet point\n\nBlockquote\n> Blockquote to the max",
            },
          },
          {
            id: 5,
            title: 'Chapter section 5',
            contenu: {
              text: "Markdown __rulez__!\n\n\nSyntax highlight\n```typescript\nconst language = 'typescript';\n```\n\nLists\n1. Ordered list\n2. Another bullet point\n  - Unordered list\n  - Another unordered bullet point\n\nBlockquote\n> Blockquote to the max",
            },
          },
          {
            id: 6,
            title: 'Chapter section 6',
            contenu: {
              text: "Markdown __rulez__!\n\n\nSyntax highlight\n```typescript\nconst language = 'typescript';\n```\n\nLists\n1. Ordered list\n2. Another bullet point\n  - Unordered list\n  - Another unordered bullet point\n\nBlockquote\n> Blockquote to the max",
            },
          },
          {
            id: 7,
            title: 'Chapter section 7',
            contenu: {
              text: "Markdown __rulez__!\n\n\nSyntax highlight\n```typescript\nconst language = 'typescript';\n```\n\nLists\n1. Ordered list\n2. Another bullet point\n  - Unordered list\n  - Another unordered bullet point\n\nBlockquote\n> Blockquote to the max",
            },
          },
        ],
      },
    ];
  }

  actualRoute() {
    return this.router.url.split('#')[0];
  }
}
