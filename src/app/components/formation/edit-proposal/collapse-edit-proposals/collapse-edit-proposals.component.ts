import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { BlocksProposals } from '@app/interfaces/blocks-proposals';
import { NgClass } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { BlocVideoViewComponent } from '../../sections/bloc-video-view/bloc-video-view.component';
import { ShowEditProposalsComponent } from '../show-edit-proposals/show-edit-proposals.component';
import { Markdown } from '@app/interfaces/markdown';
import { MergeEditProposalsService } from '@app/services/merge-edit-proposals.service';

@Component({
  selector: 'app-collapse-edit-proposals',
  standalone: true,
  imports: [NgClass, ShowEditProposalsComponent, MarkdownModule, BlocVideoViewComponent],
  templateUrl: './collapse-edit-proposals.component.html',
  styleUrl: './collapse-edit-proposals.component.sass',
  animations: [
    trigger('toggle', [
      state('collapsed', style({ opacity: 0.0, height: 0 })),
      state('expanded', style({ opacity: 1.0, height: '*' })),
      transition('collapsed => expanded', [
        style({ opacity: 0.0, height: 0 }),
        animate('0.3s ease-in-out', style({ opacity: 1.0, height: '*' })),
      ]),
      transition('expanded => collapsed', [
        style({ opacity: 1.0, height: '*' }),
        animate('0.3s ease-in-out', style({ opacity: 0.0, height: 0 })),
      ]),
    ]),
  ],
})
export class CollapseEditProposalsComponent {
  public state: 'collapsed' | 'expanded' = 'expanded';
  blockProposals: BlocksProposals = {} as BlocksProposals;
  @Output() blocPorposalRejected = new EventEmitter<{idBlock: number, idProposal: number}>();

  @Input()
  set setBlockProposals(blockProposals: BlocksProposals) {
    this.blockProposals = blockProposals;
  }

  constructor(private mergeEditProposalsService: MergeEditProposalsService) { }

  toggleVisibility() {
    this.state = this.state === 'collapsed' ? 'expanded' : 'collapsed';
  }

  handleblocPorposalAccepted(blockProposal: Markdown) {
    this.blockProposals.contenu = blockProposal;
    this.mergeEditProposalsService.updateBlockProposal();
  }

  handleblocPorposalRejected(blockProposal: Markdown) {
    if (!blockProposal.id) {
      return;
    }
    this.blocPorposalRejected.emit({idBlock: this.blockProposals.id, idProposal: blockProposal.id});
  }
}
