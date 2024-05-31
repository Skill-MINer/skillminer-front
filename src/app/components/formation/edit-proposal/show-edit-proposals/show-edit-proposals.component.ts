import { Component, Input } from '@angular/core';
import { Markdown } from '@app/interfaces/markdown';
import { MarkdownModule } from 'ngx-markdown';
import { BlocVideoViewComponent } from '../../sections/bloc-video-view/bloc-video-view.component';

@Component({
  selector: 'app-show-edit-proposals',
  standalone: true,
  imports: [MarkdownModule, BlocVideoViewComponent],
  templateUrl: './show-edit-proposals.component.html',
  styleUrl: './show-edit-proposals.component.sass'
})
export class ShowEditProposalsComponent {
  @Input() blockProposals: Markdown[] = [];
}
