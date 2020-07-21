import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _httpClient: HttpClient) { }

  getTasks() {
    return this._httpClient.get('/tasks');
  }

  showTask(id) {
    return this._httpClient.get(`/tasks/${id}`);
  }
}
