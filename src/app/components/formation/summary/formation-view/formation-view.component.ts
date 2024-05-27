import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FooterComponent } from '@app/components/footer/footer.component';
import { Page } from '@app/interfaces/page';
import { MarkdownModule } from 'ngx-markdown';
import { BlocVideoViewComponent } from '../../sections/bloc-video-view/bloc-video-view.component';

@Component({
  selector: 'app-formation-view',
  standalone: true,
  imports: [FooterComponent, MarkdownModule, BlocVideoViewComponent],
  templateUrl: './formation-view.component.html',
  styleUrl: './formation-view.component.sass'
})
export class FormationViewComponent {
  constructor(
    //private scrollToAnchorService: ScrollToAnchorService,
    private route: ActivatedRoute,
  ) {}

  
  formationTitle: string | undefined = 'defaut title';
  actualPage: Page = {} as Page;

  @Input()
  set setFormationTitle(title: string | undefined) {
    this.formationTitle = title;
  }

  @Input()
  set setActualPage(page: Page) {
    this.actualPage = page;
  }

}
