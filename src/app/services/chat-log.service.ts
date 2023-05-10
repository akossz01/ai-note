import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpeechDemoComponent } from '../speech-demo/speech-demo.component';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatLogService {
  private readonly CHATS_KEY = 'chats';

  private chats: { input: string, output: string, isImage: boolean }[] = [];

  constructor() {
    // Load chats and images from local storage on initialization
    const storedChats = sessionStorage.getItem(this.CHATS_KEY);
    if (storedChats) {
      this.chats = JSON.parse(storedChats);
    }
  }

  public addChat(input: string, output: string, isImage: boolean = false): void {
    this.chats.push({ input, output, isImage});

    sessionStorage.setItem(this.CHATS_KEY, JSON.stringify(this.chats));
  }

  /* public addImg(imgLink: string): void {
    this.images.push({imgLink});
  } */

  public addImg(input: string, output: string, isImage: boolean = true): void {
    this.chats.push({ input, output, isImage});

    sessionStorage.setItem(this.CHATS_KEY, JSON.stringify(this.chats));
  }

  public clearChats(): void {
    this.chats = [];

    sessionStorage.removeItem(this.CHATS_KEY);
  }

  /* getChats(): { input: string, output: string }[] {
    return this.chats;
  } */
  
  public getChats(): Observable<{ input: string, output: string, isImage: boolean }[]> {
    return of(this.chats);
  }
}
