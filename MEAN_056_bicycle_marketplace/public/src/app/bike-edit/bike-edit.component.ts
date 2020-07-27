import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bike-edit',
  templateUrl: './bike-edit.component.html',
  styleUrls: ['./bike-edit.component.scss']
})
export class BikeEditComponent implements OnInit {
  @Input() aBikeId: any;
  aBike: any;
  dbErrors = [];

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    let observable = this._route.params;
    observable.subscribe(data => {
      //@ts-ignore
      this.getBikeFromService(data['id']);
    })
  }

  getBikeFromService(id) {
    let observable = this._httpService.getBike(id);
    observable.subscribe(data => {
      this.aBike = data;
    });
  }

  updateBikeFromService() {
    let observable = this._httpService.updateBike(this.aBike);
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