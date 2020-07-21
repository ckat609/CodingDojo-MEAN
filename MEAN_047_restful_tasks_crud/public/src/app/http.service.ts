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

  showTask(id: string) {
    return this._httpClient.get(`/tasks/${id}`);
  }

  delTask(id) {
    return this._httpClient.delete(`/tasks/${id}`);
  }

  addTask(newTask) {
    return this._httpClient.post('/tasks', newTask);
  }

  updateTask(id, editedTask) {
    return this._httpClient.put(`/tasks/${id}`, editedTask);
  }
}
