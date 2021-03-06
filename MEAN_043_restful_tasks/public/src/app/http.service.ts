import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {
    this.getTasks();
    this.showTask("5f0fb40481fa695f8c0f97f1");
  }

  getTasks() {
    let tempObservable = this._http.get('/tasks');
    tempObservable.subscribe(data => {
      console.log("Got data from service ", data);
    });
  }

  showTask(aTask) {
    let tempObservable = this._http.get(`/tasks/${aTask}`);
    tempObservable.subscribe(data => {
      console.log("Got data from service ", data);
    });
  }


}
