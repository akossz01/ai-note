import { Component, Renderer2, OnInit, ElementRef } from '@angular/core';
import { AudioRecordService, RecordedAudioOutput } from '../services/audio-record.service';
import { WhisperapiService } from '../services/whisperapi.service';
import { FileSaverService } from 'ngx-filesaver';
import { ChatGptServiceComponent } from '../services/chat-gpt-service/chat-gpt-service.component';

// Bugs to fix:
// Saved wav file has no length - WhisperAPI works nonetheless
// After every reply (Excluding the first), you get more replis (n+2)??
// Speech Demo (THIS) was debugged, it's fine. The problem is somewhere else 

@Component({
  selector: 'app-speech-demo',
  templateUrl: './speech-demo.component.html',
  styleUrls: ['./speech-demo.component.css']
})
export class SpeechDemoComponent {
  constructor(private chatgpt: ChatGptServiceComponent, private whisper: WhisperapiService, private audioRecordService: AudioRecordService, private fileSaverService: FileSaverService, private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  private rec: boolean = false;
  onMicClick() {
    const micBtn = document.getElementById('mic-btn');

    if (!this.rec) {
      this.onStartRecording();
      
      // Adds rec animation
      this.renderer.addClass(micBtn, 'pulse-animation');
    } else {
      this.onStopRecording();
      
      // Removes rec animation
      this.renderer.removeClass(micBtn, 'pulse-animation');
    }

    this.rec = !this.rec;
  }

  onStartRecording() {
    this.audioRecordService.startRecording();
  }

  onStopRecording() {
    this.audioRecordService.stopRecording();
    this.audioRecordService.getRecordedBlob().subscribe(async (audioOutput: RecordedAudioOutput) => {
      const blob = audioOutput.blob;
      const title = audioOutput.title;
      const file = new File([blob], title, { type: "audio/mp3" });

      // Saves the file for the user
      /* this.fileSaverService.save(blob, title); */

      // Calling the conversion function from the service
      /* const reply = await this.whisper.convertSpeechToText(file);
      console.log(reply); */

      /* this.chatgpt.completePrompt(await this.whisper.convertSpeechToText(file)).subscribe(response => {
        console.log(response);
      }); */

      this.whisper.convertSpeechToText(file).then(prompt => {
        console.log('User prompt:', prompt);
      
        this.chatgpt.completePrompt(prompt).subscribe(response => {
          console.log('ChatGPT response:', response);
        });
      });



      /* this.whisper.convertSpeechToText(file); */
      
    });
  }
}
