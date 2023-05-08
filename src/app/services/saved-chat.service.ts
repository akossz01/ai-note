import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

interface CardObject {
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})

export class SavedChatService {

  private cards: CardObject[] = [];
  private savedChatsSubject = new Subject<CardObject[]>();

/*
  cards: CardObject[] = [
    {title: 'content1', description: 'first saved content'},
    {title: 'content2', description: 'second saved content'},
    {title: 'content3', description: 'third saved content'},
    {title: 'content4', description: 'fourth saved content'},
    {title: 'content5', description: 'fifth saved content'}
  ];
*/

  constructor() { }
/*
  saveChat(chat: CardObject): void {
    this.cards.push(chat);
    this.savedChatsSubject.next(this.cards);
  }

  getSavedChats(): CardObject[] {
    return this.cards;
  }

  getSavedChatsSubject(): Subject<CardObject[]> {
    return this.savedChatsSubject;
  }
*/

  getSavedChats(): CardObject[] {
    return this.cards;
  }

  saveChat(chat: CardObject): void {
    this.cards.push(chat);
    this.savedChatsSubject.next(this.cards);
  }

  getSavedChatsSubject(): Observable<CardObject[]> {
    return this.savedChatsSubject.asObservable();
  }

}
