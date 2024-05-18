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
  @Input() markdown: Markdown = { type: 'vidéo', text: '' };
  @Output() markdownHasChanged = new EventEmitter<Markdown>();
  videoId: string = this.markdown.text;

  constructor() {}

  addVideo(videoId: string) {
    this.videoId = videoId;
    this.markdown.text = videoId;
    console.log(videoId);
    this.markdownHasChanged.emit(this.markdown);
  }
}
