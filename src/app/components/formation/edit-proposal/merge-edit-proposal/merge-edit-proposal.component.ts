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
import { Page } from '@app/interfaces/page';
import { pageContent } from '@app/interfaces/page-content';

@Component({
  selector: 'app-merge-edit-proposal',
  standalone: true,
  imports: [ShowEditProposalsComponent, CollapseEditProposalsComponent, SummaryPageComponent, SummaryBlockComponent],
  templateUrl: './merge-edit-proposal.component.html',
  styleUrl: './merge-edit-proposal.component.sass'
})
export class MergeEditProposalComponent {

  public blocksProposals1: BlocksProposals[] = [
    {
      id: 1,
      title: 'Block 1',
      actualContenu: {
        id: 1,
        text: 'Proposal 1',
        type: 'markdown'
      },
      contenu: [
        {
          id: 1,
          text: 'Proposal 1\n\n```javascript\nfunction test() {\n  console.log(\'test\');\n}\n```',
          type: 'markdown'
        },
        {
          id: 2,
          text: 'Proposal 2',
          type: 'markdown'
        },
        {
          id: 3,
          text: 'Proposal 3',
          type: 'markdown'
        },
        {
          id: 4,
          text: 'Proposal 4',
          type: 'markdown'
        },
        {
          id: 5,
          text: 'Proposal 5',
          type: 'markdown'
        }
      ]
    },
    {
      id: 2,
      title: 'Block 2',
      actualContenu: {
        id: 1,
        text: 'Proposal 1',
        type: 'markdown'
      },
      contenu: [
        {
          id: 1,
          text: 'Proposal 1',
          type: 'markdown'
        },
        {
          id: 2,
          text: 'Proposal 2',
          type: 'markdown'
        },
        {
          id: 3,
          text: 'Gv2fzC96Z40',
          type: 'video'
        },
        {
          id: 4,
          text: 'Proposal 4',
          type: 'markdown'
        },
        {
          id: 5,
          text: 'Proposal 5',
          type: 'markdown'
        }
      ] as Markdown[]
    },
    {
      id: 3,
      title: 'Block 3',
      actualContenu: {
        id: 1,
        text: '5C3YCTL-36c',
        type: 'video'
      },
      contenu: [
        {
          id: 1,
          text: 'Proposal 1',
          type: 'markdown'
        },
        {
          id: 2,
          text: 'Gv2fzC96Z40',
          type: 'video'
        },
        {
          id: 3,
          text: 'Proposal 3',
          type: 'markdown'
        },
        {
          id: 4,
          text: 'Proposal 4',
          type: 'markdown'
        },
        {
          id: 5,
          text: 'Proposal 5',
          type: 'markdown'
        }
      ] as Markdown[]
    }
  ];

  public blocksProposals2: BlocksProposals[] = [
    {
      id: 1,
      title: 'Block 1',
      actualContenu: {
        id: 1,
        text: 'Proposal 1',
        type: 'markdown'
      },
      contenu: [
        {
          id: 1,
          text: 'Actual cotnent of page 2\n\n```javascript\nfunction test() {\n  console.log(\'test\');\n}\n```',
          type: 'markdown'
        },
        {
          id: 2,
          text: 'Proposal 2',
          type: 'markdown'
        },
        {
          id: 3,
          text: 'Proposal 3',
          type: 'markdown'
        },
        {
          id: 4,
          text: 'Proposal 4',
          type: 'markdown'
        },
        {
          id: 5,
          text: 'Proposal 5',
          type: 'markdown'
        }
      ]
    },
    {
      id: 2,
      title: 'Block 2',
      actualContenu: {
        id: 1,
        text: 'Proposal 1',
        type: 'markdown'
      },
      contenu: [
        {
          id: 1,
          text: 'Proposal 1',
          type: 'markdown'
        },
        {
          id: 2,
          text: 'Proposal 2',
          type: 'markdown'
        },
        {
          id: 3,
          text: 'Gv2fzC96Z40',
          type: 'video'
        },
        {
          id: 4,
          text: 'Proposal 4',
          type: 'markdown'
        },
        {
          id: 5,
          text: 'Proposal 5',
          type: 'markdown'
        }
      ] as Markdown[]
    },
    {
      id: 3,
      title: 'Block 3',
      actualContenu: {
        id: 1,
        text: 'It is working !',
        type: 'markdown'
      },
      contenu: [
        {
          id: 1,
          text: 'Proposal 1',
          type: 'markdown'
        },
        {
          id: 3,
          text: 'Proposal 3',
          type: 'markdown'
        },
        {
          id: 4,
          text: 'Proposal 4',
          type: 'markdown'
        },
        {
          id: 5,
          text: 'Proposal 5',
          type: 'markdown'
        }
      ] as Markdown[]
    }
  ];

  public blocksProposals3: BlocksProposals[] = [
    {
      id: 1,
      title: 'Block 1',
      actualContenu: {
        id: 1,
        text: 'Actual content of page 3',
        type: 'markdown'
      },
      contenu: [
        {
          id: 1,
          text: 'Proposal 1',
          type: 'markdown'
        },
        {
          id: 2,
          text: 'Proposal 2',
          type: 'markdown'
        },
        {
          id: 3,
          text: 'Proposal 3',
          type: 'markdown'
        },
        {
          id: 4,
          text: 'Proposal 4',
          type: 'markdown'
        },
        {
          id: 5,
          text: 'Proposal 5',
          type: 'markdown'
        }
      ]
    },
    {
      id: 2,
      title: 'Block 2',
      actualContenu: {
        id: 1,
        text: 'Proposal 1',
        type: 'markdown'
      },
      contenu: [
        {
          id: 1,
          text: 'Proposal 1',
          type: 'markdown'
        },
        {
          id: 2,
          text: 'Proposal 2',
          type: 'markdown'
        },
        {
          id: 3,
          text: 'Gv2fzC96Z40',
          type: 'video'
        },
        {
          id: 4,
          text: 'Proposal 4',
          type: 'markdown'
        },
        {
          id: 5,
          text: 'Proposal 5',
          type: 'markdown'
        }
      ] as Markdown[]
    },
  ];

  public fomrationMergeProposals: FormationMergeProposals = {
    id: 1,
    titre: 'Formation 1',
    body: [
      {
        id: 1,
        nom: 'Page 1',
        contenu: this.blocksProposals1
      },
      {
        id: 2,
        nom: 'Page 2',
        contenu: this.blocksProposals2
      },
      {
        id: 3,
        nom: 'Page 3',
        contenu: this.blocksProposals3
      }
    ]
  };

  public actualPage: PagesProposals	= this.fomrationMergeProposals.body?.[0] ?? {} as PagesProposals;

  constructor() { }

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

  handleEventPageTitleHasChanged(page: PageTitle) {
    this.actualPage = this.fomrationMergeProposals.body?.find((pageProposals) => pageProposals.id === page.id) ?? {} as PagesProposals;
  }

    getActualPageWithOutProposals() {
      return {
        id: this.actualPage.id,
        nom: this.actualPage.nom,
        contenu: this.actualPage.contenu.map((block) => ({
          id: block.id,
          title: block.title,
          contenu: block.actualContenu,
        })),
      };
    }
  }
