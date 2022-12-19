import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
declare var webkitSpeechRecognition: any;
@Injectable({
  providedIn: 'root',
})
export class RecordService {
  recognition = new webkitSpeechRecognition();

  isStoppedSpeechRecog = false;
  public text: string = '';
  tempWords: any;

  constructor(private router: Router) {}

  init() {
    this.recognition.interimResults = true;
    this.recognition.lang = 'en-US';

    this.recognition.addEventListener('result', (e: any) => {
      const transcript = Array.from(e.results)
        .map((result: any) => result[0])
        .map((result) => result.transcript)
        .join('');
      this.tempWords = transcript;
      console.log(transcript);
      if (transcript == 'meow') {
        this.recognition.stop();
        console.log('End speech recognition');
        this.router.navigate(['/login']);
      }
    });
  }

  start() {
    this.isStoppedSpeechRecog = false;
    this.recognition.start();
    console.log('Speech recognition started');
    console.log(this.tempWords);
    this.recognition.addEventListener('end', (condition: any) => {
      if (this.isStoppedSpeechRecog) {
        this.recognition.stop();
        console.log('End speech recognition');
      } else {
        this.wordConcat();
        this.recognition.start();
      }
    });
  }
  stop() {
    this.isStoppedSpeechRecog = true;
    this.wordConcat();
    this.recognition.stop();
    console.log('End speech recognition');
  }

  wordConcat() {
    this.text = this.text + ' ' + this.tempWords + '.';
    this.tempWords = '';

    console.log(this.text.length);
  }
}
