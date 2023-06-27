import { Component } from '@angular/core';
import { InfoService } from 'src/app/services/info.service';
import { Info } from 'src/app/shared/models/info';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent {

  infos: Array<any> = new Array();;

  constructor
    (private infoService: InfoService){
    // this.infos = infoService.getAll();
  }
  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.infoService.getAll().subscribe((infos: any) => {

    }, (err: any) => {
      console.log('Erro ao listar', err);
    })
  }

}
