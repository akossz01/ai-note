import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChatLogService } from '../services/chat-log.service';
import { PdfService } from '../services/pdf-service.service';

@Component({
  selector: 'app-chat-log',
  templateUrl: './chat-log.component.html',
  styleUrls: ['./chat-log.component.css']
})
export class ChatLogComponent {
  public chats: { input: string; output: string; isImage: boolean;}[] = [];

  constructor(private chatService: ChatLogService, private pdfService: PdfService) { }

  @ViewChild('content') content!: ElementRef;
  
  async savePDF() {
    this.pdfService.generatePdf(this.content);
  }

  ngOnInit(): void {
    this.chatService.getChats().subscribe(chats => {
      this.chats = chats;
    });
  }
}
