import { Injectable } from '@angular/core';
import { Task } from '../shared/models/Task';
import { sample_tasks } from 'src/data';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) { }

  getAll():Task[]{
    return sample_tasks;
  }

  getTaskById(taskId:string):Task{
    return this.getAll().find(task => task.id == taskId) ?? new Task();
  }
}
