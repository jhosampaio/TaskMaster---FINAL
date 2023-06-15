import { Component, OnInit } from '@angular/core';
import { InformationService } from 'src/app/services/information.service';
import { TaskService } from 'src/app/services/task.service';
import { Information } from 'src/app/shared/models/Information';
import { Task } from 'src/app/shared/models/Task';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  tasks:Task[] = [];
  informations:Information[] = [];
  taskService: Task[];
  constructor(
    private informationService:InformationService,
    private TaskService:TaskService){

    this.informations = informationService.getAll();
    this.taskService = TaskService.getAll();
  }
  ngOnInit(): void {
  }

}
