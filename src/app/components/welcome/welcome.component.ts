import { ThemeService } from '@services/theme.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { CardContainerComponent } from '@components/card-container/card-container.component';
import { Router, RouterLink } from '@angular/router';
import { TagsService } from '@app/services/tags.service';
import { Tag } from '@app/interfaces/tag';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CardContainerComponent, RouterLink],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.sass',
})
export class WelcomeComponent {
  tags: Tag[] = [
    { id: '8', nom: 'Machine Learning' },
    { id: '133', nom: 'Productivity' },
    { id: '242', nom: 'Mental Health' },
    { id: '950', nom: 'Mathematical Modeling' },
    { id: '132', nom: 'Work-Life Balance' },
    { id: '893', nom: 'Management Skills' },
  ];
  @Output() tagButtonClicked = new EventEmitter<Tag>();

  constructor(
    private router: Router,
    protected themeService: ThemeService,
    protected tagsService: TagsService
  ) {}

  clickNavBar() {
    this.router.navigate(['/search']).then(() => {
      setTimeout(() => {
        const inputElement = document.getElementById('hs-search-article-1');
        if (inputElement) {
          inputElement.focus();
        }
      });
    });
  }
  goToSearch(tag: Tag) {
    this.tagsService.activeTag = tag;
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
