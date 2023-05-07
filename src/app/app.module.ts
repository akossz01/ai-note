import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LoginComponent } from './home/login/login.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';

import { HeaderComponent } from './home/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SpeechDemoComponent } from './speech-demo/speech-demo.component';
import { ChatInputComponent } from './create-page/chat-input/chat-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatLogComponent } from './chat-log/chat-log.component';
import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SpeechDemoComponent,
    ChatInputComponent,
    ChatLogComponent,
    LoginComponent,
    SpeechDemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatBottomSheetModule,
    HttpClientModule,
    QuillModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  
 }