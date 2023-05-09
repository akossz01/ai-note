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
  editing = false;
  public chats: { input: string; output: string; isImage: boolean;}[] = [];
  selectedChat: { input: string; output: string; isImage: boolean; } | undefined;

  public editingChat: any = null;

  startEditing(chat: any) {
    this.editingChat = chat;
  }

  saveEditing() {
    this.editingChat = null;
  }

  editChat(chat: any) {
    this.editing = true;
}

saveChat(chat: any) {
  this.editing = false;
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
