import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Markdown } from '@app/interfaces/markdown';
import { MarkdownModule } from 'ngx-markdown';
import { BlocVideoViewComponent } from '../../sections/bloc-video-view/bloc-video-view.component';
import { MatIcon } from '@angular/material/icon';
import { NgClass } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-show-edit-proposals',
  standalone: true,
  imports: [MarkdownModule, BlocVideoViewComponent, MatIcon, NgClass, CarouselModule, ButtonModule, TagModule],
  templateUrl: './show-edit-proposals.component.html',
  styleUrl: './show-edit-proposals.component.sass'
})
export class ShowEditProposalsComponent {
  blockProposals: Markdown[] = [];
  @Output() blocPorposalAccepted = new EventEmitter<Markdown>();
  @Output() blocPorposalRejected = new EventEmitter<Markdown>();

  @Input()
  set setBlockProposals(blockProposals: Markdown[]) {
    this.blockProposals = blockProposals;
  }

  acceptBlockProposal(blockProposal: Markdown) {
    console.log('Accepting block proposal', blockProposal);
    this.blocPorposalAccepted.emit(blockProposal);
    const index = this.blockProposals.indexOf(blockProposal);
    if (index > -1) {
      this.blockProposals.splice(index, 1);
    }    
  }

  rejectBlockProposal(blockProposal: Markdown) {
    console.log('Rejecting block proposal', blockProposal);
    this.blocPorposalRejected.emit(blockProposal);
    const index = this.blockProposals.indexOf(blockProposal);
    if (index > -1) {
      this.blockProposals.splice(index, 1);
    }
  }
}
