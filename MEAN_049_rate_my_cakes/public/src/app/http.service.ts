import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _httpClient: HttpClient) { }

  getCakes() {
    return this._httpClient.get('/cakes');
  };

  addCake(cake) {
    return this._httpClient.post('/create', cake);
  };

  addComment(id, comment) {
    return this._httpClient.post(`/comments/create/${id}`, comment);
  }

  showCake(id) {
    return this._httpClient.get(`/comments/${id}`);
  }
}
