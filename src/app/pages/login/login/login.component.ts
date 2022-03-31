import { Component,  } from '@angular/core';
import {LoginService } from '../login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  email: string | undefined;
  password: string | undefined;

  constructor(public loginService: LoginService) {}

  login() {
    const user = {email: this.email, password: this.password};
    this.loginService.login(user).subscribe( data => {
      console.log(data);
    });

}}
