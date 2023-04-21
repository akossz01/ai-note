import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SpeechToTextComponent } from './speech-to-text/speech-to-text.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // for [(ngModel)]





import { ChatGptServiceComponent } from './services/chat-gpt-service/chat-gpt-service.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SpeechToTextComponent,
    ChatGptServiceComponent,
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
