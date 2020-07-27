import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService implements OnInit {

  constructor(private _httpClient: HttpClient) { }

  ngOnInit() { }

  getBusinesses() {
    return this._httpClient.get('/businesses');
  }

  getBusiness(id) {
    return this._httpClient.get(`/businesses/${id}`);
  }

  addBusiness(aBusiness) {
    return this._httpClient.post('/businesses', aBusiness);
  }

  updateBusiness(aBusiness) {
    return this._httpClient.post(`/businesses/${aBusiness._id}`, aBusiness);
  }

  deleteBusiness(id) {
    return this._httpClient.delete(`/businesses/${id}`);
  }

  addReview(id, aReview) {
    return this._httpClient.post(`/businesses/${id}/reviews`, aReview);
  }

}
