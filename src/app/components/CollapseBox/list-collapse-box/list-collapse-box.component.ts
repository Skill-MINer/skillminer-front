import { Component } from '@angular/core';
import { ElementCollapseBoxComponent } from '../element-collapse-box/element-collapse-box.component';


@Component({
  selector: 'app-list-collapse-box',
  standalone: true,
  imports: [ElementCollapseBoxComponent],
  templateUrl: './list-collapse-box.component.html',
  styleUrl: './list-collapse-box.component.sass'
})
export class ListCollapseBoxComponent {
title: any;
content: any;
  constructor(){}
  listTemporaryBox = [
    {
      title: 'title1',
      content: 'content1',
      id: 1
    },
    {
      title: 'title2',
      content: 'content2',
      id: 2
    },
    {
      title: 'title3',
      content: 'content3',
      id: 3
    },
    {
      title: 'title4',
      content: 'content4',
      id: 4
    },
    {
      title: 'title5',
      content: 'content5',
      id: 5
    },
    {
      title: 'title6',
      content: 'content6',
      id: 6
    },
    {
      title: 'title7',
      content: 'content7',
      id: 7
    },
    {
      title: 'title8',
      content: 'content8',
      id: 8
    },
    {
      title: 'title9',
      content: 'content9',
      id: 9
    },
    {
      title: 'title10',
      content: 'content10',
      id: 10
    }

  ];
  getCollapseBox() {
    
    
  }
  ngOnInit(): void {
    this.getCollapseBox();
  }
  
}
