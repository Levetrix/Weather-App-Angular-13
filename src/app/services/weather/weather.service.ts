import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AppWeatherApiService } from '../api/weather-api.service';

@Injectable({
  providedIn: 'root',
})
export class AppWeatherService {
  constructor(private weatherApiService: AppWeatherApiService) {}

  public getCurrentWeather(location: string): Observable<string> {
    return this.weatherApiService.getCurrentConditions(location);
  }
}
