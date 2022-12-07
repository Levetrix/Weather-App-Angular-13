import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppWeatherService } from '../../services/weather/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class AppHomeComponent {
  private currentLocation = 'Philidelphia';

  public currentWeather$: Observable<string> =
    this.weatherService.getCurrentWeather(this.currentLocation);

  constructor(private weatherService: AppWeatherService) {}
}
