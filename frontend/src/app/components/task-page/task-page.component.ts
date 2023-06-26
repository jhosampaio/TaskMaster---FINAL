import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/shared/models/Task';
import {FormControl, FormsModule, Validators} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css'],
})
export class TaskPageComponent {

  task!: Task;

  constructor(activatedRoute:ActivatedRoute, taskService:TaskService) {
    activatedRoute.params.subscribe((params) => {
      if(params['id'])
      this.task = taskService.getTaskById(params['id']);
    })
   }
}
