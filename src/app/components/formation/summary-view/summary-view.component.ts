import { Component, inject } from '@angular/core';
import { Page } from '../../../interfaces/page';
import { Formation } from '../../../interfaces/formation';
import { RouterLink, Router } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import 'prismjs';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';
import { FooterComponent } from '../../footer/footer.component';
import { ScrollToAnchorService } from '../../../services/scroll-to-anchor.service';

@Component({
  selector: 'app-summary-view',
  standalone: true,
  imports: [RouterLink, FooterComponent, MarkdownModule],
  templateUrl: './summary-view.component.html',
  styleUrl: './summary-view.component.sass',
})
export class SummaryViewComponent {
  formation: Formation = {
    id: 1,
    titre: 'Formation sur le développement web',
    date_creation: '2024-05-03',
    description: 'Une formation complète sur les technologies web modernes',
    user: {
      id: '123',
      nom: 'Doe',
      prenom: 'John',
      email: 'john.doe@example.com',
      password: 'motdepasse123',
      description: 'Développeur web passionné par les nouvelles technologies',
      imageUrl: 'https://example.com/john.jpg',
    },
    tag: [
      {
        id: '1',
        nom: 'HTML',
      },
      {
        id: '2',
        nom: 'CSS',
      },
      {
        id: '3',
        nom: 'JavaScript',
      },
    ],
    body: [
      {
        id: 1,
        nom: 'Page 1',
        contenu: [
          {
            id: 1,
            title: 'Bloc 1',
            contenu: {
              id: 1,
              text: 'Ligne 1\n\nLigne 2\n\nLigne 3\n\nLigne 4',
            },
          },
          {
            id: 2,
            title: 'Bloc 2',
            contenu: {
              id: 2,
              text: 'Ligne 1\n\nLigne 2\n\nLigne 3\n\nLigne 4',
            },
          },
          {
            id: 3,
            title: 'Bloc 3',
            contenu: {
              id: 3,
              text: 'Ligne 1\n\nLigne 2\n\nLigne 3\n\nLigne 4',
            },
          },
          {
            id: 4,
            title: 'Bloc 4',
            contenu: {
              id: 4,
              text: 'Ligne 1\n\nLigne 2\n\nLigne 3\n\nLigne 4',
            },
          },
          {
            id: 5,
            title: 'Bloc 5',
            contenu: {
              id: 5,
              text: 'Ligne 1\n\nLigne 2\n\nLigne 3\n\nLigne 4',
            },
          },
          {
            id: 6,
            title: 'Bloc 6',
            contenu: {
              id: 6,
              text: 'Ligne 1\n\nLigne 2\n\nLigne 3\n\nLigne 4',
            },
          },
          {
            id: 7,
            title: 'Bloc 7',
            contenu: {
              id: 7,
              text: 'Ligne 1\n\nLigne 2\n\nLigne 3\n\nLigne 4',
            },
          },
          {
            id: 8,
            title: 'Bloc 8',
            contenu: {
              id: 8,
              text: 'Ligne 1\n\nLigne 2\n\nLigne 3\n\nLigne 4',
            },
          },
          {
            id: 9,
            title: 'Bloc 9',
            contenu: {
              id: 9,
              text: 'Ligne 1\n\nLigne 2\n\nLigne 3\n\nLigne 4',
            },
          },
          {
            id: 10,
            title: 'Bloc 10',
            contenu: {
              id: 10,
              text: 'Ligne 1\n\nLigne 2\n\nLigne 3\n\nLigne 4',
            },
          },
        ],
      },
      {
        id: 2,
        nom: 'Page 2',
        contenu: [
          {
            id: 11,
            title: 'Bloc 11',
            contenu: {
              id: 11,
              text: "Markdown __rulez__!\n\n---\n\nSyntax highlight\n\n```typescript\n\nconst language = 'typescript';\n\n```\n\n\n\nLists\n\n1. Ordered list\n\n2. Another bullet point\n\n  - Unordered list\n\n  - Another unordered bullet point\n\n\n\nBlockquote\n\n> Blockquote to the max",
            },
          },
          {
            id: 12,
            title: 'Bloc 12',
            contenu: {
              id: 12,
              text: 'Ligne 1\n\n\n\nLigne 2\n\nLigne 3\n\nLigne 4',
            },
          },
          {
            id: 13,
            title: 'Bloc 13',
            contenu: {
              id: 13,
              text: 'Ligne 1\n\nLigne 2\n\nLigne 3\n\nLigne 4',
            },
          },
          {
            id: 14,
            title: 'Bloc 14',
            contenu: {
              id: 14,
              text: 'Ligne 1\n\nLigne 2\n\nLigne 3\n\nLigne 4',
            },
          },
          {
            id: 15,
            title: 'Bloc 15',
            contenu: {
              id: 15,
              text: 'Ligne 1\n\nLigne 2\n\nLigne 3\n\nLigne 4',
            },
          },
          {
            id: 16,
            title: 'Bloc 16',
            contenu: {
              id: 16,
              text: 'Ligne 1\n\nLigne 2\n\nLigne 3\n\nLigne 4',
            },
          },
          {
            id: 17,
            title: 'Bloc 17',
            contenu: {
              id: 17,
              text: 'Ligne 1\n\nLigne 2\n\nLigne 3\n\nLigne 4',
            },
          },
          {
            id: 18,
            title: 'Bloc 18',
            contenu: {
              id: 18,
              text: 'Ligne 1\n\nLigne 2\n\nLigne 3\n\nLigne 4',
            },
          },
          {
            id: 19,
            title: 'Bloc 19',
            contenu: {
              id: 19,
              text: 'Ligne 1\n\nLigne 2\n\nLigne 3\n\nLigne 4',
            },
          },
          {
            id: 20,
            title: 'Bloc 20',
            contenu: {
              id: 20,
              text: 'Ligne 1\n\nLigne 2\n\nLigne 3\n\nLigne 4',
            },
          },
        ],
      },
    ],
  };
  actualPage: Page;
  private router: Router = inject(Router);

  constructor(private scrollToAnchorService: ScrollToAnchorService) {
    if (this.formation.body) {
      this.actualPage = this.formation.body[0];
    } else {
      this.actualPage = {
        id: 1,
        nom: 'Page 1',
        contenu: [],
      };
    }
  }

  actualRoute() {
    return this.router.url.split('#')[0];
  }
  scrollToAnchor(anchorId: string): void {
    this.scrollToAnchorService.scrollToAnchor(
      anchorId,
      20 * parseFloat(getComputedStyle(document.documentElement).fontSize)
    );
  }
  goToPage(id: number) {
    if (this.formation.body) {
      const temp = this.formation.body.find((page) => page.id === id);
      if (temp) {
        this.actualPage = temp;
      }
    }
  }
}
