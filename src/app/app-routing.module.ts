import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './home/login/login.component';
import { SpeechToTextComponent } from './speech-to-text/speech-to-text.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'create-page', component: SpeechToTextComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
