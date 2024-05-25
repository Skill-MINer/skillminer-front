import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FooterComponent } from '@app/components/footer/footer.component';
import { Page } from '@app/interfaces/page';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-formation-view',
  standalone: true,
  imports: [FooterComponent, MarkdownModule],
  templateUrl: './formation-view.component.html',
  styleUrl: './formation-view.component.sass'
})
export class FormationViewComponent {
  constructor(
    //private scrollToAnchorService: ScrollToAnchorService,
    private route: ActivatedRoute,
  ) {}

  
  @Input() formationTitle: string | undefined = 'defaut title';
  @Input() actualPage: Page = {} as Page;

}
