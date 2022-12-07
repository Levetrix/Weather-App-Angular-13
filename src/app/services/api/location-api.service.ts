import { Injectable } from '@angular/core';
import { Observable, of, map, catchError, pipe } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface SearchTextResponse {
  WeatherText: string;
}

@Injectable({
  providedIn: 'root',
})
export class AppLocationApiService {
  private apiKey = 'oLaMZLqCBYA2lBXCgtBTSYiblPdfJFGX';

  constructor(private http: HttpClient) {}

  public getLocationKey(location: string): Observable<string> {
    const baseUrl = 'http://dataservice.accuweather.com/locations/v1/search';

    const requestUrl = baseUrl + '?q=' + location + '&apikey=' + this.apiKey;

    return this.http.get<SearchTextResponse>(baseUrl).pipe(
      map((res) => res?.WeatherText as string),
      catchError((err) => {
        console.log(err);
        return '';
      })
    );
  }
}
