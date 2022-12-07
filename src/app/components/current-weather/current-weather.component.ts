import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-current-weather',
  template: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
})
export class AppCurrentWeatherComponent {
  @Input() currentWeather: string;

  constructor() {}
}
