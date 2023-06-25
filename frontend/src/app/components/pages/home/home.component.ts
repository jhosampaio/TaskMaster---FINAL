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

  infos: Info[] = [];
  loginForm!:FormGroup;
  isSubmitted = false;
  constructor
    (private infoService:InfoService,
    private formBuilder: FormBuilder){
    this.infos = infoService.getAll();
  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['', [Validators.required,Validators.email]],
      password:['', Validators.required]
    })
  }

  get fc(){
    return this.loginForm.controls;
  }

  // submit(){
  //   this.isSubmitted = true;
  //   if(this.loginForm.invalid) return;

  //   alert(`email: ${this.fc.email.value},
  //    password: ${this.fc.password.value}`)
  // }

}
