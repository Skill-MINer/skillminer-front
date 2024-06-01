import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Markdown } from '@app/interfaces/markdown';
import { MarkdownModule } from 'ngx-markdown';
import { BlocVideoViewComponent } from '../../sections/bloc-video-view/bloc-video-view.component';
import { MatIcon } from '@angular/material/icon';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-show-edit-proposals',
  standalone: true,
  imports: [MarkdownModule, BlocVideoViewComponent, MatIcon, NgClass],
  templateUrl: './show-edit-proposals.component.html',
  styleUrl: './show-edit-proposals.component.sass'
})
export class ShowEditProposalsComponent {
  @Input() blockProposals: Markdown[] = [];
  @Output() blocPorposalAccepted = new EventEmitter<Markdown>();
  whichBlockIsVisible: number = 0;

  constructor() { }

  acceptBlockProposal(blockProposal: Markdown) {
    console.log('Accepting block proposal', blockProposal);
    this.blocPorposalAccepted.emit(blockProposal);
    this.blockProposals = this.blockProposals.filter((proposal) => proposal !== blockProposal);
    
  }

  rejectBlockProposal(blockProposal: Markdown) {
    console.log('Rejecting block proposal', blockProposal);
    this.blockProposals = this.blockProposals.filter((proposal) => proposal !== blockProposal);
  }

  isblockProposalVisible(blockProposal: Markdown) {
    return this.blockProposals[this.whichBlockIsVisible] === blockProposal;
  }

  nextBlockProposal() {
    this.whichBlockIsVisible = (this.whichBlockIsVisible + 1) % this.blockProposals.length;
  }

  previousBlockProposal() {
    this.whichBlockIsVisible = (this.whichBlockIsVisible - 1 + this.blockProposals.length) % this.blockProposals.length;
  }
}
