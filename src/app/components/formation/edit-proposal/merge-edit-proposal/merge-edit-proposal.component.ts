import { Component, Input } from '@angular/core';
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


@Component({
  selector: 'app-merge-edit-proposal',
  standalone: true,
  imports: [ShowEditProposalsComponent, CollapseEditProposalsComponent, SummaryPageComponent, SummaryBlockComponent],
  templateUrl: './merge-edit-proposal.component.html',
  styleUrl: './merge-edit-proposal.component.sass'
})
export class MergeEditProposalComponent {

  public fomrationMergeProposals: FormationMergeProposals = {} as FormationMergeProposals;
  public actualPage: PagesProposals = {} as PagesProposals;
  @Input() id! : number;

  constructor(private mergeEditProposalsService: MergeEditProposalsService) { }

  ngOnInit() {
    this.mergeEditProposalsService.fomrationMergeProposals.id = this.id;
    console.log(this.id);
    const response = this.mergeEditProposalsService.getFormationMergeProposals();
    console.log(response);
    if (response) {
      response.subscribe((response) => {
        this.mergeEditProposalsService.fomrationMergeProposals = response;
        this.fomrationMergeProposals = this.mergeEditProposalsService.fomrationMergeProposals;
        if (this.fomrationMergeProposals.body) {
          this.actualPage = this.fomrationMergeProposals.body[0];
        }
      });
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
    if (!this.actualPage || !this.actualPage.id) {
      return {
        id: 0,
        nom: '',
        contenu: []
      };
    }
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

  handleEventblocPorposalRejected({ idBlock, idProposal }: { idBlock: number, idProposal: number }) {
    if (!this.actualPage || !this.actualPage.id) {
      return;
    }
    this.mergeEditProposalsService.deleteBlockProposal(this.actualPage.id, idBlock, idProposal);
  }
}
