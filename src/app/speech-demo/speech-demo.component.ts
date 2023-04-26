import { Component } from '@angular/core';
import { AudioRecordService, RecordedAudioOutput } from '../services/audio-record.service';
import { WhisperapiService } from '../services/whisperapi.service';
import { FileSaverService } from 'ngx-filesaver';

// Bugs to fix:
// On 2nd record attempt, stop button doesnt work
// On 1st try it works flawlessly
// Saved wav file has no length

@Component({
  selector: 'app-speech-demo',
  templateUrl: './speech-demo.component.html',
  styleUrls: ['./speech-demo.component.css']
})
export class SpeechDemoComponent {
  constructor(private whisper: WhisperapiService, private audioRecordService: AudioRecordService, private fileSaverService: FileSaverService) { }

  onStartRecording() {
    this.audioRecordService.startRecording();
  }

  onStopRecording() {
    this.audioRecordService.stopRecording();
    this.audioRecordService.getRecordedBlob().subscribe((audioOutput: RecordedAudioOutput) => {
      const blob = audioOutput.blob;
      const title = audioOutput.title;
      const file = new File([blob], title, { type: "audio/mp3" });

      this.fileSaverService.save(blob, title);
      this.whisper.convertSpeechToText(file);
    });
  }
}
