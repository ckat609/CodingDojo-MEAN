import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant-show',
  templateUrl: './restaurant-show.component.html',
  styleUrls: ['./restaurant-show.component.scss']
})
export class RestaurantShowComponent implements OnInit {
  aRestaurant: any;
  allReviews: any;

  addReview: Boolean;
  aReview: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.addReview = false;
    this.aRestaurant = {};
    this.aReview = {};

    let observable = this._route.params;
    observable.subscribe(data => {
      this.getRestaurantFromService(data['id']);
    })
  }

  getRestaurantFromService(id) {
    let observable = this._httpService.getRestaurant(id);
    observable.subscribe(data => {
      this.aRestaurant = data;
    })
  }

  showAddReview(): Boolean {
    this.aReview = {};
    this.addReview = !this.addReview;
    return this.addReview
  }
}
