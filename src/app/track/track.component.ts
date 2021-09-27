import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import data from '../single-sample';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css'],
})
export class TrackComponent implements OnInit {
  data = data;
  selected = false;
  @Output() selectEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  handleClick() {
    this.selectEvent.emit(data.uri);
    this.selected = !this.selected;
  }
}
