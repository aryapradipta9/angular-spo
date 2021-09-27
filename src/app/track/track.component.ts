import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css'],
})
export class TrackComponent implements OnInit {
  @Input() data: any = {};
  selected = false;
  @Output() selectEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  handleClick() {
    console.log(this.data.uri);
    this.selectEvent.emit(this.data.uri);
    this.selected = !this.selected;
  }
}
