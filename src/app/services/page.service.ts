import { Injectable } from '@angular/core';
import { ChatLogService } from './chat-log.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  protected allLogs!: Observable<{ input: string; output: string; isImage: boolean; }[]>;

  constructor(private chatLog: ChatLogService) { }

  // getLogs() {
  //   console.log('page created');
  //   this.allLogs = this.chatLog.getChats();

  //   this.allLogs.subscribe(logs => {
  //     /* console.log(logs); */
  //     return(logs);
      
  //   });
  // }

  /* createPage() {
    console.log(this.getLogs());
  } */

  getLogs(): Promise<any> {
    return new Promise<any>((resolve) => {
      this.chatLog.getChats().subscribe(logs => {
        resolve(logs);
      });
    });
  }

  async createPage() {
    console.log('page created');
  
    const logs = await this.getLogs();
    console.log(logs);

    const savedPages = JSON.parse(localStorage.getItem('savedPages') || '[]');
    const newPageId = savedPages.length + 1; // generate a new ID for the new page using a library like uuid
    savedPages.push({ id: newPageId, logs }); // save the logs under a new page ID
    console.log(newPageId);
    
    localStorage.setItem('savedPages', JSON.stringify(savedPages));
    console.log(savedPages);
  }
}

export function uuidv4(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

/* for (const log of logs) {
      const inputElement = document.createElement('p');
      inputElement.innerText = log.input;
      logsContainer!.appendChild(inputElement);

      const outputElement = document.createElement('p');
      outputElement.innerText = log.output;
      logsContainer!.appendChild(outputElement);

      if (log.isImage) {
        const imgElement = document.createElement('img');
        imgElement.src = log.output;
        logsContainer!.appendChild(imgElement);
      }
  } */