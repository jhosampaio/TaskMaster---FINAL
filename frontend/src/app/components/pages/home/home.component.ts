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
      this.getAll = this.getAll;

    }, (err: any) => {
      console.log('Erro ao listar', err);
    })
  }
}
