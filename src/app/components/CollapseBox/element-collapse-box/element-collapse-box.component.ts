import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-element-collapse-box',
  standalone: true,
  imports: [],
  templateUrl: './element-collapse-box.component.html',
  styleUrl: './element-collapse-box.component.sass'
})
export class ElementCollapseBoxComponent {
@Input() title: string = 'TITLE';
@Input() content: string = 'Lorem Ipsum';
@Input() id: number = 0;
  
    constructor() { }
}
