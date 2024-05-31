import { Component } from '@angular/core';
import { BlocksProposals } from '@app/interfaces/blocks-proposals';
import { ShowEditProposalsComponent } from '../show-edit-proposals/show-edit-proposals.component';
import { Markdown } from '@app/interfaces/markdown';
import { CollapseEditProposalsComponent } from '../collapse-edit-proposals/collapse-edit-proposals.component';

@Component({
  selector: 'app-merge-edit-proposal',
  standalone: true,
  imports: [ShowEditProposalsComponent, CollapseEditProposalsComponent],
  templateUrl: './merge-edit-proposal.component.html',
  styleUrl: './merge-edit-proposal.component.sass'
})
export class MergeEditProposalComponent {

  public blocksProposals: BlocksProposals[] = [
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

  constructor() {}

}
