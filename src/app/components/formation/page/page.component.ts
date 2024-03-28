import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [],
  templateUrl: './page.component.html',
  styleUrl: './page.component.sass'
})
export class PageComponent {
  constructor(private router : Router) {}
}
