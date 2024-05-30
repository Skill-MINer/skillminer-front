import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AddBlocVideoComponent } from '../add-bloc-video/add-bloc-video.component';
import { BlocVideoViewComponent } from '../bloc-video-view/bloc-video-view.component';
import { Markdown } from '@app/interfaces/markdown';

@Component({
  selector: 'app-bloc-video',
  standalone: true,
  imports: [AddBlocVideoComponent, BlocVideoViewComponent],
  templateUrl: './bloc-video.component.html',
  styleUrl: './bloc-video.component.sass',
})
export class BlocVideoComponent {
  _markdown: Markdown = { type: 'vidéo', text: '' };
  @Output() markdownHasChanged = new EventEmitter<Markdown>();
  videoId: string = '';

  constructor() {}

  @Input()
  set markdown(_markdown: Markdown) {
    this._markdown = _markdown;
    console.log('markdown', this._markdown);
    this.videoId = this._markdown.text;
  }

  addVideo(videoId: string) {
    this._markdown.text = videoId;
    this.videoId = this._markdown.text;
    console.log(videoId);
    this.markdownHasChanged.emit(this._markdown);
  }
}
