import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SpeechDemoComponent } from './speech-demo/speech-demo.component';
import { ChatInputComponent } from './create-page/chat-input/chat-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatLogComponent } from './chat-log/chat-log.component';
import { UserdocsComponent } from './contentPage/userdocs/userdocs.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SpeechDemoComponent,
    ChatInputComponent,
    ChatLogComponent,
    UserdocsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
