import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  messages$ = new BehaviorSubject<string[]>([]);
  messages: string[] = []; //str

  get allMessages() {
    return [...this.messages];
  }

  addMessage(message: string) {
    this.messages = [...this.messages, message];
    this.messages$.next([...this.messages]); //emitting this.messages using RxJS
  }
}
