import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getTasks();
  }

  getTasks() {
    let tempObservable = this._http.get('/tasks');
    tempObservable.subscribe(data => {
      console.log(data);
    });
  }

}
