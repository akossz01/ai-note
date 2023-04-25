import { Injectable } from '@angular/core';

declare var webkitSpeechRecognition: any;
declare var SpeechRecognition: any;

@Injectable({
  providedIn: 'root'
})
export class SpeechRecognitionService {
  recognition: any;
  isStoppedSpeechRecog = false;
  public text = '';
  tempWords: string = '';

  constructor() { 
    this.recognition = new (webkitSpeechRecognition || SpeechRecognition)();
    this.init();
  }

  init() {
    this.recognition.interimResults = true;
    // Set this to hu or ro for some more smecherie
    this.recognition.lang = 'en-US';

    this.recognition.addEventListener('result', (e: any) => {
      const transcript = Array.from(e.results)
        .map((result:any) => result[0])
        .map((result:any) => result.transcript)
        .join('');
      this.tempWords = transcript;
      console.log(transcript);
    });
  }

  start() {
    // Clears the input if you restart the recording
    // Delete this line if you want to keep adding prompts
    this.text = '';

    this.isStoppedSpeechRecog = false;
    this.recognition.start();
    console.log("Speech recognition started")
    this.recognition.addEventListener('end', () => {
      if (this.isStoppedSpeechRecog) {
        this.recognition.stop();
        console.log("End speech recognition")
      } else {
        this.wordConcat()
        this.recognition.start();
      }
    });
  }
  stop() {
    this.isStoppedSpeechRecog = true;
    this.wordConcat()
    this.recognition.stop();
    console.log("End speech recognition")
  }

  wordConcat() {
    this.text = this.text + ' ' + this.tempWords;
    this.tempWords = '';
  }
}

// All recognized words first go in the 'tempWords' variable
// they only get added to the main text after