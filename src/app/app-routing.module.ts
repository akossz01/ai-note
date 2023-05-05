import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './home/login/login.component';
import { UserdocsComponent } from './contentPage/userdocs/userdocs.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'content', component: UserdocsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
