import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-business-edit',
  templateUrl: './business-edit.component.html',
  styleUrls: ['./business-edit.component.scss']
})
export class BusinessEditComponent implements OnInit {
  aBusiness: any;
  dbErrors = [];

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
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

  updateBusinessFromService() {
    let observable = this._httpService.updateBusiness(this.aBusiness);
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
        this._router.navigateByUrl("/");
      }
    })
  }
}
