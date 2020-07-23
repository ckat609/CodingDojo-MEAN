import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  location: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    let observable = this._route.params;
    observable.subscribe(data => {
      //@ts-ignore
      this.getWeatherFromService(data['city'], data['state']);
    })
  }

  getWeatherFromService(city, state) {
    let observable = this._httpService.getWeather(city, state);
    observable.subscribe(data => {
      this.location = data;
      console.log(data);
    })
  }

  locationImage(aString): String {
    let imgName = "";
    for (let i = 0; i < aString.length; i++) {
      if (aString[i] != " ") {
        imgName += aString[i].toLowerCase();
      }
    }
    console.log(`./../static/images/${imgName}.jpg`);

    return `/assets/images/${imgName}.jpg`;
  }

}
