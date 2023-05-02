import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AudioRecordService {
  private mediaRecorder: MediaRecorder | any;
  private recordedChunks: Blob[] = [];
  private recordingStarted = false;
  private recordingStopped = false;
  private recordingStream: MediaStream | any;
  private audioOutputSubject = new Subject<RecordedAudioOutput>();

  startRecording() {
    if (this.recordingStarted) {
      console.error('Recording already in progress.');
      return;
    }
    // Request access to the user's microphone
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        this.recordingStream = stream;
        this.mediaRecorder = new MediaRecorder(stream);
        this.mediaRecorder.start();
        this.recordingStarted = true;

        this.mediaRecorder.addEventListener('dataavailable', (event: BlobEvent) => {
          if (event.data.size > 0) {
            // Append the recorded audio data to the recordedChunks array
            this.recordedChunks.push(event.data);
          }
        });

        this.mediaRecorder.addEventListener('stop', () => {
          // Create a Blob from the recorded audio data
          const blob = new Blob(this.recordedChunks, { type: 'audio/mp3' });
          const title = `recorded_${new Date().getTime()}.mp3`;
          const audioOutput: RecordedAudioOutput = {
            blob: blob,
            title: title
          };
          this.audioOutputSubject.next(audioOutput);
          this.recordedChunks = [];
          this.recordingStarted = false;
          this.recordingStopped = true;
          // Stop all tracks in the recording stream
          this.recordingStream.getTracks().forEach((track: { stop: () => any; }) => track.stop());
        });
      })
      .catch(err => {
        console.error('Failed to access microphone:', err);
      });
  }

  stopRecording() {
    if (this.recordingStarted && !this.recordingStopped) {
      this.mediaRecorder.stop();
    }
    this.recordingStopped = !this.recordingStopped;
  }

  getRecordedBlob(): Observable<RecordedAudioOutput> {
    return this.audioOutputSubject.asObservable();
  }
}

export interface RecordedAudioOutput {
  blob: Blob;
  title: string;
}

