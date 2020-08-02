import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService implements OnInit {

  constructor(private _httpClient: HttpClient) { }

  ngOnInit() {

  }

  getWeather(city, state) {
    let myKey = 'get my key from openweathermap';
    return this._httpClient.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${myKey}`)
    // return this._httpClient.get(`/location/${location}`);
  }
}