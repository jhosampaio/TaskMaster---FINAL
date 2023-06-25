import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm!: FormGroup;
  isSubmitted = false;

  constructor(
    private formBuilder: FormBuilder
    // private userService: UserService,
    // private activatedRoute: ActivatedRoute,
    // private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: ['', Validators.required],
      address: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get fc() {
    return this.registerForm.controls;
  }

  submit(){
    this.isSubmitted = true;
    if(this.registerForm.invalid) return;

    const fv= this.registerForm.value;
    // const user :IUserRegister = {
    //   name: fv.name,
    //   email: fv.email,
    //   password: fv.password,
    //   confirmPassword: fv.confirmPassword,
    //   address: fv.address
    // };

    // this.userService.register(user).subscribe(_ => {
    //   this.router.navigateByUrl(this.returnUrl);
    // })
  }

}
