import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgClass } from '@angular/common';
import { NgStyle } from '@angular/common';
import { PageTitle } from '@app/interfaces/page-title';

@Component({
  selector: 'app-summary-page',
  standalone: true,
  imports: [NgClass, NgStyle],
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

  actualPageId: number = 0;
  @Input() width: number = 16;

  @Output() pageHasChanged = new EventEmitter<PageTitle>();

  goToPage(id: number) {
    this.actualPageId = id;
    this.pageHasChanged.emit(this._pages.find((page) => page.id === id) as PageTitle);
  }

  getWidth() {
    return this.width + 'rem';
  }
}
