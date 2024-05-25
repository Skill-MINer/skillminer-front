import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDragPlaceholder,
  CdkDropList,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import {MatIconModule} from '@angular/material/icon';
import { Title1SectionComponent } from '@app/components/formation/sections/title1-section/title1-section.component';
import { AddElementSummaryComponent } from '@app/components/formation/summary/add-element-summary/add-element-summary.component';
import { SummaryTitle } from '@app/interfaces/summary-title';

@Component({
  selector: 'app-create-summary-formation',
  standalone: true,
  imports: [CdkDropList, CdkDrag, CdkDragPlaceholder, MatIconModule, Title1SectionComponent, AddElementSummaryComponent],
  templateUrl: './create-summary-formation.component.html',
  styleUrl: './create-summary-formation.component.sass'
})
export class CreateSummaryFormationComponent {

  @Output() nextStepEvent = new EventEmitter<SummaryTitle[]>();
  
  titles: SummaryTitle[] = [
    {
      id: 1,
      title: 'First Title',
    },
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.titles, event.previousIndex, event.currentIndex);
    this.nextStepEvent.emit(this.titles);
  }

  edit(title: string) {
    console.log('Editing ' + title);
  }

  handleEventTitleHasChanged(title: string, id: number) {
    // change the title wich has the id
    this.titles.forEach((t) => {
      if (t.id === id) {
        t.title = title;
      }
    });
    this.nextStepEvent.emit(this.titles);
  }

  handleEventAddTitle(parrentTitle: {id: number, title: string}){
    const newId: number = this.titles.length + 1;
    this.titles.push({
      id: newId,
      title: 'New Title',
    });
    moveItemInArray(this.titles, newId, this.titles.indexOf(parrentTitle)+1);
    this.nextStepEvent.emit(this.titles);
  }
}
