import { Component } from '@angular/core';
import { IUserLogin } from 'src/app/shared/interfaces/IUserLogin';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {



  constructor(
    private loginService: LoginService,

  ) {}

  ngOnInit(): void{
    //this.requestLogin = new RequestLogin();
  }
  // doLogin() :void{
  //   this.loginService.doLogin({email:this.fc.email.value,
  //     password: this.fc.password.value}).subscribe(() => {
  //       this.router.navigateByUrl(this.returnUrl);
  //     });
  //   this.loginService.doLogin(this.requestLogin).subscribe((data: any) => {
  //     console.log(data);
  //   },
  //     (error: any) => {
  //     console.error(error);
  //   })

  }


