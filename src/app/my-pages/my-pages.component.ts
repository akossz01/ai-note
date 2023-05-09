import { Component, Input, OnInit } from '@angular/core';
import { PageService } from '../services/page.service';

@Component({
  selector: 'app-my-pages',
  templateUrl: './my-pages.component.html',
  styleUrls: ['./my-pages.component.css']
})
export class MyPagesComponent implements OnInit{
  @Input() logs2: any[] | undefined;
  logs: { input: string; output: string; isImage: boolean; }[] = [];

  constructor(private pageService: PageService) { }

  ngOnInit(): void {
    this.pageService.getLogs().then(logs => {
      this.logs = logs;
    });
  }
}
