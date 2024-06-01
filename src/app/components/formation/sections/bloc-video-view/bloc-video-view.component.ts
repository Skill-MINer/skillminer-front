import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-bloc-video-view',
  standalone: true,
  imports: [NgClass],
  templateUrl: './bloc-video-view.component.html',
  styleUrl: './bloc-video-view.component.sass'
})
export class BlocVideoViewComponent {

  private _videoId: string = '';
  safeUrl: SafeResourceUrl;
  @Input() width: string = '560';
  @Input() height: string = '315';

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
