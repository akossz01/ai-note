import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class InputServiceService {
  apiURL: string = 'https://api.openai.com/v1/engines/davinci/completions';

  constructor(private http:HttpClient) { }

  getResponse(input: string): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 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'
    });

    const data = {
      'prompt': input,
      'max_tokens': 100,
      'temperature': 0.3
    };

    return this.http.post(this.apiURL, data, {headers});
  }
}
