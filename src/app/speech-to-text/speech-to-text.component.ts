import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { SpeechRecognitionService } from '../services/speech-recognition.service'

@Component({
  selector: 'app-speech-to-text',
  templateUrl: './speech-to-text.component.html',
  styleUrls: ['./speech-to-text.component.css'],

  providers: [SpeechRecognitionService]
})
export class SpeechToTextComponent{
  constructor(public service : SpeechRecognitionService, private renderer: Renderer2, private el: ElementRef) { 
    this.service.init()
  }

  ngOnInit(): void {
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
      /* document.getElementById('myButton').classList.add('pulse-animation'); */
      this.renderer.addClass(micBtn, 'pulse-animation');
    } else {
      this.stopService();
      /* document.getElementById('myButton').classList.remove('pulse-animation'); */
      this.renderer.removeClass(micBtn, 'pulse-animation');
    }

    this.rec = !this.rec;
  }
}
