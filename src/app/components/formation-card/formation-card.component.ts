import { Component, Input } from '@angular/core';
import { Formation } from '../../interfaces/formation';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { skip } from 'rxjs';

const IP_API = environment.IP_API;

@Component({
  selector: 'app-formation-card',
  standalone: true,
  imports: [],
  templateUrl: './formation-card.component.html',
  styleUrl: './formation-card.component.sass',
})
export class FormationCardComponent {
  imageHeader: string = `${IP_API}/file/formations/`;
  imageUser: string = '';

  constructor(private router: Router) {}

  @Input() formationcard: Formation = {};
  ngOnInit(): void {
    //scraps the hours from the date
    if (this.formationcard && this.formationcard.date_creation) {
      this.formationcard.date_creation = this.formationcard.date_creation.slice(
        0,
        10
      );
    }
    //makes sure the tag array is not longer than 3
    if (this.formationcard && this.formationcard.tag?.[3]) {
      this.formationcard.tag = this.formationcard.tag.slice(0, 3);
    }

    this.imageHeader = `${IP_API}/file/formations/${this.formationcard.id}.png`;
    this.imageUser = `${IP_API}/file/users/${this.formationcard.user?.id}.png`;
  }
  goToFormation() {
    console.log('formation card' + this.formationcard.id);
    this.router.navigate(['/formation', this.formationcard.id]).then(() => {
      window.scrollTo(0, 0); // Scrolls to the top of the page on navigation end
    });
  }
}
