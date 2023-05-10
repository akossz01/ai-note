import { Component, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { PageService } from 'src/app/services/page.service';

interface CardObject {
  title: string;
  description: string;
}

@Component({
  selector: 'app-userdocs',
  templateUrl: './userdocs.component.html',
  styleUrls: ['./userdocs.component.css']
})

export class UserdocsComponent implements OnInit, OnDestroy {
  private idNum: string = '1';
  private clickedPageId: number | undefined;
  pages: { id: string, title: string, logs: any[] }[] = [];
  private showList: boolean = false;
  
  cards: CardObject[] = [];
  private savedChatSubscription!: Subscription;


  constructor(private pageService: PageService, private el: ElementRef, private renderer: Renderer2 ) {}
  ngOnInit(): void {
    const savedPages = JSON.parse(localStorage.getItem('savedPages') || '[]');

    this.pages = savedPages.map((page: { id: any; title: string, logs: any; }) => ({ id: page.id, title: page.title, logs: page.logs }));
  }

  storePageId(id: string) {
    /* this.idNum = Number(id); */
    this.idNum = id;
    /* this.clickedPageId = this.idNum;
    console.log('Clicked page ID:', this.clickedPageId); */
    return this.idNum;
  }

  getPageId() {
    return this.idNum;
  }

  showPagesList(): void {
    if (this.showList) {
      const sidebar = this.el.nativeElement.querySelector('.sidebar');
      this.renderer.setStyle(sidebar, 'display', 'flex');

      const pagesBtn = this.el.nativeElement.querySelector('.pages-btn');
      this.renderer.setStyle(pagesBtn, 'background', 'white');
      this.renderer.setStyle(pagesBtn, 'color', '#152238');
    } else {
      const sidebar = this.el.nativeElement.querySelector('.sidebar');
      this.renderer.setStyle(sidebar, 'display', 'none');

      const pagesBtn = this.el.nativeElement.querySelector('.pages-btn');
      this.renderer.setStyle(pagesBtn, 'background', '#152238');
      this.renderer.setStyle(pagesBtn, 'color', 'white');
    }

    this.showList = !this.showList;
  }

  deleteCard() {    
    const pageToBeDeleted = this.getPageId();
    console.log(pageToBeDeleted);
    // Retrieve savedPages from the session storage
    const savedPages = JSON.parse(localStorage.getItem('savedPages') || '[]');
    // Find the item with id of 2 and remove it from the array
    const updatedPages = savedPages.filter((page: any) => page.id !== pageToBeDeleted);
    // Set the updated array back to the session storage
    localStorage.setItem('savedPages', JSON.stringify(updatedPages));

  }
/*
  ngOnInit(): void {
    this.cards = this.savedChatService.getSavedChats();
    this.savedChatService.getSavedChatsSubject().subscribe(chats => {
      this.cards = chats;
    } )
  }
*/

/* ngOnInit(): void {
  this.savedChatSubscription = this.savedChatService.getSavedChatsSubject().subscribe(
    (cards: CardObject[]) => {
      this.cards = cards;
    }
  );
} */

ngOnDestroy(): void {
  this.savedChatSubscription.unsubscribe();
}


  isEditing = [false, false, false, false, false];


  /* deleteCard(card: CardObject) {
    const index = this.cards.indexOf(card);
    if (index >= 0) {
      this.cards.splice(index, 1);
    }
    console.log("torol", index);
  } */

  editContent(index: number) {
    this.isEditing[index] = true;
    /* console.log(this.isEditing[index], index); */
  }

  finalizeRename(index: number) {
    console.log('Content saved:', this.pages[index].title);
    this.isEditing[index] = false;
  }

  cancel(index: number){
    this.isEditing[index] = false;
  }

  updateTitle(index: number, newTitle: string) {
    this.cards[index].title = newTitle;
  }

}
