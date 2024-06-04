import { Component } from '@angular/core';
import { BlocksProposals } from '@app/interfaces/blocks-proposals';
import { ShowEditProposalsComponent } from '../show-edit-proposals/show-edit-proposals.component';
import { Markdown } from '@app/interfaces/markdown';
import { CollapseEditProposalsComponent } from '../collapse-edit-proposals/collapse-edit-proposals.component';
import { SummaryPageComponent } from '../../summary/summary-page/summary-page.component';
import { PageTitle } from '@app/interfaces/page-title';
import { FormationMergeProposals } from '@app/interfaces/formation-merge-proposals';
import { PagesProposals } from '@app/interfaces/pages-proposals';
import { SummaryBlockComponent } from '../../summary/summary-block/summary-block.component';
import { MergeEditProposalsService } from '@app/services/merge-edit-proposals.service';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-merge-edit-proposal',
  standalone: true,
  imports: [ShowEditProposalsComponent, CollapseEditProposalsComponent, SummaryPageComponent, SummaryBlockComponent],
  templateUrl: './merge-edit-proposal.component.html',
  styleUrl: './merge-edit-proposal.component.sass'
})
export class MergeEditProposalComponent {

  public fomrationMergeProposals: FormationMergeProposals;

  public actualPage: PagesProposals;

  constructor(private mergeEditProposalsService: MergeEditProposalsService) {
    this.fomrationMergeProposals = this.mergeEditProposalsService.fomrationMergeProposals;
    if (this.fomrationMergeProposals.body) {
      this.actualPage = this.fomrationMergeProposals.body[0];
    } else {
      this.actualPage = {} as PagesProposals;
    }
  }

  getFormationPagesTitles() {
    if (!this.fomrationMergeProposals || !this.fomrationMergeProposals.body) {
      return [];
    }
    return this.fomrationMergeProposals.body.map((page: PageTitle) => {
      return {
        id: page.id,
        nom: page.nom
      } as PageTitle;
    });
  }

  handleEventPageHasChanged(page: PageTitle) {
    if (!this.fomrationMergeProposals || !this.fomrationMergeProposals.body) {
      return;
    }
    const index = this.fomrationMergeProposals.body.findIndex((pageProposals) => pageProposals.id === page.id);
    if (index !== undefined) {
      this.actualPage = this.fomrationMergeProposals.body[index];
    }
  }

  getActualPageWithOutProposals() {
    return {
      id: this.actualPage.id,
      nom: this.actualPage.nom,
      contenu: this.actualPage.contenu.map((block) => ({
        id: block.id,
        title: block.title,
        contenu: block.contenu,
      })),
    };
  }
}
