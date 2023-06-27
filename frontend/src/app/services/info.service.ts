import { Injectable } from '@angular/core';
import { Info } from '../shared/models/info';
import { sample_infos } from 'src/data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { HOME_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get(HOME_URL);
  }
}
