import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'any',
})
export class ConfigService {
  url: string = 'https://api.nbp.pl/api/exchangerates/tables/A/?format=json';
  constructor(private http: HttpClient) { }

  serviceApi() {
    return this.http.get(this.url);
  }

}