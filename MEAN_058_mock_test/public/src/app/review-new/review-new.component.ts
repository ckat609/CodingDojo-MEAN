import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-review-new',
  templateUrl: './review-new.component.html',
  styleUrls: ['./review-new.component.scss']
})
export class ReviewNewComponent implements OnInit {
  @Input() aReview: any;

  @Input() aBusiness: any;
  @Output() aBusinessChange = new EventEmitter();

  @Input() addReview: Boolean;
  @Output() addReviewChange = new EventEmitter();
  dbErrors = [];

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.aBusiness = {};

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

  addReviewFromService() {
    let observable = this._httpService.addReview(this.aBusiness._id, this.aReview);
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
        this.getBusinessFromService(this.aBusiness._id);
        this.addReview = false;
        this.aBusinessChange.emit();
        this.addReviewChange.emit();
      }
    })

  }

}
