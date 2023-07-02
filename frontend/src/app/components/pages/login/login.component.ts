import { Component, OnInit } from '@angular/core';
import { RequestLogin } from 'src/app/shared/models/RequestLogin';
import { LoginService } from 'src/app/services/login.service';
import { AlertService } from 'src/app/services/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  requestLogin!: RequestLogin;

  constructor(
    private alertService: AlertService,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.requestLogin = new RequestLogin();
  }

  onSubmit(): void {
    this.loginService.doLogin(this.requestLogin).subscribe(data => {
      this.router.navigate(['tasks']);
    },
    error => {
      this.alertService.error(error.error.message);
    });
  }

}


