import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService implements OnInit {

  constructor(private _httpClient: HttpClient) { }

  ngOnInit() { }

  getRestaurants() {
    return this._httpClient.get('/api/restaurants');
  }

  getRestaurant(id) {
    return this._httpClient.get(`/api/restaurants/${id}`);
  }

  addRestaurant(aRestaurant) {
    return this._httpClient.post('/api/restaurants', aRestaurant);
  }

  updateRestaurant(aRestaurant) {
    return this._httpClient.post(`/api/restaurants/${aRestaurant._id}`, aRestaurant);
  }

  deleteRestaurant(id) {
    return this._httpClient.delete(`/api/restaurants/${id}`);
  }

  addReview(id, aReview) {
    return this._httpClient.post(`/api/restaurants/${id}/reviews`, aReview);
  }

}
