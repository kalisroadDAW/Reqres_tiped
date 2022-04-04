import { Component,  } from '@angular/core';
import {LoginService } from '../login.service';
import { AppRoutingModule } from '../../../app-routing.module'; 
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  email: string | undefined;
  password: string | undefined;

  Badlogin="wrong user or password"

  fakebadlogin:boolean | undefined;

  constructor(private router:Router,public loginService: LoginService) {}
  
  login() {
    const user = {email: this.email, password: this.password};
    //fake badlogin

    if(this.password=="cityslicka"){
      this.fakebadlogin=false;
      this.loginService.login(user).subscribe( data => {
        this.loginService.setToken(data.token);;
        this.router.navigate(['/users']);
        alert("login success");
      
      
      },error => {
        console.log(error);
      });
    }else{
      console.log(this.Badlogin);
      this.fakebadlogin=true;
    }
  
}




}
