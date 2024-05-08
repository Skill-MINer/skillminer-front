import { Component } from '@angular/core';
import * as io from 'socket.io-client';

interface cursor_position {
  top: string,
  left: string
};

@Component({
  selector: 'app-live-cursor',
  standalone: true,
  imports: [],
  templateUrl: './live-cursor.component.html',
  styleUrl: './live-cursor.component.sass'
})
export class LiveCursorComponent {
  private socket: io.Socket;
  my_top_distance: string = "50vh";
  my_left_distance: string = "50vw";
  cursors: cursor_position[] = [{ top: "50vh", left: "50vw"}];

  constructor() {
    this.socket = io.connect('http://localhost:3000');
    this.socket.emit("join", "live-cursor-room");
    this.socket.on('movecursor', (cursor: cursor_position) => {
      this.cursors[0] = cursor;
    });
  }

  moveCursor(event: MouseEvent) {
    this.my_top_distance = (100 * (event.clientY + window.scrollY) / window.innerHeight) + "vh";
    this.my_left_distance = (100 * event.clientX  / window.innerWidth) + "vw";

    console.log("mys-cursor position", this.my_top_distance, this.my_left_distance);
    this.socket.emit('cursor', { top: this.my_top_distance, left: this.my_left_distance });
  }

  ngOnInit() {
    document.addEventListener('mousemove', this.moveCursor.bind(this));
  }

}
