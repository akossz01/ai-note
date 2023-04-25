import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WhisperapiService {
  constructor(private http: HttpClient) { }

  async convertSpeechToText(file: File): Promise<void> {
    const apiUrl = 'https://api.openai.com/v1/audio/transcriptions';
    const apiKey = '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';
    const headers = new HttpHeaders({
      /* 'Content-Type': 'multipart/form-data', */
      'Authorization': `Bearer ${apiKey}`
    });

    const formData = new FormData();
    formData.append('model', 'whisper-1');
    formData.append('file', file);

    this.http.post(apiUrl, formData, { headers: headers }).subscribe(
      (response: any) => {
        console.log('API response:', response);
        const recognizedText = response[0]?.text;
        console.log(recognizedText);
      },
      (error: any) => {
        console.error('API error:', error);
      }
    );
  }

}
