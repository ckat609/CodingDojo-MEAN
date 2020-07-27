import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-business-new',
  templateUrl: './business-new.component.html',
  styleUrls: ['./business-new.component.scss']
})
export class BusinessNewComponent implements OnInit {
  allBusinesses: any;
  aBusiness: any;
  dbErrors = [];

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.aBusiness = {};
  }

  addBusinessFromService() {
    let observable = this._httpService.addBusiness(this.aBusiness);
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
