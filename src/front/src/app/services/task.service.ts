import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task.model';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  apiUrl = 'http://localhost:3000/addtask';
  endpoIntNewTask = '/addtask';
  tasks: any[] = [
    {
      tittle: 'Jhosef',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      phone: '546647564',

    },
  ];

  constructor(private _http: HttpClient) {
    console.log('ANGULAR: task service running');
  }

  getTasksFake() {
    return this.tasks;
  }

  getApiAllTasks() {
    console.log('ANGULAR: GET TASKS ');
    return this._http.get<any>('/api/tasks');
  }
  getApiTask() {
    console.log('ANGULAR: GET TASK ');
    return this._http.get<any>('UNK');

  }
  addApiTask(task: Task) {
    console.log('ANGULAR: POST TASK ');
    return this._http.post<any>('/api/add', task);
  }

  searchApiTask() {
    console.log('ANGULAR: SEARCH TASKS ');
    return this._http.get<any>('/api/search');
  }

  updateApiTask() {
    console.log('ANGULAR: UPDATE TASKS ');
    return this._http.get<any>('/api/tasks');

  }

  deleteApiTask() {
    console.log('ANGULAR: DELETE TASKS ');
    return this._http.get<any>('/api/tasks');

  }








}
