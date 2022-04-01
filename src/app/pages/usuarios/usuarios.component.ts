import { Component, OnInit } from '@angular/core';
import { ReqUser } from 'src/app/models/reqres-response';
import { UsuariosService }from '../../services/usuarios.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  public usuarios: ReqUser[] = [];

  constructor(private usuariosService: UsuariosService ) {

   }

  ngOnInit(): void {

    this.usuariosService.cargarUsuarios()
    .subscribe( usuarios => {

      console.log(usuarios);
      this.usuarios = usuarios;
    }
    );

  }

}
