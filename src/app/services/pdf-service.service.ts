import { Injectable } from '@angular/core';
import { ElementRef } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  constructor() {}

  async generatePdf(content: ElementRef) {
    const canvas = await html2canvas(content.nativeElement);
    const imageData = canvas.toDataURL('image/png');

    const doc = new jsPDF();
    doc.addImage(imageData, 'PNG', -90, 10, 380, 0);
    doc.save('test.pdf');
  }
}