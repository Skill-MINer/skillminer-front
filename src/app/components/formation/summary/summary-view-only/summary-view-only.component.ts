import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Page } from '@app/interfaces/page';
import { Formation } from '@app/interfaces/formation';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import 'prismjs';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';
import { FooterComponent } from '@app/components/footer/footer.component';
import { FormationService } from '@app/services/formation.service';
import { ScrollToAnchorService } from '@app/services/scroll-to-anchor.service';
import { MatIcon } from '@angular/material/icon';
import { BlocVideoViewComponent } from '../../sections/bloc-video-view/bloc-video-view.component';
import { MarkdownEditorComponent } from '@app/components/markdown-editor/markdown-editor.component';
import { BlocVideoComponent } from '../../sections/bloc-video/bloc-video.component';
import { MarkdownViewOnlyComponent } from '@app/components/markdown-view-only/markdown-view-only.component';
import { ModificationProposalService } from '@app/services/modification-proposal.service';

@Component({
  selector: 'app-summary-view-only',
  standalone: true,
  imports: [
    RouterLink,
    BlocVideoComponent,
    FooterComponent,
    MarkdownViewOnlyComponent,
    BlocVideoViewComponent,
    MatIcon,
    MarkdownEditorComponent,
  ],
  templateUrl: './summary-view-only.component.html',
  styleUrl: './summary-view-only.component.sass',
})
export class SummaryViewOnlyComponent {
  formationId: number = 1;
  formation: Formation = {} as Formation;
  actualPage: Page = {} as Page;
  private router: Router = inject(Router);

  constructor(
    private scrollToAnchorService: ScrollToAnchorService,
    private route: ActivatedRoute,
    private formationService: FormationService,
    private modificationProposalService: ModificationProposalService
  ) {}

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
  ngOnInit() {
    this.formationId = parseInt(this.route.snapshot.paramMap.get('id') ?? '');
    this.formationService
      .getFormationByIdContent(this.formationId)
      .subscribe((data) => {
        this.formation = data;
        if (this.formation.body) {
          this.actualPage = this.formation.body[0];
        }
      });
  }

  switchBlockToEdit(blockid: number, pageId: number) {
    const page = this.formation.body?.find((page) => page.id === pageId);
    if (page) {
      const block = page.contenu.find((block) => block.id === blockid);
      if (block) {
        block.editMode = true;
        block.editContent = JSON.parse(JSON.stringify(block.contenu));
      }
    }
  }

  switchBlockToView(blockid: number, pageId: number) {
    const page = this.formation.body?.find((page) => page.id === pageId);
    if (page) {
      const block = page.contenu.find((block) => block.id === blockid);
      if (block) {
        block.editMode = false;
      }
    }
  }

  updateBlock(blockid: number, pageId: number) {
    const page = this.formation.body?.find((page) => page.id === pageId);
    if (page) {
      const block = page.contenu.find((block) => block.id === blockid);
      if (block && block.editContent) {
        block.contenu = JSON.parse(JSON.stringify(block.editContent));
        this.modificationProposalService.postModificationProposal(
          this.formationId,
          pageId,
          blockid,
          block.contenu
        );
      }
      this.switchBlockToView(blockid, pageId);
    }
  }
}
