import { Component } from '@angular/core';

interface CardObject {
  title: string;
  description: string;
}

@Component({
  selector: 'app-userdocs',
  templateUrl: './userdocs.component.html',
  styleUrls: ['./userdocs.component.css']
})

export class UserdocsComponent {

  cards: CardObject[] = [
    {title: 'content1', description: 'first saved content'},
    {title: 'content2', description: 'second saved content'},
    {title: 'content3', description: 'third saved content'},
    {title: 'content4', description: 'fourth saved content'},
    {title: 'content5', description: 'fifth saved content'}
  ];
  
  editing = false;
  newTitle = '';

  deleteCard(card: CardObject) {
    const index = this.cards.indexOf(card);
    if (index >= 0) {
      this.cards.splice(index, 1);
    }
  }

  editTitle(card: CardObject) {
    const newTitle = prompt('Enter a new title', card.title);
    if (newTitle && newTitle.trim() !== '') {
      card.title = newTitle.trim();
    }
  }

  startEditing(card: CardObject) {
    this.newTitle = card.title;
    this.editing = true;
  }

  endEditing(card: CardObject) {
    if (this.newTitle.trim() !== '') {
      card.title = this.newTitle.trim();
    }
    this.editing = false;
  }
}
