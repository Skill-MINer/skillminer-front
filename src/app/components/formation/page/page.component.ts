import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormationService } from '@app/services/formation.service';
import { Formation } from '@app/interfaces/formation';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [],
  templateUrl: './page.component.html',
  styleUrl: './page.component.sass',
})
export class PageComponent {
  constructor(
    private router: Router,
    protected formationService: FormationService,
    private route: ActivatedRoute
  ) {}
  formation: Formation = {};
  ngOnInit() {
    this.formation.id = parseInt(this.route.snapshot.paramMap.get('id') ?? '');
    this.formationService
      .getFormationById(this.formation.id)
      .subscribe((data) => {
        this.formation = data;
      });
  }
  goToFormation() {
    this.router.navigate(['/summary', this.formation.id]).then(() => {
      window.scrollTo(0, 0); // Scrolls to the top of the page on navigation end
    });
  }
}
