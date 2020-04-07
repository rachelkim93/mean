import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }

  getWeather(city: string){
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=`);
  }
}