import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService implements OnInit {

  constructor(private _httpClient: HttpClient) { }

  ngOnInit() {

  }

  getBikes() {
    return this._httpClient.get(`/bikes`);
  }

  getBike(id) {
    return this._httpClient.get(`/bikes/${id}`);
  }

  deleteBike(id) {
    return this._httpClient.delete(`/bikes/${id}`);
  }

  updateBike(bike) {
    return this._httpClient.patch(`/bikes/${bike._id}`, bike);
  }

  addBike(bike) {
    return this._httpClient.post(`/bikes`, bike);
  }
}
