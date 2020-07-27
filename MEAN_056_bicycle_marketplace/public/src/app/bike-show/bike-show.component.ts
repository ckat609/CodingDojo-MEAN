import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-bike-show',
  templateUrl: './bike-show.component.html',
  styleUrls: ['./bike-show.component.scss']
})
export class BikeShowComponent implements OnInit {
  @Input() aBikeId: any;
  aBike: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    if (this.aBikeId) {
      this.getBikeFromService(this.aBikeId);
    }
  }

  getBikeFromService(id) {
    let observable = this._httpService.getBike(id);
    observable.subscribe(data => {
      console.log(data);
      this.aBike = data;
    });
  }

  deleteBikeFromService(id) {
    let observable = this._httpService.deleteBike(id);
    observable.subscribe(data => {
      this.aBike = data;
    });
  }
}
