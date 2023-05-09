import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit{
  pages: { id: string, logs: any[] }[] = [];

  ngOnInit(): void {
    /* const pageCount = parseInt(localStorage.getItem('pageCount') || '0', 10);
  
    for (let i = 1; i <= pageCount; i++) {
      const key = `${i}`;
      const logs = JSON.parse(localStorage.getItem(key) || '[]');
  
      this.pages.push({ id: key, logs: logs });
    }

    console.log(this.pages); */
    const savedPages = JSON.parse(localStorage.getItem('savedPages') || '[]');

    this.pages = savedPages.map((page: { id: any; logs: any; }) => ({ id: page.id, logs: page.logs }));

    console.log(this.pages);
  }
}
