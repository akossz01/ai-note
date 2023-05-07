import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  signUpForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  }, {validators: passwordsMatchValidator()});
  
  ngOnInit(): void {
    
  }

  title = 'aiNotes';
  /* email:string = "";
  password:string = ""; */
  /* remail:string = "";
  rpassword:string = "";
  rcpassword:string = ""; */
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
    /* if(!this.remail.match(this.regex)) this.emailError = true;
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

    const { name, email, password } = this.signUpForm.value;
    this.auth.signUp(name!, email!, password!).subscribe(() => {
      this.snackBar.open('Sign Up Successful','',{duration:1000});
      this.auth.setLoginTrue();
      this.router.navigate(['/new-chat']);
    })
  }

  login() {
    const {email, password} = this.loginForm.value;
    console.log(email + ' ' + password);
    
    this.auth.login(email!, password!).subscribe(() => {
      this.snackBar.open('Login Successful','',{duration:1000});
      this.auth.setLoginTrue();;
      this.router.navigate(['/new-chat']);
    });
    
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get confirmPassowrd() {
    return this.signUpForm.get('confirmPassword');
  }
}

export function passwordsMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      return {
        passwordsDontMatch: true
      }
    }

    return null;
  };
}