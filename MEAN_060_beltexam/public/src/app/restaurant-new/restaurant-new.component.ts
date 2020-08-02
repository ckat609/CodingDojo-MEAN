import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-new',
  templateUrl: './restaurant-new.component.html',
  styleUrls: ['./restaurant-new.component.scss']
})
export class RestaurantNewComponent implements OnInit {
  aRestaurant: any;
  dbErrors = [];
  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.aRestaurant = {};
  }

  addRestaurantFromService() {
    let observable = this._httpService.addRestaurant(this.aRestaurant);
    observable.subscribe(data => {
      this.dbErrors = [];
      //@ts-ignore
      if (data.errors) {
        //@ts-ignore
        console.log(data.errors)
        //@ts-ignore
        for (let i in data.errors) {
          //@ts-ignore
          this.dbErrors.push(data.errors[i].properties.message);
        }
      } else {
        //@ts-ignore
        if (data.helloworld) {
          //@ts-ignore
          this.dbErrors.push(data.helloworld);
        } else {
          this._router.navigate(['/']);
        }
      }
    })
  }

  checkSeconds(): Number {

    return 30;
  }
}
