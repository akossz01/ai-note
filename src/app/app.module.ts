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
import { NewChatComponent } from './new-chat/new-chat.component';

import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { MyPagesComponent } from './my-pages/my-pages.component';
import { UserdocsComponent } from './contentPage/userdocs/userdocs.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SpeechDemoComponent,
    ChatInputComponent,
    ChatLogComponent,
    LoginComponent,
    SpeechDemoComponent,
    NewChatComponent,
    MyPagesComponent,
    UserdocsComponent,
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
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],

  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {

  
 }