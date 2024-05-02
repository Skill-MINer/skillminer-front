import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  public isDarkMode: boolean = window.matchMedia('(prefers-color-scheme: dark)').matches;

  updateTheme() {
    if (localStorage['theme'] === 'dark' || ((localStorage['theme'] === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      this.isDarkMode = true;
    } else {
      this.isDarkMode = false;
    }
  }
}