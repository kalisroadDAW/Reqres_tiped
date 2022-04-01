import { Component, Input, OnInit } from '@angular/core';
import { UsuariosComponent } from '../../usuarios/usuarios.component';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { ReqUser } from 'src/app/models/reqres-response';
import { Usuario } from 'src/app/models';


@Component({
  selector: 'app-update-component',
  templateUrl: './update-component.component.html',
  styleUrls: ['./update-component.component.css']
})
export class UpdateComponentComponent implements OnInit {


  

  public usuarios: ReqUser[] = [];

  constructor(private usuariosService: UsuariosService ) {

   }

  ngOnInit(): void {

    this.usuariosService.cargarUsuarios()
    .subscribe( usuarios => {

      console.log(usuarios);//puedo especificarle que usuario quiero que me cargue
      this.usuarios = usuarios;
    }
    );
}

borrarUsuario(){

   this.usuariosService.borrarUsuario()
  .subscribe( usuarios => {

    console.log(usuarios);
    this.usuarios = usuarios;
  }
  );
}


}
