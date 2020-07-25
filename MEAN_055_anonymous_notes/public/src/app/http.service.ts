import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService implements OnInit {

  constructor(private _httpClient: HttpClient) { }

  ngOnInit() {

  }

  getNotes() {
    return this._httpClient.get('/notes');
  }

  addNote(aNote) {
    return this._httpClient.post('/notes', aNote);
  }

  deleteNote(id) {
    return this._httpClient.delete(`/notes/${id}`);
  }
}
