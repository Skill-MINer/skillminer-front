import { Component } from '@angular/core';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDragPlaceholder,
  CdkDropList,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import {MatIconModule} from '@angular/material/icon';
import { Title1SectionComponent } from '../sections/title1-section/title1-section.component';

@Component({
  selector: 'app-drag-drop',
  standalone: true,
  imports: [CdkDropList, CdkDrag, CdkDragPlaceholder, MatIconModule, Title1SectionComponent],
  templateUrl: './drag-drop.component.html',
  styleUrl: './drag-drop.component.sass'
})
export class DragDropComponent {

  movies = [
    {
      id: 1,
      title: 'Episode I - The Phantom Menace',
    },
    {
      id: 2,
      title: 'Episode II - Attack of the Clones',
    },
    {
      id: 3,
      title: 'Episode III - Revenge of the Sith',
    },
    {
      id: 4,
      title: 'Episode IV - A New Hope',
    },
    {
      id: 5,
      title: 'Episode V - The Empire Strikes Back',
    },
    {
      id: 6,
      title: 'Episode VI - Return of the Jedi',
    },
    {
      id: 7,
      title: 'Episode VII - The Force Awakens',
    },
    {
      id: 8,
      title: 'Episode VIII - The Last Jedi',
    },
    {
      id: 9,
      title: 'Episode IX – The Rise of Skywalker',
    },
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }

  edit(movie: string) {
    console.log('Editing ' + movie);
  }

  handleEventTitleHasChanged(title: string, id: number) {
    this.movies[id-1].title = title;
    console.log(this.movies)
  }
}
