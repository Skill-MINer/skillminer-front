import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Page } from '@app/interfaces/page';
import { Formation } from '@app/interfaces/formation';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import 'prismjs';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';
import { FooterComponent } from '@app/components/footer/footer.component';
import { SummaryPageComponent } from '@app/components/formation/summary/summary-page/summary-page.component';
import { FormationViewComponent } from '@app/components/formation/summary/formation-view/formation-view.component';
import { SummaryBlockComponent } from '@app/components/formation/summary/summary-block/summary-block.component';
import { BlocksDragDropComponent } from '@app/components/formation/create-formation-content/blocks-drag-drop/blocks-drag-drop.component';
import { PageTitle } from '@app/interfaces/page-title';
import { CreateFormationService } from '@app/services/create-formation.service';

@Component({
  selector: 'app-summary-edit',
  standalone: true,
  imports: [
    RouterLink,
    MarkdownModule,
    SummaryPageComponent,
    FormationViewComponent,
    SummaryBlockComponent,
    BlocksDragDropComponent,
  ],
  templateUrl: './summary-edit.component.html',
  styleUrl: './summary-edit.component.sass',
})
export class SummaryEditComponent {
  formationId: number = 1;
  actualPage: Page;

  private router: Router = inject(Router);

  @Input() activeStep: number = 1;

  constructor(
    //private scrollToAnchorService: ScrollToAnchorService,
    private route: ActivatedRoute,
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
    this.actualPage = this.createFormationService.formation.body?.find(
      (p) => p.id === page.id
    ) as Page;
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
      console.log(this.createFormationService.formation.body);
      return this.createFormationService.formation.body?.map((page) => {
        return { id: page.id, nom: page.nom } as PageTitle;
      }) as PageTitle[];
    } else {
      return [] as PageTitle[];
    }
  }
}
