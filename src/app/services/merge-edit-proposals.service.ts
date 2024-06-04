import { Injectable } from '@angular/core';
import { BlocksProposals } from '@app/interfaces/blocks-proposals';
import { FormationMergeProposals } from '@app/interfaces/formation-merge-proposals';
import { Markdown } from '@app/interfaces/markdown';

@Injectable({
  providedIn: 'root'
})
export class MergeEditProposalsService {

  private blocksProposals1: BlocksProposals[] = [
    {
      id: 1,
      title: 'Block 1',
      contenu: {
        id: 1,
        text: 'Proposal 1',
        type: 'markdown'
      },
      proposalsContenu: [
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
      contenu: {
        id: 1,
        text: 'Proposal 1',
        type: 'markdown'
      },
      proposalsContenu: [
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
      contenu: {
        id: 1,
        text: '5C3YCTL-36c',
        type: 'video'
      },
      proposalsContenu: [
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

  private blocksProposals2: BlocksProposals[] = [
    {
      id: 1,
      title: 'Block 1',
      contenu: {
        id: 1,
        text: 'Proposal 1',
        type: 'markdown'
      },
      proposalsContenu: [
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
      contenu: {
        id: 1,
        text: 'Proposal 1',
        type: 'markdown'
      },
      proposalsContenu: [
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
      contenu: {
        id: 1,
        text: 'It is working !',
        type: 'markdown'
      },
      proposalsContenu: [
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

  private blocksProposals3: BlocksProposals[] = [
    {
      id: 1,
      title: 'Block 1',
      contenu: {
        id: 1,
        text: 'Actual content of page 3',
        type: 'markdown'
      },
      proposalsContenu: [
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
      contenu: {
        id: 1,
        text: 'Proposal 1',
        type: 'markdown'
      },
      proposalsContenu: [
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
        contenu: JSON.parse(JSON.stringify(this.blocksProposals1))
      },
      {
        id: 2,
        nom: 'Page 2',
        contenu: JSON.parse(JSON.stringify(this.blocksProposals2))
      },
      {
        id: 3,
        nom: 'Page 3',
        contenu: JSON.parse(JSON.stringify(this.blocksProposals3))
      }
    ]
  };

  constructor() { }
}
