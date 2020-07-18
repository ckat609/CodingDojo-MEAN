import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'public';
  myVar = "All the tasks";
  tasks = [{ hello: 'hello' }];

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getTasksFromService();
    // this._http.showTask("5f11ff1101cf717c0b5d7d13");
  }

  getTasksFromService() {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("WE GOT DATA: ", data['tasks']);
      this.tasks = data['tasks'];
    });
  }
}