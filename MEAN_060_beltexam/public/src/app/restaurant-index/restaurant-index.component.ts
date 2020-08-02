import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-restaurant-index',
  templateUrl: './restaurant-index.component.html',
  styleUrls: ['./restaurant-index.component.scss']
})
export class RestaurantIndexComponent implements OnInit {
  allRestaurants: any;
  aRestaurant: any;
  aRestaurantId: Number;
  aReview: any;
  dbErrors = [];
  addReview: Boolean;
  enableEdit = false;

  constructor(
    private _httpService: HttpService,
  ) { }

  ngOnInit() {
    this.addReview = false;
    this.aRestaurant = {};
    this.aReview = {};
    this.getRestaurantsFromService()
  }

  getRestaurantsFromService() {
    let observable = this._httpService.getRestaurants();
    observable.subscribe(data => {
      this.allRestaurants = data;
      console.log(data);
    })
  }

  deleteBusinessFromService(id) {
    let observable = this._httpService.deleteRestaurant(id);
    observable.subscribe(data => {
      this.getRestaurantsFromService();
    })
  }

  getRestaurantFromService(id) {
    this.addReview = true;
    let observable = this._httpService.getRestaurant(id);
    observable.subscribe(data => {
      this.aRestaurant = data;
    })
  }

  addReviewFromService() {
    let observable = this._httpService.addReview(this.aRestaurant._id, this.aReview);
    observable.subscribe(data => {
      console.log(data);
      this.dbErrors = [];
      //@ts-ignore
      if (data.errors) {
        //@ts-ignore
        for (let i in data.errors) {
          //@ts-ignore
          this.dbErrors.push(data.errors[i].properties.message);
        }
      } else {
        this.getRestaurantsFromService();
        this.aReview = {};
        this.addReview = false
      }
    })

  }

  checkSeconds(objTime): Boolean {
    // let cDate = new Date("Jan 1, 2018 11:10:05");
    let date1: any = new Date(Date.now());
    let date2: any = new Date(objTime);
    let failTime = true;


    // if (aDate.getFullYear() != bDate.getFullYear()) {
    //   failTime = false;
    // }
    // if (aDate.getMonth() != bDate.getMonth()) {
    //   failTime = false;
    // }
    // if (aDate.getDate() != bDate.getDate()) {
    //   failTime = false;
    // }
    // if (aDate.getHours() != bDate.getHours()) {
    //   failTime = false;
    // }
    // if (aDate.getMinutes() != bDate.getMinutes()) {
    //   failTime = false;
    // }
    // if (bDate.getSeconds() >= (bDate.getSeconds() + 30)) {
    //   failTime = false;
    // }


    // var date1, date2;

    var res = Math.abs(date1 - date2) / 1000;
    var days = Math.floor(res / 86400);
    var hours = Math.floor(res / 3600) % 24;
    var minutes = Math.floor(res / 60) % 60;
    var seconds = res % 60;

    var res = Math.abs(date1 - date2) / 1000;
    var seconds = res % 60;
    console.log("DAYS: ", days);
    console.log("HOURS: ", hours);
    console.log("MINUTES: ", minutes);
    console.log("SECONDS: ", seconds);

    if (days >= 0 && hours >= 0 && minutes >= 0 && seconds > 3) {
      failTime = false;
    }

    return failTime;
  }

  setRestaurantId(id) {
    this.enableEdit = !this.enableEdit;
    this.aRestaurantId = id;
    console.log(this.aRestaurantId);
  }
}