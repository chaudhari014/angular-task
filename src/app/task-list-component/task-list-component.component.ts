import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../task-service.service';
import { Task } from '../task';

@Component({
  selector: 'app-task-list-component',
  templateUrl: './task-list-component.component.html',
  styleUrls: ['./task-list-component.component.css'],
})
export class TaskListComponentComponent {
  tasks: Task[] = [];
  constructor(private TaskServiceService: TaskServiceService) {}
  ngOnInit() {
    this.tasks = this.TaskServiceService.getTask();
    console.log(this.tasks);
  }
  deleteTask(id: number) {
    this.TaskServiceService.deleteTask(id);
    this.tasks = this.TaskServiceService.getTask();
  }
  taskComplete(id: number) {
    this.TaskServiceService.taskComplete(id);
    this.tasks = this.TaskServiceService.getTask();
  }
}
