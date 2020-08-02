import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';
import { ElementAst } from '@angular/compiler';

const SOCKET_ENDPOINT = 'localhost:8000';
@Component({
  selector: 'app-chat-inbox',
  templateUrl: './chat-inbox.component.html',
  styleUrls: ['./chat-inbox.component.scss']
})
export class ChatInboxComponent implements OnInit {
  socket;
  message: string;
  constructor() { }

  ngOnInit() {
    this.setupSocketConnection();
  }

  setupSocketConnection() {

    this.socket.on('message-broadcast', (data: string) => {
      if (data) {
        const element = document.createElement('li');
        element.innerHTML = data;
        element.style.background = 'white';
        element.style.padding = '15px 30px';
        element.style.margin = '10px';
        document.getElementById('message-list').appendChild(element);
      }
    });
  }

  SendMessage() {
    this.socket.emit('message', this.message);
    const element = document.createElement('li');
    element.innerHTML = this.message;
    element.style.background = 'white';
    element.style.padding = '15px 30px';
    element.style.margin = '10px';
    element.style.marginLeft = '200px';
    element.style.textAlign = 'right';
    element.style.borderRadius = '5px';
    element.style.width = '50%';
    document.getElementById('message-list').appendChild(element);
    this.message = '';
  }

}

