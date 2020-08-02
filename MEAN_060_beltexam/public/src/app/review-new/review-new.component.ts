import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-review-new',
  templateUrl: './review-new.component.html',
  styleUrls: ['./review-new.component.scss']
})
export class ReviewNewComponent implements OnInit {
  @Input() aReview: any;

  @Input() aRestaurant: any;
  @Output() aRestaurantChange = new EventEmitter();

  @Input() addReview: Boolean;
  @Output() addReviewChange = new EventEmitter();
  dbErrors = [];

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.aRestaurant = {};

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
        this.getRestaurantFromService(this.aRestaurant._id);
        this.addReview = false;
        this.aRestaurantChange.emit();
        this.addReviewChange.emit();
      }
    })

  }

  cancelReview() {
    this.addReviewChange.emit();
  };
}
