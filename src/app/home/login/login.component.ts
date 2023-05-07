import { Component, EventEmitter, Output } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 title = 'aiNotes';
 email:string = "";
 password:string = "";
 remail:string = "";
 rpassword:string = "";
 rcpassword:string = "";
 checkbox: boolean = false;
 regex: string = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
 emailError: boolean = false;
 sameError: boolean = false;
 lengthError: boolean = false;
 checkError: boolean = false;

 @Output() onLogin = new EventEmitter();

  constructor(private snackBar:MatSnackBar, private auth: AuthService, private router: Router){

  }
  signup() {
    if(!this.remail.match(this.regex)) this.emailError = true;
    if(this.rpassword.length < 5) this.lengthError = true;
    if(this.rcpassword.length < 5) this.lengthError = true;
    if(this.rpassword.length != this.rcpassword.length) this.sameError = true;
    if(this.checkbox == false) this.checkError = true;
 
    if(this.remail.match(this.regex) && this.rpassword.length > 5 && 
      this.rcpassword.length > 5 &&
      this.rpassword.length == this.rcpassword.length &&
      this.checkbox == true)
      {
        this.snackBar.open('SignUp Successful','',{duration:1000})
      }
      /*else{
        this.snackBar.open('SignUp error','',{duration:1000})
      }*/

  }

  login() {
    this.auth.login(this.email, this.password).subscribe(() => {
      this.router.navigate(['/new-chat']);
    });
    
  }
}
