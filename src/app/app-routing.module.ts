import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo, AuthGuard} from '@angular/fire/auth-guard'
import { LoginComponent } from './home/login/login.component';
import { NewChatComponent } from './new-chat/new-chat.component';

const redirectToLogin = () => redirectUnauthorizedTo(['login']);
const redirectToHome = () => redirectLoggedInTo(['new-chat']);

const routes: Routes = [
  {path: 'new-chat', component: NewChatComponent},
  {path: 'login', component: LoginComponent/* , ...canActivate(redirectToHome) */},
  {path: '', component: NewChatComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
