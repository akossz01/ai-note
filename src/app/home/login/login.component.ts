import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 title = 'aiNotes';
 email!:string;
 password!:string;
 remail!:string;
 rpassword!:string;
 rcpassword!:string;
 disabled: boolean = false;

  constructor(private snackBar:MatSnackBar){

  }
  signup() {

  }
  login() {
    if(this.email=="notes@ai.com" && this.password=="notes"){
        this.snackBar.open('Login Successful','',{duration:1000})
    }else{
      this.snackBar.open('Login error','',{duration:1000})
    }
  }
}
