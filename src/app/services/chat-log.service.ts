import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpeechDemoComponent } from '../speech-demo/speech-demo.component';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatLogService {

  private chats: { input: string, output: string }[] = [];

  constructor() { }

  public addChat(input: string, output: string): void {
    this.chats.push({ input, output });
  }

  public clearChats(): void {
    this.chats = [];
  }

  /* getChats(): { input: string, output: string }[] {
    return this.chats;
  } */
  
  public getChats(): Observable<{ input: string, output: string }[]> {
    return of(this.chats);
  }

}
