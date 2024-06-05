import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormationService } from '@app/services/formation.service';
import { Formation } from '@app/interfaces/formation';
import { environment } from '@env/environment';

const IP_API = environment.IP_API;

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [],
  templateUrl: './page.component.html',
  styleUrl: './page.component.sass',
})
export class PageComponent {
  imageHeader: string = `${IP_API}/file/formations/`;

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
    this.imageHeader = `${IP_API}/file/formations/${this.formation.id}.png`;
  }
  goToFormation() {
    this.router.navigate(['/summary', this.formation.id]).then(() => {
      window.scrollTo(0, 0); // Scrolls to the top of the page on navigation end
    });
  }
}
