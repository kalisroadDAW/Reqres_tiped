import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService } from '../../login/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  ngOnInit(): void {
  }


  // email: string | undefined;
  // password: string | undefined;
  
  // passworError:boolean | undefined;
  

  // constructor(loginService:LoginService) { 

  // }

  // register() {
  //   const user = {email: this.email, password: this.password};
  //   this.loginService.register(user).subscribe(data => {
  //     console.log(data);
  //   });
  // }
  email: string | undefined;
  password: string | undefined;
  password2: string | undefined;
  
  passwordError: boolean | undefined ;

  

  constructor(private router:Router,public loginService: LoginService) {}

  mensaje="las contraseñas no coinciden";

  register() {
    const user = { email: this.email, password: this.password , password2: this.password2};
    
    if(this.password==this.password2){
      this.passwordError=false;
      this.loginService.register(user).subscribe(data => {
        console.log(data);
        this.router.navigate(['/login']);
        alert("usuario registrado con exito");
      });
    }else{
      console.log(this.mensaje);
      this.passwordError=true;
    }


    




  
}}
