import { Injectable } from '@angular/core';
import { Information } from '../shared/models/Information';
import { sample_informations } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  constructor() { }

  getAll():Information[]{
    return sample_informations;
  }
}
