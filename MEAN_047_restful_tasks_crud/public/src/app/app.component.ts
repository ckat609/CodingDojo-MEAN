import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'public';
  tasks = [];
  newTask: { title: string, description: string };
  taskToEdit: any;

  constructor(private _httpService: HttpService) {

  }

  ngOnInit() {
    this.newTask = { title: "", description: "" };
    this.getTasksFromService();
  }

  addTaskFromService(): void {
    console.log("COMPONENT!!!!!!!!!!");
    let observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data => {
      console.log("ADDED TASK: ", data);
    });
    this.newTask = { title: "", description: "" };
    this.getTasksFromService();
  }

  getTasksFromService(): void {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log(data['tasks']);
      this.tasks = data['tasks'];
    });
  }

  showTaskFromService(id): void {
    let observable = this._httpService.showTask(id);
    observable.subscribe(data => {
      console.log(data);
      this.taskToEdit = data;
    });

  }

  delTaskFromService(id): void {
    console.log("YAY");
    let observable = this._httpService.delTask(id);
    observable.subscribe(data => {
      console.log(data);
    });
    this.getTasksFromService();
  }

  updateTaskFromService(id) {
    let observable = this._httpService.updateTask(id, this.taskToEdit);
    observable.subscribe(data => {
      console.log(data);
    });
    this.taskToEdit = null;
    this.getTasksFromService();
  }
}
