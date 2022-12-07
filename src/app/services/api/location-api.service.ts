import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppWeatherApiService {
  private apiKey = 'oLaMZLqCBYA2lBXCgtBTSYiblPdfJFGX';

  constructor(private http: HttpClient) {}
}
