import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  public isDarkMode: boolean = false;
  // private renderer: Renderer2;

  // constructor(private rendererFactory: RendererFactory2, @Inject(DOCUMENT) private document: Document) {
  //   this.renderer = rendererFactory.createRenderer(null, null);
  // }

  // updateTheme() {
  //   if (localStorage['theme'] === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  //     this.renderer.addClass(this.document.body, 'dark');
  //   } else {
  //     this.renderer.removeClass(this.document.body, 'dark');
  //   }
  // }

  updateTheme() {
    if (localStorage['theme'] === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      this.isDarkMode = true;
    } else {
      this.isDarkMode = false;
    }
  }
}