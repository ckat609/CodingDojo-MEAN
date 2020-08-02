import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-edit',
  templateUrl: './restaurant-edit.component.html',
  styleUrls: ['./restaurant-edit.component.scss']
})
export class RestaurantEditComponent implements OnInit {
  aRestaurant: any;
  dbErrors = [];
  @Input() enableEdit;
  @Input() aRestaurantId;
  @Output() setEnableEdit = new EventEmitter();
  @Output() resetRestaurants = new EventEmitter();



  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    if (this.aRestaurantId != null) {
      console.log(this.aRestaurantId);
      this.getRestaurantFromService(this.aRestaurantId);
    } else {
      this.aRestaurant = {};

      let observable = this._route.params;
      observable.subscribe(data => {
        this.getRestaurantFromService(data['id']);
      })
    }
  }

  getRestaurantFromService(id) {
    let observable = this._httpService.getRestaurant(id);
    observable.subscribe(data => {
      this.aRestaurant = data;
    })
  }

  updateRestaurantFromService() {
    let observable = this._httpService.updateRestaurant(this.aRestaurant);
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
        console.log("SKIP")
        this.setEnableEdit.emit();
        this.resetRestaurants.emit();
        this._router.navigate(['/']);
      }
    })
  }
  runSetEnableEdit() {
    this.setEnableEdit.emit();
  }
}
