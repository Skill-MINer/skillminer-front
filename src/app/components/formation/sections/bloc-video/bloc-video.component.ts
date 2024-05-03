import { Component } from '@angular/core';
import { AddBlocVideoComponent } from '../add-bloc-video/add-bloc-video.component';
import { BlocVideoViewComponent } from '../bloc-video-view/bloc-video-view.component';

@Component({
  selector: 'app-bloc-video',
  standalone: true,
  imports: [AddBlocVideoComponent, BlocVideoViewComponent],
  templateUrl: './bloc-video.component.html',
  styleUrl: './bloc-video.component.sass'
})
export class BlocVideoComponent {
  
  videoId: string = '';

  constructor() { }

  addVideo(videoId: string) {
    this.videoId = videoId;
    console.log(videoId);
  }

}
