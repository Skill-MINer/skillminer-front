import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollToAnchorService {
  constructor() {}
  scrollToAnchor(anchorId: string, offset: number = 0): void {
    const element = document.getElementById(anchorId);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  }
}
