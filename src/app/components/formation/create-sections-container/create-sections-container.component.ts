import { Component, ViewContainerRef, ViewChild} from '@angular/core';
import { TextSectionComponent } from '../sections/text-section/text-section.component';
import { Title1SectionComponent } from '../sections/title1-section/title1-section.component';
import { AddTitleOrTextComponent } from '../buttons/add-title-or-text/add-title-or-text.component';
import { DynamicComponentService } from '@app/services/dynamic-component.service';

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
export class CreateSectionsContainerComponent{
  @ViewChild('dynamicContainer', { read: ViewContainerRef }) dynamicContainer!: ViewContainerRef;
  sections = [];

  constructor(private dynamicComponentService: DynamicComponentService) {}

  // addSection(type: string) {
  //   this.sections.push();
  // }

  removeSection(index: number) {
    this.sections.splice(index, 1);
  }

  addTitle() {
    this.dynamicComponentService.addComponent(Title1SectionComponent, this.dynamicContainer);
    this.dynamicComponentService.addComponent(AddTitleOrTextComponent, this.dynamicContainer);
  }

  addSection() {
    this.dynamicComponentService.addComponent(TextSectionComponent, this.dynamicContainer);
    this.dynamicComponentService.addComponent(AddTitleOrTextComponent, this.dynamicContainer);
  }
}
