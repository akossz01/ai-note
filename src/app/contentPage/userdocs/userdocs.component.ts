import { Component } from '@angular/core';
import { SpeechDemoComponent } from 'src/app/speech-demo/speech-demo.component';
import { ChatLogService } from 'src/app/services/chat-log.service';
import { identity } from 'rxjs';

export interface CardObject {
  title: string;
  description?: string;
  chat: ChatLogService;
}

@Component({
  selector: 'app-userdocs',
  templateUrl: './userdocs.component.html',
  styleUrls: ['./userdocs.component.css']
})






export class UserdocsComponent {

  private readonly cardKey= 'cardKey'

  constructor( public chatLogService: ChatLogService){
    /*localStorage.setItem('cardKey', 'cards')*/
    const cardsInLocalStorage = localStorage.getItem(this.cardKey);
    
    if(cardsInLocalStorage){
      this.cards = JSON.parse(cardsInLocalStorage);
    }
    
    
  }
  content: string | undefined;

  countCards(cardIndex : number){

  }


  

  public cards: CardObject[] = [
    {title: 'content1', description: 'first saved content', chat: this.chatLogService,},
    {title: 'content2', description: 'second saved content', chat: this.chatLogService},
    {title: 'content3', description: 'third saved content', chat: this.chatLogService},
    {title: 'content4', description: 'fourth saved content', chat: this.chatLogService},
    {title: 'content5', description: 'fifth saved content', chat: this.chatLogService}
  ];

  public newCards: {title: string, description: string}[] = []
  
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
      const storedChats = localStorage.getItem('chatsS'); //for
      
     
      


      if (storedChats) {
        this.chats= JSON.parse(storedChats);
        let chatContent = '';
        
        for (let i = 0; i < this.chats.length; i++) {
          chatContent += '<b>' + this.chats[i].input + '</b>'+ '<br>' + this.chats[i].output + '<br>';
        }

        this.addCollection(this.chats[currentIndex].input, this.chats[currentIndex].output)
        this.cards[this.currentIndex].description = chatContent;
        this.updateCardStorage()
      }
      this.chatLogService.chats = this.chats;
      currentIndex++;
    }

    private updateCardStorage(): void{
      localStorage.setItem('cardKey', JSON.stringify(this.cards))

      
    }

    

    /*
     verCollection(currentIndex: number): void{ // trebuie sa se actualizeze dupa fiecare adaugare in session

       const storedChats = localStorage.getItem('chatsS');
      
       if (storedChats) {
         this.chats= JSON.parse(storedChats);
         let chatContent = '';
         //this.cards[this.currentIndex].description = this.chats[this.currentIndex].input + ' ' + this.chats[this.currentIndex].output;
         for (let i = 0; i < this.chats.length; i++) {
           chatContent += '<b>' + this.chats[i].input + '</b>'+ '<br>' + this.chats[i].output + '<br>';
        }
         this.addCollection(this.chats[currentIndex].input, this.chats[currentIndex].output)
         this.cards[this.currentIndex].description = chatContent;
       }
       this.chatLogService.chats = this.chats;
       currentIndex++;
       
       //this.showChats = true; // setează variabila showChats pentru a afișa chat-ul
       //this.showCollection = true;
       
  
       console.log("This is this.chats")
       console.log(this.chats)
  
       this.chatLogService.chats = this.chats
       console.log("This is chatLogService")
       console.log(this.chatLogService.chats)
  
    
       console.log("This is localStorage")
       console.log(localStorage.getItem('chatsS'));
     
     } */

    addCollection(title: string, description: string): void{
      this.newCards.push({title, description})
    } 
}