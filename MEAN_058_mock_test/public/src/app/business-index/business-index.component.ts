import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-business-index',
  templateUrl: './business-index.component.html',
  styleUrls: ['./business-index.component.scss']
})
export class BusinessIndexComponent implements OnInit {
  allBusinesses: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getBusinessesFromService()
  }

  getBusinessesFromService() {
    let observable = this._httpService.getBusinesses();
    observable.subscribe(data => {
      this.allBusinesses = data;
      console.log(data);
    })
  }

  deleteBusinessFromService(id) {
    let observable = this._httpService.deleteBusiness(id);
    observable.subscribe(data => {
      this.getBusinessesFromService();
    })
  }
}
