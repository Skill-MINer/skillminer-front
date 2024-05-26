import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Page } from '../../../interfaces/page';
import { Formation } from '../../../interfaces/formation';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import 'prismjs';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';
import { FooterComponent } from '../../footer/footer.component';
import { FormationService } from '../../../services/formation.service';
import { SummaryPageComponent } from './summary-page/summary-page.component';
import { FormationViewComponent } from './formation-view/formation-view.component';
import { SummaryBlockComponent } from './summary-block/summary-block.component';
import { BlocksDragDropComponent } from '../create-formation-content/blocks-drag-drop/blocks-drag-drop.component';
import { PageTitle } from '@app/interfaces/page-title';
import { CreateFormationService } from '@app/services/create-formation.service';

@Component({
  selector: 'app-summary-view',
  standalone: true,
  imports: [RouterLink, FooterComponent, MarkdownModule, SummaryPageComponent, FormationViewComponent, SummaryBlockComponent, BlocksDragDropComponent],
  templateUrl: './summary-view.component.html',
  styleUrl: './summary-view.component.sass',
})
export class SummaryViewComponent {
  formationId: number = 1;
  actualPage: Page;

  private router: Router = inject(Router);

  @Input() activeStep: number = 1;

  @Output() formationChange = new EventEmitter<Formation>();
  // TODO: Send this event to the parent component each time the page has changed

  constructor(
    //private scrollToAnchorService: ScrollToAnchorService,
    private route: ActivatedRoute,
    private formationService: FormationService,
    protected createFormationService: CreateFormationService
  ) {
    if (this.createFormationService.formation.body) {
      this.actualPage = this.createFormationService.formation.body[0] as Page;
    } else {
      this.actualPage = {} as Page;
    }
  }

  // scrollToAnchor(anchorId: string): void {
  //   this.scrollToAnchorService.scrollToAnchor(
  //     anchorId,
  //     20 * parseFloat(getComputedStyle(document.documentElement).fontSize)
  //   );
  // }

  /*ngOnInit() {
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
  }*/

  ngAfterViewInit(): void {
    const anchor = document.querySelector(
      '#item-' + this.route.snapshot.paramMap.get('id')
    );
    if (anchor) anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  handleEventPageTitleHasChanged(page: PageTitle) {
    console.log('Page has changed', page);
    this.actualPage = this.createFormationService.formation.body?.find((p) => p.id === page.id) as Page;
  }

  changeActiveStep() {
    if (this.activeStep === 1) {
      this.activeStep = 2;
    } else {
      this.activeStep = 1;
    }
  }

  getFormationPagesTitles() {
    if (this.createFormationService.formation.body) {
      return this.createFormationService.formation.body?.map((page) => {
        return { id: page.id, nom: page.nom } as PageTitle;
      }) as PageTitle[];
    } else {
      return [] as PageTitle[];
    }
  }

  handleEventPageHasChanged(page: Page) {
    if (this.createFormationService.formation.body) {
      this.actualPage = this.createFormationService.formation.body.find((p) => p.id === page.id) as Page;
    }
  }

}
