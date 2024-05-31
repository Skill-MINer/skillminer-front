import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-title1-section',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './title1-section.component.html',
  styleUrl: './title1-section.component.sass'
})
export class Title1SectionComponent {
  @Input() title: string = 'Defaut title';
  @Output() titleHasChanged = new EventEmitter<string>();
  @Output() titleHasFinishedToChange = new EventEmitter<string>();
  @Output() toggleTitleVisibility = new EventEmitter<null>();

  constructor() { }

  sendEventTitle() {
    console.log(this.title);
    this.titleHasChanged.emit(this.title);
  }

  sendEventTitleEditFinish() {
    console.log('finish', this.title);
    this.titleHasFinishedToChange.emit(this.title);
    this.toggleTitleVisibility.emit();
  }
}
