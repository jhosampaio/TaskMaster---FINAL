import { Injectable } from '@angular/core';
import { Task } from '../shared/models/Task';
import { sample_tasks } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getAll():Task[]{
    return sample_tasks;
  }
}
