import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService implements OnInit {


  constructor(private _httpClient: HttpClient) { }

  ngOnInit() {

  }

  showWeather(lat, long) {
    let myKey = 'get key from openweather';
    //ALWAYS use https before the api openweathermap address
    return this._httpClient.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=${myKey}`);
  }

  showImage(search) {
    let myKey = 'get key from pixabay';
    return this._httpClient.get(`https://pixabay.com/api/?key=${myKey}&q=${search}&image_type=photo`);
  }

  getTracksFromService(playlist) {
    let myKey = "get token from spotify";
    return this._httpClient.get(`https://api.spotify.com/v1/playlists/${playlist}/tracks`, { headers: { "Accept": "application/json", "Content-Type": "application/json", "Authorization": `Bearer ${myKey}` } });
  }
}