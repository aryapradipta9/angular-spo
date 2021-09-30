import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { environment } from 'src/environments/environment';
import data from './all-sample';
import { TrackService } from './track.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [TrackService],
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tracksData = data;
  title = 'angular-spo';
  selectedSongs: Array<String> = [];
  queryString = new FormControl('');

  constructor(private trackService: TrackService) {}

  redirectURL() {
    const url = new URL('https://accounts.spotify.com/authorize');
    url.searchParams.set('client_id', environment.spotifyApiKey);
    url.searchParams.set('response_type', 'token');
    url.searchParams.set('scope', 'playlist-modify-private');
    url.searchParams.set('redirect_uri', 'http://localhost:4200/');
    return url.toString();
  }

  search() {
    this.trackService
      .getTracks(this.queryString.value)
      .subscribe((resp) => (this.tracksData = resp.tracks.items));
  }

  selectEvent(uri: string) {
    if (this.selectedSongs.includes(uri)) {
      this.selectedSongs = this.selectedSongs.filter((el) => el !== uri);
    } else {
      this.selectedSongs = this.selectedSongs.concat([uri]);
    }
    console.log(this.selectedSongs);
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    const parsedHash = new URLSearchParams(window.location.hash.substr(1));
    if (parsedHash.has('access_token')) {
      const accessToken: string = parsedHash.get('access_token') || '';
      console.log(accessToken);
      localStorage.setItem('token', accessToken);
    }
  }
}
