/* eslint-disable */
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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

  tasks$: Task[] = [];
  formGroup;
  constructor(
    private TaskService: TaskService,
    private formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      title: '',
      description: '',
      telf: ''
    });
  }

  ngOnInit() {
    /*this.tasks$ = this.TaskService.getTasksFake();
    console.log(this.tasks$);
    return this.TaskService.getTasksFake();
*/
    return this.TaskService.getApiAllTasks().subscribe((data: any) => {
      this.tasks$ = data;
      console.log(this.tasks$);
    });
  }

  onSubmit(formData) {
    var desc = formData['title'];
    console.log('COMPONENT: onSubmiT');
    console.log(desc);
    this.TaskService.addApiTask(formData).subscribe(data => console.log('Succes!', data),
      error => console.log('Error!', error));
  }
}

