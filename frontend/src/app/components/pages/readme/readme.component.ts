import { Component } from '@angular/core';
import { InfoService } from 'src/app/services/info.service';
import { Info } from 'src/app/shared/models/info';

@Component({
  selector: 'app-readme',
  templateUrl: './readme.component.html',
  styleUrls: ['./readme.component.css']
})
export class ReadmeComponent {

  infos: Info[] = [];
  constructor(private infoService:InfoService){
    this.infos = infoService.getAll();
  }

}
