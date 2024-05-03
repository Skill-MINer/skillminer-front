import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-element-summary',
  standalone: true,
  imports: [],
  templateUrl: './add-element-summary.component.html',
  styleUrl: './add-element-summary.component.sass'
})
export class AddElementSummaryComponent {
  isPlus_barVisible = true;
  isAdd_title_or_text_buttonsVisible = false;
  @Output() addTitleEvent = new EventEmitter<null>();

  constructor() {}

  toggleVisibility(itemId: string) {
    if (itemId === 'plus_bar') {
      this.isPlus_barVisible = !this.isPlus_barVisible;
      this.isAdd_title_or_text_buttonsVisible = !this.isPlus_barVisible; // Assurez-vous qu'un seul élément est visible à la fois
    } else if (itemId === 'add-title-or-text_buttons') {
      this.isAdd_title_or_text_buttonsVisible =
        !this.isAdd_title_or_text_buttonsVisible;
      this.isPlus_barVisible = !this.isAdd_title_or_text_buttonsVisible; // Assurez-vous qu'un seul élément est visible à la fois
    }
  }

  addTitle() {
    this.addTitleEvent.emit();
  }
}