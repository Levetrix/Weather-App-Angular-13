import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
// Material - START
import { MatRadioModule } from '@angular/material/radio';
// Material - END
import { AppComponent } from './app.component';
import { AppHomeComponent } from './components/home/home.component';
import { AppForecastComponent } from './components/forecast/forecast.component';
import { AppCurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { AppWeatherService } from './services/weather/weather.service';
import { AppWeatherApiService } from './services/api/weather-api.service';
import { AppLocationApiService } from './services/api/location-api.service';

const routes: Routes = [
  {
    path: '**',
    component: AppHomeComponent,
  },
  {
    path: 'home',
    component: AppHomeComponent,
  },
  {
    path: '',
    component: AppHomeComponent,
  },
  {
    path: 'location/:id',
    component: AppHomeComponent,
  },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatRadioModule,
    RouterModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [
    AppComponent,
    AppHomeComponent,
    AppForecastComponent,
    AppCurrentWeatherComponent,
  ],
  providers: [AppWeatherService, AppWeatherApiService, AppLocationApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
