import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title = 'aiNotes';
 email!:string;
 password!:string;
 remail!:string;
 rpassword!:string;
 rcpassword!:string;

  constructor(private snackBar:MatSnackBar){

  }
  register() {

  }
  login() {
    if(this.email=="notes@ai.com" && this.password=="notes"){
        this.snackBar.open('Login Successful','',{duration:1000})
    }else{
      this.snackBar.open('Login error','',{duration:1000})
    }
  }
}