import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-spo';
  selectedSongs: Array<String> = [];
  selectEvent(uri: string) {
    if (this.selectedSongs.includes(uri)) {
      this.selectedSongs = this.selectedSongs.filter((el) => el !== uri);
    } else {
      this.selectedSongs = this.selectedSongs.concat([uri]);
    }
  }
}
