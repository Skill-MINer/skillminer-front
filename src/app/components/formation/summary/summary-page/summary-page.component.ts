import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PageTitle } from '@app/interfaces/page-title';

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

  _pages: PageTitle[] = [];

  @Input() 
  set pages(pages: PageTitle[]) {
    this._pages = pages;
  }

  @Output() pageHasChanged = new EventEmitter<PageTitle>();

  goToPage(id: number) {
    this.pageHasChanged.emit(this._pages.find((page) => page.id === id) as PageTitle);
  }
}
