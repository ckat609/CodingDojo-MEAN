import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bike-index',
  templateUrl: './bike-index.component.html',
  styleUrls: ['./bike-index.component.scss']
})
export class BikeIndexComponent implements OnInit {
  allBikes: any;
  oneBikeId: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getBikesFromService();
  }

  getBikesFromService() {
    let observable = this._httpService.getBikes();
    observable.subscribe(data => {
      this.allBikes = data;
    })
  }

  deleteBikeFromService(id) {
    let observable = this._httpService.deleteBike(id);
    observable.subscribe(data => {
      this.getBikesFromService();
    });
  }

  getRandomBike(): String {
    this.oneBikeId = this.allBikes[Math.floor(Math.random() * this.allBikes.length)]._id;
    if (this.allBikes) {
    }
    return this.oneBikeId;
  }
}
