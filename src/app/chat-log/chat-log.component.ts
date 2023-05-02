import { Component } from '@angular/core';
import { ChatLogService } from '../services/chat-log.service';

@Component({
  selector: 'app-chat-log',
  templateUrl: './chat-log.component.html',
  styleUrls: ['./chat-log.component.css']
})
export class ChatLogComponent {
  public chats: { input: string; output: string; isImage: boolean;}[] = [];

  constructor(private chatService: ChatLogService) { }

  ngOnInit(): void {
    this.chatService.getChats().subscribe(chats => {
      this.chats = chats;
    });
  }
}
