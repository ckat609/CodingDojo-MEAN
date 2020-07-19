import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private __http: HttpClient) { }

  getTasks() {
    return this.__http.get('/tasks');
  }

  showTask(id: string) {
    return this.__http.get(`/tasks/${id}`);
  }
}
