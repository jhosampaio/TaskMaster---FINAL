import { Injectable } from '@angular/core';
import { Info } from '../shared/models/info';
import { sample_infos } from 'src/data';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { HOME_URL } from '../shared/constants/urls';
import { Home } from '../shared/interfaces/IHome';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoService {



  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  getHome(): Observable<Home> {
    return this.http.get<Home>(HOME_URL)
      .pipe(
        retry(2))

  }
  getAll():Info[]{
    return sample_infos;
  }
}
