import { ThemeService } from '@services/theme.service';
import { Component } from '@angular/core';
import { CardContainerComponent } from '@components/card-container/card-container.component';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CardContainerComponent, RouterLink],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.sass',
})
export class WelcomeComponent {
  constructor(private router : Router, protected themeService : ThemeService) {}
  
  clickNavBar(){
    this.router.navigate(['/search']).then(() => {
      setTimeout(() => {
        const inputElement = document.getElementById('hs-search-article-1');
        if (inputElement) {
          inputElement.focus();
        }
      });
    });
  }
  
}
