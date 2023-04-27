import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';




@Component({
  selector: 'app-chat-gpt-service',
  templateUrl: './chat-gpt-service.component.html',
  styleUrls: ['./chat-gpt-service.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class ChatGptServiceComponent {
  get(apiUrl: string) {
    throw new Error('Method not implemented.');
  }

  private apiUrl = 'https://api.openai.com/v1/engines/davinci/completions';

  constructor(private http:HttpClient){}

  completePrompt(prompt: string): Observable<any> {
    const headers = {
      'Content-Type': 'application/json',
      /*'Authorization':'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' // Înlocuiește API_KEY cu cheia ta de API de la OpenAI*/
      'Authorization': 'Bearer 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' // Înlocuiește API_KEY cu cheia ta de API de la OpenAI

    };

    const data = {
      'prompt': prompt,
      'max_tokens': 100, // numarul maxim de cuvinte generat la output
      'temperature': 0.2 // parametru de control pentru accuratetea raspunsului
    };

   /* return this.http.post<any>(this.apiUrl, data, { headers });*/

   return this.http.post<any>(this.apiUrl, data, {headers}) // cerere catre http ca prin intermediul API ChatGPt sa primimm raspuns
    .pipe(
      map(response => response.choices[0].text) // modul de afisare output, daca era simplu dadea [object][object]
    );
  }
}
