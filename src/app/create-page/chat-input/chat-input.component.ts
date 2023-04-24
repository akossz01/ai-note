import { Component } from '@angular/core';
import { Configuration, OpenAIApi } from 'openai';
import { InputServiceService } from 'src/app/services/input-service.service';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent {
  protected inputValue: string = '';
  getResponsePressed: boolean = false;
  getImagePressed: boolean = false;

  constructor(private inputService: InputServiceService) {}

  getResponse(): void {
    if (this.getResponsePressed){
      this.inputService.getTextResponse(this.inputValue).subscribe(response => {
        console.log(response.choices[0].message.content);
      });
    }
    else{
      console.log("Getting response")
      this.inputService.getImageResponse(this.inputValue).subscribe(response => {
        console.log(response.data[0].url);
      });
    }
  }

  getText() {
    this.getResponsePressed = true;
    this.getImagePressed = false;
  }

  getImage() {
    this.getImagePressed = true;
    this.getResponsePressed = false;
  }

  getAnswerButtonStyle(): any {
    return {
      'background-color': this.getResponsePressed ? '#6c757d' : '#fff',
      'color': this.getResponsePressed ? '#fff' : '#6c757d'
    };
  }

  getImageButtonStyle(): any {
    return {
      'background-color': this.getImagePressed ? '#6c757d' : '#fff',
      'color': this.getImagePressed ? '#fff' : '#6c757d'
    };
  }
}
