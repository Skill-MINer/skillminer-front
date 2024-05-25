import { Component, Input, inject } from '@angular/core';
import { Page } from '../../../interfaces/page';
import { Formation } from '../../../interfaces/formation';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import 'prismjs';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';
import { FooterComponent } from '../../footer/footer.component';
import { ScrollToAnchorService } from '../../../services/scroll-to-anchor.service';
import { FormationService } from '../../../services/formation.service';
import { SummaryPageComponent } from './summary-page/summary-page.component';
import { FormationViewComponent } from './formation-view/formation-view.component';
import { SummaryBlockComponent } from './summary-block/summary-block.component';
import { BlocksDragDropComponent } from '../create-formation-content/blocks-drag-drop/blocks-drag-drop.component';

@Component({
  selector: 'app-summary-view',
  standalone: true,
  imports: [RouterLink, FooterComponent, MarkdownModule, SummaryPageComponent, FormationViewComponent, SummaryBlockComponent, BlocksDragDropComponent],
  templateUrl: './summary-view.component.html',
  styleUrl: './summary-view.component.sass',
})
export class SummaryViewComponent {
  formationId: number = 1;
  @Input() formation: Formation = {
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
              type: 'markdown',
              text: 'Ligne 1\nLigne 2\nLigne 3\nLigne 4',
            },
          },
          {
            id: 2,
            title: 'Bloc 2',
            contenu: {
              id: 2,
              type: 'markdown',
              text: 'Ligne 1\nLigne 2\nLigne 3\nLigne 4',
            },
          },
          {
            id: 3,
            title: 'Bloc 3',
            contenu: {
              id: 3,
              type: 'markdown',
              text: 'Ligne 1\nLigne 2\nLigne 3\nLigne 4',
            },
          },
          {
            id: 4,
            title: 'Bloc 4',
            contenu: {
              id: 4,
              type: 'markdown',
              text: 'Ligne 1\nLigne 2\nLigne 3\nLigne 4',
            },
          },
          {
            id: 5,
            title: 'Bloc 5',
            contenu: {
              id: 5,
              type: 'markdown',
              text: 'Ligne 1\nLigne 2\nLigne 3\nLigne 4',
            },
          },
          {
            id: 6,
            title: 'Bloc 6',
            contenu: {
              id: 6,
              type: 'markdown',
              text: 'Ligne 1\nLigne 2\nLigne 3\nLigne 4',
            },
          },
          {
            id: 7,
            title: 'Bloc 7',
            contenu: {
              id: 7,
              type: 'markdown',
              text: 'Ligne 1\nLigne 2\nLigne 3\nLigne 4',
            },
          },
          {
            id: 8,
            title: 'Bloc 8',
            contenu: {
              id: 8,
              type: 'markdown',
              text: 'Ligne 1\nLigne 2\nLigne 3\nLigne 4',
            },
          },
          {
            id: 9,
            title: 'Bloc 9',
            contenu: {
              id: 9,
              type: 'markdown',
              text: 'Ligne 1\nLigne 2\nLigne 3\nLigne 4',
            },
          },
          {
            id: 10,
            title: 'Bloc 10',
            contenu: {
              id: 10,
              type: 'markdown',
              text: 'Ligne 1\nLigne 2\nLigne 3\nLigne 4',
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
              type: 'markdown',
              text: 'Ligne 1\nLigne 2\nLigne 3\nLigne 4',
            },
          },
          {
            id: 12,
            title: 'Bloc 12',
            contenu: {
              id: 12,
              type: 'markdown',
              text: 'Ligne 1\nLigne 2\nLigne 3\nLigne 4',
            },
          },
          {
            id: 13,
            title: 'Bloc 13',
            contenu: {
              id: 13,
              type: 'markdown',
              text: 'Ligne 1\nLigne 2\nLigne 3\nLigne 4',
            },
          },
          {
            id: 14,
            title: 'Bloc 14',
            contenu: {
              id: 14,
              type: 'markdown',
              text: 'Ligne 1\nLigne 2\nLigne 3\nLigne 4',
            },
          },
          {
            id: 15,
            title: 'Bloc 15',
            contenu: {
              id: 15,
              type: 'markdown',
              text: 'Ligne 1\nLigne 2\nLigne 3\nLigne 4',
            },
          },
          {
            id: 16,
            title: 'Bloc 16',
            contenu: {
              id: 16,
              type: 'markdown',
              text: 'Ligne 1\nLigne 2\nLigne 3\nLigne 4',
            },
          },
          {
            id: 17,
            title: 'Bloc 17',
            contenu: {
              id: 17,
              type: 'markdown',
              text: 'Ligne 1\nLigne 2\nLigne 3\nLigne 4',
            },
          },
          {
            id: 18,
            title: 'Bloc 18',
            contenu: {
              id: 18,
              type: 'markdown',
              text: 'Ligne 1\nLigne 2\nLigne 3\nLigne 4',
            },
          },
          {
            id: 19,
            title: 'Bloc 19',
            contenu: {
              id: 19,
              type: 'markdown',
              text: 'Ligne 1\nLigne 2\nLigne 3\nLigne 4',
            },
          },
          {
            id: 20,
            title: 'Bloc 20',
            contenu: {
              id: 20,
              type: 'markdown',
              text: 'Ligne 1\nLigne 2\nLigne 3\nLigne 4',
            },
          },
        ],
      },
    ],
  };

  actualPage: Page = {
    id: 1,
    nom: 'Page 1',
    contenu: [
      {
        id: 1,
        title: 'Bloc 1',
        contenu: {
          id: 1,
          type: 'markdown',
          text: 'Ligne 1\nLigne 2\nLigne 3\nLigne 4',
        },
      },
      {
        id: 2,
        title: 'Bloc 2',
        contenu: {
          id: 2,
          type: 'markdown',
          text: 'Ligne 1\nLigne 2\nLigne 3\nLigne 4',
        },
      },
      {
        id: 3,
        title: 'Bloc 3',
        contenu: {
          id: 3,
          type: 'markdown',
          text: 'Ligne 1\nLigne 2\nLigne 3\nLigne 4',
        },
      },
      {
        id: 4,
        title: 'Bloc 4',
        contenu: {
          id: 4,
          type: 'markdown',
          text: 'Ligne 1\nLigne 2\nLigne 3\nLigne 4',
        },
      },
      {
        id: 5,
        title: 'Bloc 5',
        contenu: {
          id: 5,
          type: 'markdown',
          text: 'Ligne 1\nLigne 2\nLigne 3\nLigne 4',
        },
      },
      {
        id: 6,
        title: 'Bloc 6',
        contenu: {
          id: 6,
          type: 'markdown',
          text: 'Ligne 1\nLigne 2\nLigne 3\nLigne 4',
        },
      },
      {
        id: 7,
        title: 'Bloc 7',
        contenu: {
          id: 7,
          type: 'markdown',
          text: 'Ligne 1\nLigne 2\nLigne 3\nLigne 4',
        },
      },
      {
        id: 8,
        title: 'Bloc 8',
        contenu: {
          id: 8,
          type: 'markdown',
          text: 'Ligne 1\nLigne 2\nLigne 3\nLigne 4',
        },
      },
      {
        id: 9,
        title: 'Bloc 9',
        contenu: {
          id: 9,
          type: 'markdown',
          text: 'Ligne 1\nLigne 2\nLigne 3\nLigne 4',
        },
      },
      {
        id: 10,
        title: 'Bloc 10',
        contenu: {
          id: 10,
          type: 'markdown',
          text: 'Ligne 1\nLigne 2\nLigne 3\nLigne 4',
        },
      },
    ],
  };

  private router: Router = inject(Router);
  @Input() activeStep: number = 1;

  constructor(
    //private scrollToAnchorService: ScrollToAnchorService,
    private route: ActivatedRoute,
    private formationService: FormationService
  ) {}

  // scrollToAnchor(anchorId: string): void {
  //   this.scrollToAnchorService.scrollToAnchor(
  //     anchorId,
  //     20 * parseFloat(getComputedStyle(document.documentElement).fontSize)
  //   );
  // }

  ngOnInit() {
    this.formationId = parseInt(this.route.snapshot.paramMap.get('id') ?? '');
    this.formationService
      .getFormationByIdContent(this.formationId)
      .subscribe((data) => {
        this.formation = data;
        if (this.formation.body) {
          console.log(this.formation);
          this.actualPage = this.formation.body[0];
        }
      });
  }
  ngAfterViewInit(): void {
    const anchor = document.querySelector(
      '#item-' + this.route.snapshot.paramMap.get('id')
    );
    if (anchor) anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  handleEventPageHasChanged(page: Page) {
    this.actualPage = page;
  }

  changeActiveStep() {
    if (this.activeStep === 1) {
      this.activeStep = 2;
    } else {
      this.activeStep = 1;
    }
  }

  getActualPageBlocks() {
    return this.actualPage.contenu;
  }

}
