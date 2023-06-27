import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InfoService } from 'src/app/services/info.service';
import { Info } from 'src/app/shared/models/info';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  infos: Info[] = [];

  constructor
    (private infoService:InfoService){
    this.infos = infoService.getAll();
  }
  ngOnInit(): void {

  }
}
