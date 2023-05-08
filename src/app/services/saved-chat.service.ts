import { Injectable } from '@angular/core';

interface CardObject {
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})

export class SavedChatService {

  cards: CardObject[] = [
    {title: 'content1', description: 'first saved content'},
    {title: 'content2', description: 'second saved content'},
    {title: 'content3', description: 'third saved content'},
    {title: 'content4', description: 'fourth saved content'},
    {title: 'content5', description: 'fifth saved content'}
  ];
  

  constructor() { }

  getSavedChats(): CardObject[] {
    return this.cards;
  }
}
