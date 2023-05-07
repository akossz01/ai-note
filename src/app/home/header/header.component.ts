import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Renderer2, ElementRef } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  showMenu: boolean = false;

  constructor(private router: Router, private renderer: Renderer2, private el: ElementRef, private auth: AuthService) {

  }

  public returnHome() {
    this.router.navigate(['/']);
  }

  public hamburgerOpenClose() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuBtn = document.getElementById('menu-btn');

    if(!this.showMenu) { // If the menu is hidden
      this.renderer.setStyle(mobileMenu, 'display', 'block');
      setTimeout(() => {
        this.renderer.addClass(mobileMenu, 'fade-in');
      }, 10);
      this.renderer.removeClass(mobileMenu, 'fade-out');

      // Change Icon To X
      this.renderer.addClass(menuBtn, 'open');
      console.log('added open');
    } else {
      setTimeout(() => {
        this.renderer.removeClass(mobileMenu, 'fade-in');
      }, 10);
      this.renderer.addClass(mobileMenu, 'fade-out');
      setTimeout(() => {
        this.renderer.setStyle(mobileMenu, 'display', 'none');
      }, 300);

      // Change Icon To Bars
      // Renderer2 manipulations are async
      // Must use timeout
      setTimeout(() => {
        this.renderer.removeClass(menuBtn, 'open');
      }, 10);
      console.log('removed open');
    }

    this.showMenu = !this.showMenu;
  }

  ngAfterViewInit() {
    const menuBtn = document.getElementById('menu-btn');
    
    this.renderer.listen(menuBtn, 'click', () => {
      this.renderer.addClass(menuBtn, 'open');
    });
  }

  signout() {
    window.location.reload();
    this.auth.logout();
  }
  
  logCheck() {
    if (localStorage.getItem('loggedIn')) {
      return true;
    }
    return false;
  }
}
