import { Component } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  isLoggedIn = false;

  
  login() {
    this.isLoggedIn = true;
  }
  
}