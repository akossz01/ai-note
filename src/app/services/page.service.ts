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
    const logsContainer = document.getElementById('logs-container');
  
    const logs = await this.getLogs();
    console.log(logs);
  }
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