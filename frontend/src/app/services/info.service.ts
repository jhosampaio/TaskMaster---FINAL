import { Injectable } from '@angular/core';
import { Info } from '../shared/models/info';
import { sample_infos } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor() { }

  getAll():Info[]{
    return sample_infos;
  }
}
