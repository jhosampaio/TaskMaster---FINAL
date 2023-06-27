import { Injectable } from '@angular/core';
import { IUserLogin } from '../shared/interfaces/IUserLogin';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../shared/models/User';
import { LOGIN_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  doLogin(userLogin:IUserLogin):Observable<User>{
    return this.http.post<User>(LOGIN_URL, userLogin)
  }
}
