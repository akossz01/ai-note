import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpeechDemoComponent } from '../speech-demo/speech-demo.component';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatLogService {
  private readonly CHATS_KEY = 'chats';
  private readonly CHATS_KEYS = 'chatsS';

  public chats: { input: string, output: string, isImage: boolean }[] = [];

  public chatsS: { input: string, output: string, isImage: boolean }[] = [];
  showChats: boolean = false;

  constructor() {
    // Load chats and images from local storage on initialization
    const storedChats = localStorage.getItem(this.CHATS_KEY);
    if (storedChats) {
      this.chats = JSON.parse(storedChats);
    }

    const storedChatsS = sessionStorage.getItem(this.CHATS_KEYS)
    if(storedChatsS){
      this.chatsS = JSON.parse(storedChatsS)
    }
  }

  public addChat(input: string, output: string, isImage: boolean = false): void {
    this.chatsS.push({ input, output, isImage});

    sessionStorage.setItem(this.CHATS_KEYS, JSON.stringify(this.chatsS));

    console.log("This is addChat session storage ", sessionStorage)
  }


  public addImg(input: string, output: string, isImage: boolean = true): void {
    this.chatsS.push({ input, output, isImage});

    sessionStorage.setItem(this.CHATS_KEYS, JSON.stringify(this.chatsS));

    console.log("This is addImg session storage ", this.chatsS)
  }

  
  public clearChats(): void {
    this.chats = [];
    localStorage.removeItem(this.CHATS_KEY);
    
  }
  
  public getChats(): Observable<{ input: string, output: string, isImage: boolean }[]> {
    return of(this.chatsS);
  }


  private savedChats: { input: string, output: string, isImage: boolean }[] = [];


  public saveChats(): void {
    const storedChats = sessionStorage.getItem(this.CHATS_KEYS);
    if (storedChats) {
      this.savedChats = JSON.parse(storedChats);

      console.log('Saved chats:', this.savedChats);
      this.showChats = true;
    }
  }

}