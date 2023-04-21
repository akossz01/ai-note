import { Component } from '@angular/core';
import { Configuration, OpenAIApi } from 'openai';
import { InputServiceService } from 'src/app/services/input-service.service';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent {
  protected inputValue: string = ''

  constructor(private inputService: InputServiceService) {}

  getResponse(): void {
    this.inputService.getResponse(this.inputValue).subscribe(response => {
      console.log(response);
    });
  }
}
