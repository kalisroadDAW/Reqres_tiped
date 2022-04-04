import { Component, OnInit } from '@angular/core';
import { ReqUser } from 'src/app/models/reqres-response';
import { UsuariosService }from '../../services/usuarios.service';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  public usuarios: ReqUser[] = [];

  constructor(private usuariosService: UsuariosService, public loginService: LoginService,private router:Router) {

   }

  ngOnInit(): void {

    this.usuariosService.cargarUsuarios()
    .subscribe( usuarios => {

      console.log(usuarios);
      this.usuarios = usuarios;
    }
    );

    

  }

  getUserLogged() {
    this.loginService.getUser().subscribe((user: any) => {
      console.log(user); //devuelve el usuario loggeado, no lo usaremos de momento 02/04/2022
    });

 

  

}

logout() {
  this.loginService.logout()
  this.router.navigate(['/login']);
  }


  //Devuelvorá un usuario en función de su id
getUserbyId(id: number) {
  this.usuariosService.getUserbyId()
  .subscribe( user => {
    console.log(user);
  });

}
}


