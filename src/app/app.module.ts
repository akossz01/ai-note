import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SpeechToTextComponent } from './speech-to-text/speech-to-text.component';
import { SpeechDemoComponent } from './speech-demo/speech-demo.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SpeechToTextComponent,
    SpeechDemoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
