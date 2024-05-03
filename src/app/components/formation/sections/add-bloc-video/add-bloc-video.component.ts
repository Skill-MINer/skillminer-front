import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-bloc-video',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-bloc-video.component.html',
  styleUrl: './add-bloc-video.component.sass'
})
export class AddBlocVideoComponent {
  @Output() addVideoEvent = new EventEmitter<string>();
  videoUrl: string = '';
  videoId: string = '';

  submitVideo() {
    try {
      const urlParams = new URLSearchParams(new URL(this.videoUrl).search);
      if (this.videoUrl.includes('youtu.be')) {
        const segments = this.videoUrl.split('/');
        this.videoId = segments[segments.length - 1].split('?')[0];
      } else if (this.videoUrl.includes('watch')) {
        this.videoId = urlParams.get('v') || '';
      } else {
        this.videoId = '';
      }
    } catch (e) {
      this.videoId = '';
    }


    this.addVideoEvent.emit(this.videoId);
  }

}
