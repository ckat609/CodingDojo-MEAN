import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService implements OnInit {

  constructor(private _httpClient: HttpClient) { }

  ngOnInit() { }

  getAuthor(author) {
    return this._httpClient.get(`/authors/${author}`);
  }

  getAuthors() {
    return this._httpClient.get('/authors');
  }

  addAuthor(author) {
    return this._httpClient.post('/authors/create', author);
  }

  updateAuthor(id, author) {
    return this._httpClient.patch(`/authors/${id}`, author);
  }

  deleteAuthor(id) {
    return this._httpClient.delete(`/authors/${id}/delete`);
  }
}
