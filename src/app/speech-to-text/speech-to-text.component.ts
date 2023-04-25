import { Component, OnInit, Renderer2, ElementRef, Output } from '@angular/core';
import { SpeechRecognitionService } from '../services/speech-recognition.service'
import { ChatGptServiceComponent } from '../services/chat-gpt-service/chat-gpt-service.component';
import { HttpClient } from '@angular/common/http';

/*
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
*/

import * as sharp from 'sharp'; 
import { ImageCroppedEvent } from 'ngx-image-cropper';


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
  imageUrl: string = ''; // URL-ul imaginii generate
  showImage: boolean = false;
  imageCropper: any;

  
 

  onSubmit(){
    this.chatGptService.completePrompt(this.response).subscribe(
      response => {
        this.output = response;

        /*this.generateImage(); // Apelăm funcția de generare a imaginii după ce primim răspunsul de la ChatGptServiceComponent */
      
      },
      error => {
        console.error('Error at ChatGPT respone', error);
      }
      
    );
  }

  generateImage() {
    // Facem o cerere către Google Images API pentru a căuta imagini relevante pe baza descrierii întrebării
    this.http
      .get('https://www.googleapis.com/customsearch/v1', {
        params: {
          q: this.output, // Descrierea întrebării
          cx: 'e55ce67c8bedd4b8b', // ID-ul motorului de căutare personalizat Google
          key: 'AIzaSyAqALx2qpgICxDvjKBVgZqyURqfMS2Auk8', // Cheia API de la Google
          searchType: 'image', // Specificăm că vrem rezultate doar de tip imagine
        },
      })
      .subscribe(
        (response: any) => {
          // Procesăm răspunsul API-ului
          if (response.items && response.items.length > 0) {
            // Verificăm dacă există imagini în răspuns
            this.imageUrl = response.items[0].link; // Salvăm URL-ul primei imagini în variabila de instanță imageUrl
            this.showImage = true;

            
            const img = new Image();
            img.onload = () => {
              // Cream un canvas pentru a desena imaginea redimensionată
              const canvas = document.createElement('canvas');
              const ctx = canvas.getContext('2d');

              // Setăm dimensiunile canvasului la 500x500
              if (ctx != null){
              canvas.width = 500;
              canvas.height = 500;

              // Desenăm imaginea redimensionată pe canvas
              ctx.drawImage(img, 0, 0, 500, 500);

              // Convertim canvasul într-un URL de imagine și îl asignăm în variabila de instanță imageUrl
              this.imageUrl = canvas.toDataURL('image/jpeg');
              this.showImage = true;
              }
            };
            img.src = this.imageUrl; 






          } else {
            this.imageUrl = ''; // Dacă nu există imagini, resetăm URL-ul imaginii
            this.showImage = true;
          }
        },
        (error) => {
          console.error('Error at Google Images API', error);
        }

        
      );
      
  }
  



  onInputChange(event: any){

    this.response = event.target.value;

  }

  //---------Output

  constructor(public service : SpeechRecognitionService, private renderer: Renderer2, private el: ElementRef,  private chatGptService: ChatGptServiceComponent,
    private http: HttpClient) { 
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
