import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class InputServiceService {
  apiTextURL: string = 'https://api.openai.com/v1/chat/completions';
  apiImageURL: string = 'https://api.openai.com/v1/images/generations';

  constructor(private http:HttpClient) { }

  getTextResponse(input: string): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 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'
    });

    const data = {
      'model': 'gpt-3.5-turbo',
      'messages': [{'role': 'user', 'content': input}],
      'max_tokens': 100,
      'temperature': 0.3
    };

    return this.http.post(this.apiTextURL, data, {headers});
  }

  getImageResponse(input: string): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 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'
    });

    const data = {
      "prompt": input,
      "n": 1,
      "size": "1024x1024"
    };

    return this.http.post(this.apiImageURL, data, {headers});
  }
}
