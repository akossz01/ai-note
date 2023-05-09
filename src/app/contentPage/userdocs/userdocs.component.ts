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

  private readonly cardKey= 'cardKey'

  private readonly allCardKey = 'allCardKey'

  constructor( public chatLogService: ChatLogService){
    
    localStorage.setItem('cardKey', 'cards')


  }
  content: string | undefined;

  countCards(cardIndex : number){

  }


  public cards: CardObject[] = [
    {title: 'content1', description: 'first saved content'},
    {title: 'content2', description: 'second saved content'},
    {title: 'content3', description: 'third saved content'},
    {title: 'content4', description: 'fourth saved content'},
    {title: 'content5', description: 'fifth saved content'}
  ];

  public newCards: CardObject[] = []
  public allCards: CardObject[] = []
  
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

    getCurrent(currentIndex: number): void{
      const storedChats = localStorage.getItem('chatsS');
      
      if (storedChats) {
        this.chats= JSON.parse(storedChats);
        let chatContent = '';

        console.log()
        console.log(this.chats)

        for (let i = 0; i < this.chats.length; i++) {
          chatContent += '<b>' + this.chats[i].input + '</b>'+ '<br>' + this.chats[i].output + '<br>';
        }

        console.log('ChatContent')
        console.log(chatContent)

        
        this.cards[this.currentIndex].description = chatContent;
        this.cards[this.currentIndex].title = this.chats[this.currentIndex].input
        this.addCollection(this.cards[this.currentIndex])

        console.log('This cards')
        console.log(this.cards[this.currentIndex])
        this.updateCardStorage()  
      }
      
      this.chatLogService.chats = this.chats;
      currentIndex++;
    }

    private updateCardStorage(): void{
      // localStorage.setItem('cardKey', JSON.stringify(this.newCards))

      localStorage.setItem(this.cardKey, JSON.stringify(this.allCards));

    }
  
    addCollection(card: CardObject): void{
      this.newCards.push(card)
    } 
}