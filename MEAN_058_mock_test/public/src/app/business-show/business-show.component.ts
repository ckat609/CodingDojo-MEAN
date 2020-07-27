import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-business-show',
  templateUrl: './business-show.component.html',
  styleUrls: ['./business-show.component.scss']
})
export class BusinessShowComponent implements OnInit {
  aBusiness: any;
  allReviews: any;

  addReview: Boolean;
  aReview: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.addReview = false;
    this.aBusiness = {};
    this.aReview = {};

    let observable = this._route.params;
    observable.subscribe(data => {
      this.getBusinessFromService(data['id']);
    })
  }

  getBusinessFromService(id) {
    let observable = this._httpService.getBusiness(id);
    observable.subscribe(data => {
      this.aBusiness = data;
    })
  }

  showAddReview(): Boolean {
    this.addReview = !this.addReview;
    return this.addReview
  }
}
