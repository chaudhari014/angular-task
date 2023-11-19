import { Component } from '@angular/core';
import { TaskServiceService } from '../task-service.service';
import { Task } from '../task';

@Component({
  selector: 'app-task-add-component',
  templateUrl: './task-add-component.component.html',
  styleUrls: ['./task-add-component.component.css'],
})
export class TaskAddComponentComponent {
  task: Task = {
    id: 0, // You can generate a unique ID, or use a service to handle this.
    title: '',
    description: '',
    completed: false,
  };

  constructor(private taskService: TaskServiceService) {}

  addTask() {
    // You can add your custom logic to save the task.
    // For example, you can call a method in your service.
    this.task.id = Math.random();
    this.taskService.addTask(this.task);

    // Clear the form after adding the task.
    this.task = {
      id: 0, // You can reset the ID or generate a new one.
      title: '',
      description: '',
      completed: false,
    };
  }
}
