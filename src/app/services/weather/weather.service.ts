import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AppWeatherApiService } from '../api/weather-api.service';
import { AppLocationApiService } from '../api/location-api.service';

@Injectable({
  providedIn: 'root',
})
export class AppWeatherService {
  constructor(
    private weatherApiService: AppWeatherApiService,
    private locationApiService: AppLocationApiService
  ) {}

  public getCurrentWeather(location: string): Observable<string> {
    return this.locationApiService.getLocationKey(location).pipe(
      mergeMap((locationKey) => {
        return this.weatherApiService.getCurrentConditions(location);
      })
    );
  }
}
