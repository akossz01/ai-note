import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChatLogService } from '../services/chat-log.service';
import { PdfService } from '../services/pdf-service.service';
import * as Quill from 'quill';

@Component({
  selector: 'app-chat-log',
  templateUrl: './chat-log.component.html',
  styleUrls: ['./chat-log.component.css']
})
export class ChatLogComponent {
  editing1 = false;
  public chats: { input: string; output: string; isImage: boolean;}[] = [];
  selectedChat: { input: string; output: string; isImage: boolean; } | undefined;

  public editing: { input: string; output: string; isImage: boolean } | null = null;

  startEditing(chat: any) {
    this.editing = chat;
  }

  saveEditing() {
    this.editing = null;
  }

  editChat(chat: any) {
    this.editing = chat;
}

saveChat(chat: any) {
  chat.output = this.editing!.output;
  this.editing = null;
}

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
