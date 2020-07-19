import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'public';
  tasks = [];
  aTask = {};

  constructor(private __httpService: HttpService) { }

  ngOnInit() {
    // this.getTasksFromService();
  }

  getTasksFromService() {
    let observable = this.__httpService.getTasks();
    observable.subscribe(data => {
      console.log(data['tasks']);
      this.tasks = data['tasks'];
    });
  }

  showTaskFromService(id: string) {
    let observable = this.__httpService.showTask(id);
    observable.subscribe(data => {
      console.log(data);
      this.aTask = data;
    });
  }
}
