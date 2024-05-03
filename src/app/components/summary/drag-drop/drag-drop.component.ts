import { Component } from '@angular/core';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDragPlaceholder,
  CdkDropList,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import {MatIconModule} from '@angular/material/icon';
import { Title1SectionComponent } from '@app/components/formation/sections/title1-section/title1-section.component';
import { AddElementSummaryComponent } from '@app/components/summary/add-element-summary/add-element-summary.component';

@Component({
  selector: 'app-drag-drop',
  standalone: true,
  imports: [CdkDropList, CdkDrag, CdkDragPlaceholder, MatIconModule, Title1SectionComponent, AddElementSummaryComponent],
  templateUrl: './drag-drop.component.html',
  styleUrl: './drag-drop.component.sass'
})
export class DragDropComponent {

  titles = [
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
    moveItemInArray(this.titles, event.previousIndex, event.currentIndex);
  }

  edit(title: string) {
    console.log('Editing ' + title);
  }

  handleEventTitleHasChanged(title: string, id: number) {
    this.titles[id-1].title = title;
    console.log(this.titles)
  }

  handleEventAddTitle(parrentTitle: {id: number, title: string}){
    const newId: number = this.titles.length + 1;
    this.titles.push({
      id: newId,
      title: 'New Title',
    });
    moveItemInArray(this.titles, newId, this.titles.indexOf(parrentTitle)+1);
  }
}
