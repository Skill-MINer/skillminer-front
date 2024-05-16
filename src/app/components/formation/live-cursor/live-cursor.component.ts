import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '@services/auth.service';
import * as io from 'socket.io-client';

interface cursor_position {
  id: number,
  top: string,
  left: string,
  name: string
};

@Component({
  selector: 'app-live-cursor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './live-cursor.component.html',
  styleUrl: './live-cursor.component.sass'
})
export class LiveCursorComponent {
  private socket: io.Socket;
  my_top_distance: string = "50vh";
  my_left_distance: string = "50vw";
  cursors: cursor_position[] = [{ top: "50vh", left: "50vw", name: "User", id: 0}];
  private colors: string[] = ["blue", "purple", "pink", "orange", "green", "yellow", "gray-dark"];

  constructor(private route: ActivatedRoute, private authService: AuthService) {
    this.socket = io.connect('http://localhost:3000');

    this.socket.on('connect', () => {
      console.log("connected to server");
    });

    try{
      this.socket.emit('connection-to-room', { 
        room_id: this.route.snapshot.paramMap.get('id') ?? "0",
        token: authService.getToken()
      })
    } catch (error) {
      console.error("Error while connecting to room", error);
    }

    this.socket.on('cursor', (cursor: cursor_position) => {
      this.cursors[0] = {...this.cursors[0], ...cursor};
      console.log("cursor", cursor);
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

  getCursorColor(index: number) {
    return this.colors[index % this.colors.length];
  }

}
