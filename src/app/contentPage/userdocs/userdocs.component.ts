import { Component } from '@angular/core';
import { SpeechDemoComponent } from 'src/app/speech-demo/speech-demo.component';
import { ChatLogService } from 'src/app/services/chat-log.service';
import { identity } from 'rxjs';

export interface CardObject {
  title: string;
  description?: string;
}

@Component({
  selector: 'app-userdocs',
  templateUrl: './userdocs.component.html',
  styleUrls: ['./userdocs.component.css']
})






export class UserdocsComponent {

  constructor( public chatLogService: ChatLogService){}
  content: string | undefined;

  /*indexCards = 0;*/

  countCards(cardIndex : number){

  }
    
  /*
  addContent(i: number) {
    this.cards[i].description = this.chatLogService.chats.map(chat => chat.input + ' ' + chat.output).join(' ');
     this.currentCardIndex++;
   }
  */


  public cards: CardObject[] = [
    {title: 'content1', description: 'first saved content'},
    {title: 'content2', description: 'second saved content'},
    {title: 'content3', description: 'third saved content'},
    {title: 'content4', description: 'fourth saved content'},
    {title: 'content5', description: 'fifth saved content'}
  ];
  
  isEditing = [false, false, false, false, false];
  currentCardIndex = 0;
  inputValue: any;

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

  public chats: {
    cardIndex: number;
    length: number; input: string, output: string, isImage: boolean }[] = [];

    showChats: boolean = false;
    showCollection: boolean = false;
    public currentIndex: number = 0;
    public currentMessageIndex = 0;

  verCollection(currentIndex: number): void{ // trebuie sa se actualizeze dupa fiecare adaugare in session

    const storedChats = localStorage.getItem('chatsS');
    if (storedChats) {
      this.chats[0] = JSON.parse(storedChats);
    }
    
    /*
    this.showChats = true; // setează variabila showChats pentru a afișa chat-ul
    this.showCollection = true;
    */

    console.log("This is this.chats")
    console.log(this.chats)

    this.chatLogService.chats = this.chats
    console.log("This is chatLogService")
    console.log(this.chatLogService.chats)

  
    console.log("This is localStorage")
    console.log(localStorage.getItem('chatsS')); 
  }
  
  getCurrent() : void {
    console.log('first')
    console.log(this.currentIndex)
    console.log(this.chats[this.currentIndex])

    
    if (!this.chats[this.currentIndex]){
      const storedChats = localStorage.getItem('chatsS');
      if(storedChats){
        this.chats[this.currentIndex] = JSON.parse(storedChats)
        this.currentIndex += 1
      }
    }

    console.log('after')
    console.log(this.currentIndex)
    console.log(this.chats[this.currentIndex-1])
  }
}