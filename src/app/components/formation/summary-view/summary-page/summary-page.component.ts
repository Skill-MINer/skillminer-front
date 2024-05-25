import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Page } from '@app/interfaces/page';

@Component({
  selector: 'app-summary-page',
  standalone: true,
  imports: [],
  templateUrl: './summary-page.component.html',
  styleUrl: './summary-page.component.sass'
})
export class SummaryPageComponent {
  constructor(
    //private scrollToAnchorService: ScrollToAnchorService,
    private route: ActivatedRoute,
  ) {}

  actualPage: Page = {} as Page;

  @Input() formation_body: any = [];
  @Output() pageHasChanged = new EventEmitter<Page>();

  goToPage(id: number) {
    if (this.formation_body) {
      const temp = this.formation_body.find((page: Page) => page.id === id);
      if (temp) {
        this.pageHasChanged.emit(temp);
      }
    }
  }
}
