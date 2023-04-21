import { Component, OnInit, Renderer2, ElementRef, Output } from '@angular/core';
import { SpeechRecognitionService } from '../services/speech-recognition.service'
import { ChatGptServiceComponent } from '../services/chat-gpt-service/chat-gpt-service.component';

/*
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
*/





@Component({
  selector: 'app-speech-to-text',
  templateUrl: './speech-to-text.component.html',
  styleUrls: ['./speech-to-text.component.css'],

  providers: [SpeechRecognitionService,
  
  ]
})
export class SpeechToTextComponent implements OnInit{

  //------------ Output
  public response: string =''; // Inputul utilizatorului
  output: string ='';

  onSubmit(){
    this.chatGptService.completePrompt(this.response).subscribe(
      response => {
        this.output = response;
       /* this.output = response.choices[0]?.text || '';*/
      },
      error => {
        console.error('Error at ChatGPT respone', error);
      }
      
    );
  }

  onInputChange(event: any){

    this.response = event.target.value;

  }

  //---------Output

  constructor(public service : SpeechRecognitionService, private renderer: Renderer2, private el: ElementRef,  private chatGptService: ChatGptServiceComponent) { 
    this.service.init()
  }
  

  ngOnInit(): void {
    /*
    this.response = 'Initial value';
    */
  }

  startService() {
    this.service.start()
  }

  stopService() {
    this.service.stop()
  }

  private rec: boolean = false;
  public onMicClick() {
    const micBtn = document.getElementById('mic-btn');

    if (!this.rec) {
      this.startService();
      
      // Adds rec animation
      this.renderer.addClass(micBtn, 'pulse-animation');

      // Stop the service after 5 seconds\
      setTimeout(() => {
        this.stopService();
        this.renderer.removeClass(micBtn, 'pulse-animation');
      }, 5000);
    } else {
      this.stopService();
      
      // Removes rec animation
      this.renderer.removeClass(micBtn, 'pulse-animation');
    }

    this.rec = !this.rec;
  }
}
