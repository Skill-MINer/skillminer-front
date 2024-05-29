import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '@services/auth.service';
import * as io from 'socket.io-client';
import { environment } from '@env/environment';
import { UserService } from '@services/user.service';
import { cursorPosition } from '@interfaces/cursor-position';
import { CreateFormationService } from '@app/services/create-formation.service';

@Component({
  selector: 'app-live-cursor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './live-cursor.component.html',
  styleUrl: './live-cursor.component.sass'
})
export class LiveCursorComponent {
  my_top_distance: string = "50vh";
  my_left_distance: string = "50vw";
  cursors: cursorPosition[] = [];
  private colors: string[] = ["blue", "purple", "pink", "orange", "green", "yellow", "gray-dark"];

  constructor(private route: ActivatedRoute, private authService: AuthService, protected userService: UserService, private createFormationService: CreateFormationService) {
    this.createFormationService.socket.on('cursor', (param) => {
      if (userService.currentUser.id !== param.id) {
        let cursor: cursorPosition = param;
        let index: number = this.cursors.findIndex(c => c.id === cursor.id);
        if (index === -1) {
          this.cursors.push(cursor);
        } else {
          this.cursors[index] = cursor;
        }
      }
    });
  }

  moveCursor(event: MouseEvent) {
    this.my_top_distance = (100 * (event.clientY + window.scrollY) / window.innerHeight) + "vh";
    this.my_left_distance = (100 * event.clientX  / window.innerWidth) + "vw";

    this.createFormationService.socket.emit('cursor', { top: this.my_top_distance, left: this.my_left_distance });
  }

  ngOnInit() {
    document.addEventListener('mousemove', this.moveCursor.bind(this));
  }

  getCursorColor(id: number) {
    const index: number = this.cursors.findIndex(cursor => cursor.id === id);
    return this.colors[index % this.colors.length];
  }

}
