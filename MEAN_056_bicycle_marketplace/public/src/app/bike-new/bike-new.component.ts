import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bike-new',
  templateUrl: './bike-new.component.html',
  styleUrls: ['./bike-new.component.scss']
})
export class BikeNewComponent implements OnInit {
  aBike: any;
  dbErrors = [];

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.aBike = {};
  }

  addBikeFromService() {
    let observable = this._httpService.addBike(this.aBike);
    observable.subscribe(data => {
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
        this._router.navigateByUrl("/");
      }
    });
  }
}
