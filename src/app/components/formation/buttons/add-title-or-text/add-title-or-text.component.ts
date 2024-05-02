import { Component, ViewContainerRef, ViewChild } from '@angular/core';
import { DynamicComponentService } from '@app/services/dynamic-component.service';
import { Title1SectionComponent } from '../../sections/title1-section/title1-section.component';
import { CreateSectionsContainerComponent } from '../../create-sections-container/create-sections-container.component';

@Component({
  selector: 'app-add-title-or-text',
  standalone: true,
  imports: [],
  templateUrl: './add-title-or-text.component.html',
  styleUrl: './add-title-or-text.component.sass',
})
export class AddTitleOrTextComponent {
  isPlus_barVisible = true;
  isAdd_title_or_text_buttonsVisible = false;

  constructor(private createsection: CreateSectionsContainerComponent) {}

  

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
    this.createsection.addTitle();
  }

  addSection(){
    this.createsection.addSection();
  }
}
