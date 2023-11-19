import { Injectable } from '@angular/core';
import { Task } from './task';
@Injectable({
  providedIn: 'root',
})
export class TaskServiceService {
  taskData: Task[] = [];
  constructor() {}
  addTask(task: Task): void {
    const tasks = JSON.parse(localStorage.getItem('tasks') as string) || [];
    this.taskData = [task, ...tasks];
    localStorage.setItem('tasks', JSON.stringify(this.taskData));
  }
  getTask(): Task[] {
    const tasks = JSON.parse(localStorage.getItem('tasks') as string) || [];
    return tasks;
  }
  deleteTask(id: number) {
    this.taskData = this.taskData.filter((item) => item.id !== id);
    localStorage.setItem('tasks', JSON.stringify(this.taskData));
  }
  taskComplete(id: number) {
    const taskToComplete = this.taskData.find((task) => task.id === id);

    // Check if the task exists
    if (taskToComplete) {
      // Mark the task as completed
      taskToComplete.completed = !taskToComplete.completed;

      // Optionally, you can also save the updated data to localStorage
      localStorage.setItem('tasks', JSON.stringify(this.taskData));
    }
  }
}
