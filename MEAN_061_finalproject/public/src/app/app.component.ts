import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { toBase64String } from '@angular/compiler/src/output/source_map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'public';
  location: any;
  image: any;
  avatar: String;
  playlist: any;

  posLongitude = 0;
  posLatitude = 0;
  errors = [];

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getWeather();
  }

  getWeatherFromService(lat, long) {
    let observable = this._httpService.showWeather(lat, long);
    observable.subscribe(data => {
      this.location = data;
      this.getImageFromService(this.location.weather[0].main);
      this.getAvatarFromService();
      this.getPlaylist(this.location.weather[0].main);
    })
  }

  cb = (position: Position) => {
    this.posLatitude = position.coords.latitude;
    this.posLongitude = position.coords.longitude;
    this.getWeatherFromService(this.posLatitude, this.posLongitude)
  }

  getWeather() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.cb);
    } else {
      console.log("ERROR")
      this.errors.push("Geolocation is not supported by this browser.");
    }
  }

  getImageFromService(search) {
    let observable = this._httpService.showImage(this.replaceSpaces(search, "+"));
    observable.subscribe(data => {
      //@ts-ignore
      this.image = data.hits[Math.floor(Math.random() * data.hits.length)].largeImageURL;
    })
  }

  getAvatarFromService() {
    let search: String;

    if (this.location.main.temp > 70) {
      search = "cold+beverage";
    } else {
      search = "hot+beverage";
    }

    let observable = this._httpService.showImage(this.replaceSpaces(search, "+"));
    observable.subscribe(data => {
      //@ts-ignore
      this.avatar = data.hits[Math.floor(Math.random() * data.hits.length)].largeImageURL;
    })
  }

  replaceSpaces(aString, aChar): String {
    let bString = "";

    for (let i = 0; i < aString.length; i++) {
      if (aString[i] == " ") {
        bString += aChar;
      } else {
        bString += aString[i];
      }
    }
    return bString;
  }

  getPlaylist(weather) {
    let sunnyPlaylists = ["37i9dQZF1DWSf2RDTDayIx", "37i9dQZF1DX1BzILRveYHb", "37i9dQZF1DXdPec7aLTmlC", "37i9dQZF1DWUWC0NIJDJKL", "37i9dQZF1DWYzpSJHStHHx"];
    let cloudyPlaylists = ["37i9dQZF1DWUvQoIOFMFUT", "37i9dQZF1DX1tW4VlEfDSS", "37i9dQZF1DXcNb6Ba0LuVc", "37i9dQZF1DXbZndSu0dHeI", "37i9dQZF1DX2yvmlOdMYzV"];
    let rainyPlaylists = ["37i9dQZF1DWSXBu5naYCM9", "37i9dQZF1DX79Y9Kr2M2tM", "37i9dQZF1DX3YSRoSdA634", "37i9dQZF1DXdVbxH0H5oTi", "37i9dQZF1DX6ziVCJnEm59"];
    let snowyPlaylists = ["37i9dQZF1DX9LT7r8qPxfa", "37i9dQZF1DWZrc3lwvImLj", "37i9dQZF1DX3fMJmMkbL14", "37i9dQZF1DXcEKFjZJYZcc", "37i9dQZF1DWVEerxa93vDU"];

    let playlist = [];

    console.log("****************");
    console.log(weather);
    console.log("****************");
    switch (weather.toLowerCase()) {
      case "clear":
        playlist = sunnyPlaylists;
        break;

      case "clouds":
        playlist = cloudyPlaylists;
        break;

      case "drizzle":
      case "rain":
      case "thunderstorm":
      case "snow":
        playlist = rainyPlaylists;
        break;

      case "mist":
      case "smoke":
      case "haze":
      case "dust":
      case "fog":
      case "sand":
      case "ash":
      case "squall":
      case "tornado":
        playlist = snowyPlaylists;
        break;
    }

    let randomPlaylist = playlist[Math.floor(Math.random() * playlist.length)]

    console.log(randomPlaylist);

    let observable = this._httpService.getTracksFromService(randomPlaylist);
    observable.subscribe(data => {
      //@ts-ignore
      this.playlist = this.shufflePlaylist(data.items);
      console.log(data);
    })
  }

  shufflePlaylist(playlist) {
    var i = playlist.length;
    var k = 0;
    var temp = 0;      // k is to generate random index and temp is to swap the values
    while (--i > 0) {
      k = Math.floor(Math.random() * (i + 1));
      temp = playlist[k];
      playlist[k] = playlist[i];
      playlist[i] = temp;
    }

    return playlist;
  }
}
