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
  
  isEditing = [false, false, false, false, false];

  deleteCard(card: CardObject) {
    const index = this.cards.indexOf(card);
    if (index >= 0) {
      this.cards.splice(index, 1);
    }
    console.log("torol", index);
  }

  editContent(index: number) {
    console.log("bejott ide");
    this.isEditing[index] = true;
    console.log(this.isEditing[index], index);
  }

  finalizeRename(index: number) {
    console.log('Content saved:', this.cards[index].title);
    this.isEditing[index] = false;
  }

  cancel(index: number){
    this.isEditing[index] = false;
  }

  updateTitle(index: number, newTitle: string) {
    this.cards[index].title = newTitle;
  }

}
