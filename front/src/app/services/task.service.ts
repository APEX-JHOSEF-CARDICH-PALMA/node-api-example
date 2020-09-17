import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  apiUrl = 'http://localhost:3000/api/tasks';
  users: any[] = [
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
    return this.users;
  }
  getApiTasks() {
    return this._http.get<any>(this.apiUrl);
  }
}
