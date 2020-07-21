import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'public';
  tasks = [];
  selectedTask: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {

  }

  getTasksFromService() {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log(data['tasks']);
      this.tasks = data['tasks'];
    });
  }

  showTaskFromService(id) {
    let observable = this._httpService.showTask(id);
    observable.subscribe(data => {
      console.log(data);
      this.selectedTask = data;
    });
  }
}
