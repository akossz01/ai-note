import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs';

import { environment } from 'apiKey';

@Injectable({
  providedIn: 'root'
})
export class WhisperapiService {
  constructor(private http: HttpClient) { }

  private apiKey: string | undefined;

  async convertSpeechToText(file: File): Promise<string> {
    const apiUrl = 'https://api.openai.com/v1/audio/transcriptions';
    const apiKey = environment.apiKey;

    /* - make a new Open AI key
    - save the key in an external file
    - put that file in .gitignore */
    
    const headers = new HttpHeaders({
      /* 'Content-Type': 'multipart/form-data', */
      'Authorization': `Bearer ${apiKey}`
    });

    const formData = new FormData();
    formData.append('model', 'whisper-1');
    formData.append('file', file);
    
    let recognizedText: string = 'basic';
    this.http.post(apiUrl, formData, { headers: headers }).subscribe(
      (response: any) => {
        console.log('API response:', response);

        /* const recognizedText = response.text; */
        recognizedText = response.text;
        console.log(recognizedText);
      
      },
      (error: any) => {
        console.error('API error:', error);
      }
    );
    return recognizedText;
  }

}
