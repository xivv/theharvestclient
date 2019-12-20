import { Injectable } from '@angular/core';
import { Actor } from '../model/actor';

import { Stomp, CompatClient } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { delay } from 'q';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {


  private serverUrl = 'http://localhost:8080/socket';
  private stompClient: CompatClient;

  actor: Actor;

  constructor() {
    this.initializeWebSocketConnection();
  }

  async communicate(command: string) {
    this.stompClient.send("/app/send/message", {}, "Whats upppp");
  }

  initializeWebSocketConnection() {

    const ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    const that = this;

    this.stompClient.connect({}, (frames) => {
      that.stompClient.subscribe("/chat", (message) => {
        this.actor = JSON.parse(message.body);
      });
    });
  }
}
