import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Page } from '@app/interfaces/page';

@Component({
  selector: 'app-summary-block',
  standalone: true,
  imports: [],
  templateUrl: './summary-block.component.html',
  styleUrl: './summary-block.component.sass'
})
export class SummaryBlockComponent {
  private router: Router = inject(Router);

  constructor(
  ) {}

  actualPage: Page = {} as Page;

  @Input()
  set setActualPage(page: Page) {
    this.actualPage = page;
  }

  actualRoute() {
    return this.router.url.split('#')[0];
  }
}
