import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs';

import { environment } from '../api_key';

@Injectable({
  providedIn: 'root'
})
export class WhisperapiService {
  constructor(private http: HttpClient) { }

  private apiKey: string | undefined;

  async convertSpeechToText(file: File): Promise<string> {
    const apiUrl = 'https://api.openai.com/v1/audio/transcriptions';
    const apiKey = environment.apiKey;

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${apiKey}`
    });

    const formData = new FormData();
    formData.append('model', 'whisper-1');
    formData.append('file', file);
    
    let recognizedText: string = 'basic';

    return this.http.post(apiUrl, formData, { headers: headers }).pipe(
      map((response: any) => {
        return response.text;
      })
    ).toPromise();

    // this.http.post(apiUrl, formData, { headers: headers }).subscribe(
    //   (response: any) => {
    //     /* console.log('API response:', response); */

    //     recognizedText = response.text;
    //     /* console.log(recognizedText); */
    //   },
    //   (error: any) => {
    //     console.error('API error:', error);
    //   }
    // );
  }

}
