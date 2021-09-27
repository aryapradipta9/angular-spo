import { Component } from '@angular/core';
import data from './all-sample';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tracksData = data;
  title = 'angular-spo';
  selectedSongs: Array<String> = [];
  selectEvent(uri: string) {
    if (this.selectedSongs.includes(uri)) {
      this.selectedSongs = this.selectedSongs.filter((el) => el !== uri);
    } else {
      this.selectedSongs = this.selectedSongs.concat([uri]);
    }
    console.log(this.selectedSongs);
  }
}
