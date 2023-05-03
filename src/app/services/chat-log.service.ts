import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpeechDemoComponent } from '../speech-demo/speech-demo.component';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatLogService {
  private readonly CHATS_KEY = 'chats';

  public chats: { input: string, output: string, isImage: boolean }[] = [];
  showChats: boolean = false;

  constructor() {
    // Load chats and images from local storage on initialization
    const storedChats = localStorage.getItem(this.CHATS_KEY);
    if (storedChats) {
      this.chats = JSON.parse(storedChats);
    }
  }

  public addChat(input: string, output: string, isImage: boolean = false): void {
    this.chats.push({ input, output, isImage});

    localStorage.setItem(this.CHATS_KEY, JSON.stringify(this.chats));
  }

  /* public addImg(imgLink: string): void {
    this.images.push({imgLink});
  } */

  public addImg(input: string, output: string, isImage: boolean = true): void {
    this.chats.push({ input, output, isImage});

    localStorage.setItem(this.CHATS_KEY, JSON.stringify(this.chats));
  }

  
  public clearChats(): void {
    this.chats = [];

    localStorage.removeItem(this.CHATS_KEY);
    
  }






  /* getChats(): { input: string, output: string }[] {
    return this.chats;
  } */
  
  public getChats(): Observable<{ input: string, output: string, isImage: boolean }[]> {
    return of(this.chats);
  }


  private savedChats: { input: string, output: string, isImage: boolean }[] = [];


  public saveChats(): void {
    const storedChats = localStorage.getItem(this.CHATS_KEY);
    if (storedChats) {
      this.savedChats = JSON.parse(storedChats);

      console.log('Saved chats:', this.chats);
      this.showChats = true;
    }
  }

  /*
  public saveChats(): void {
    const storedChats = localStorage.getItem(this.CHATS_KEY);
    if (storedChats) {
      // convertim istoricul chat-ului în format JSON și îl descărcăm ca fișier text
      const chatBlob = new Blob([storedChats], { type: 'text/plain;charset=utf-8' });
      FileSaver.saveAs(chatBlob, 'chatlog.json');

      // afișăm istoricul chat-ului dacă showCollection este setat la true
      if (this.showCollection) {
        this.showChats = true;
      }
    }
  }
  */
  
}
