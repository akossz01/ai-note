import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Home/header/header.component';
import { LoginComponent } from './User/login/login.component';
import { RegisterComponent } from './User/register/register.component';
import { AboutComponent } from './Information/about/about.component';
import { PrivacyComponent } from './Information/privacy/privacy.component';
import { CreateContentComponent } from './NoteAicontent/create-content/create-content.component';
import { SavedContentComponent } from './NoteAicontent/saved-content/saved-content.component';
import { FirstServiceComponent } from './Services/first-service/first-service.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    PrivacyComponent,
    CreateContentComponent,
    SavedContentComponent,
    FirstServiceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
