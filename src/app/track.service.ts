import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  }),
};

@Injectable()
export class TrackService {
  heroesUrl = 'https://api.spotify.com/v1/search';

  constructor(private http: HttpClient) {}

  getTracks(query: string): Observable<any> {
    const params = {
      params: new HttpParams()
        .set('q', query)
        .set('type', 'track')
        .set('market', 'id'),
    };
    const options = { ...httpOptions, ...params };

    return this.http.get<any>(this.heroesUrl, options);
  }
}
