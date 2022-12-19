import { Component, OnInit } from '@angular/core';
import { RecordService } from '../record.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css'],
  providers: [RecordService],
})
export class RecordComponent implements OnInit {
  servuce: any;
  constructor(public service: RecordService) {
    this.service.init();
  }

  ngOnInit(): void {}

  // voice
  startService() {
    this.service.start();

    console.log(this.service.text);
  }

  stopService() {
    this.service.stop();
    console.log(this.service.wordConcat());
  }
}
