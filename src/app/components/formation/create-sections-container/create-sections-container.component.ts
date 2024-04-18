import { Component } from '@angular/core';
import { TextSectionComponent } from '../sections/text-section/text-section.component';
import { Title1SectionComponent } from '../sections/title1-section/title1-section.component';
import { AddTitleOrTextComponent } from '../buttons/add-title-or-text/add-title-or-text.component';

@Component({
  selector: 'app-create-sections-container',
  standalone: true,
  imports: [
    TextSectionComponent,
    Title1SectionComponent,
    AddTitleOrTextComponent,
  ],
  templateUrl: './create-sections-container.component.html',
  styleUrl: './create-sections-container.component.sass',
})
export class CreateSectionsContainerComponent {
  sections = [];

  addSection(type: string) {
    this.sections.push();
  }

  removeSection(index: number) {
    this.sections.splice(index, 1);
  }
}
