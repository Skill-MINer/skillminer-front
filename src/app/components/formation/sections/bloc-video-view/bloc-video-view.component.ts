import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-bloc-video-view',
  standalone: true,
  imports: [],
  templateUrl: './bloc-video-view.component.html',
  styleUrl: './bloc-video-view.component.sass'
})
export class BlocVideoViewComponent {

  private _videoId: string = '';
  safeUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this._videoId}`);
  }

  @Input()
  set videoId(value: string) {
    this._videoId = value;
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this._videoId}`);
  }

  isIdEmpty() {
    return this._videoId === '';
  }

}
