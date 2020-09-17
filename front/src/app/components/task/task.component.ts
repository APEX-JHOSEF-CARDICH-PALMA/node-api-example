import { importType } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
// Services
import { TaskService } from '../../services/task.service';
//Models
import { Task } from '../../models/task.model';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {


  constructor(private TaskService: TaskService) { }
  tasks$: Task[] = [];

  ngOnInit() {
    this.tasks$ = this.TaskService.getTasksFake();
    console.log(this.tasks$);
    return this.TaskService.getTasksFake();

    /*return this.TaskService.getApiTasks().subscribe((data: any) => {
      this.tasks$ = data;
      console.log(this.tasks$);
    });*/
  }
}
