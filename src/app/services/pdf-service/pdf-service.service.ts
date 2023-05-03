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
    doc.addImage(imageData, 'PNG', 10, 10, 190, 0);
    doc.save('test.pdf');
  }
}

/*
  import { Injectable } from '@angular/core';
import { ElementRef } from '@angular/core';
import * as htmlToImage from 'html-to-image';
import jsPDF from 'jspdf';

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  constructor() {}

  async generatePdf(content: ElementRef) {
    const node = content.nativeElement;

    // Capture the content of the div as an image
    const contentImagePromise = htmlToImage.toPng(node);

    // Capture the text area as an image
    const textarea = node.querySelector('.textBoxResponse textarea');
    const textareaImagePromise = htmlToImage.toPng(textarea);

    // Wait for both promises to resolve
    const [contentImage, textareaImage] = await Promise.all([contentImagePromise, textareaImagePromise]);

    // Create a new PDF document
    const doc = new jsPDF();

    // Add the content image to the document
    doc.addImage(contentImage, 'PNG', 10, 10, 190, 0);

    // Add the textarea image to the document
    doc.addImage(textareaImage, 'PNG', 10, 100, 190, 0);

    // Save the document
    doc.save('test.pdf');
  }
}
*/
