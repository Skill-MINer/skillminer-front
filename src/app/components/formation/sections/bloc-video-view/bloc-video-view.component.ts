import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Markdown } from '@app/interfaces/markdown';

@Component({
  selector: 'app-bloc-video-view',
  standalone: true,
  imports: [],
  templateUrl: './bloc-video-view.component.html',
  styleUrl: './bloc-video-view.component.sass'
})
export class BlocVideoViewComponent {

  private _contenu: Markdown = { type: 'video', text: '' };
  safeUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this._contenu.text}`);
  }

  @Input()
  set setContenu(contenu: Markdown) {
    this._contenu = contenu;
    console.log('markdown', this._contenu);
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this._contenu.text}`);
  }

  isIdEmpty() {
    return this._contenu.text === '';
  }

}
