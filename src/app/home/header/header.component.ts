import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showMenu = false;

  constructor(private router: Router, private renderer: Renderer2, private el: ElementRef) {

  }

  public returnHome() {
    this.router.navigate(['/']);
  }

  public hamburgerOpenClose() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuBtn = document.getElementById('menu-btn');

    if(!this.showMenu) { // If the menu is hidden
      this.renderer.setStyle(mobileMenu, 'display', 'block');
      this.renderer.setStyle(mobileMenu, 'animation', 'slideInFromTop 0.5s ease'); // Add slide-in animation

      // Change Icon To X
      this.renderer.listen(menuBtn, 'click', () => {
        this.renderer.addClass(menuBtn, 'open');
      });
    } else {
      this.renderer.setStyle(mobileMenu, 'animation', 'slideOutToTop 0.5s ease'); // Add slide-out animation
      
      this.renderer.setStyle(mobileMenu, 'display', 'none');

      // Change Icon To Bars
      this.renderer.listen(menuBtn, 'click', () => {
        this.renderer.removeClass(menuBtn, 'open');
      });
    }

    this.showMenu = !this.showMenu;
  }

  ngAfterViewInit() {
    const menuBtn = document.getElementById('menu-btn');
    
    this.renderer.listen(menuBtn, 'click', () => {
      this.renderer.addClass(menuBtn, 'open');
    });
  }
  
}
