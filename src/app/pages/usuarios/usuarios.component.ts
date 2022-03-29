import { Component, OnInit } from '@angular/core';
import { UsuariosService }from '../../services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(private usuariosService: UsuariosService ) {

   }

  ngOnInit(): void {

    this.usuariosService.cargarUsuarios()
    .subscribe( (resp:any) => {
      console.log(resp);
    }
    );

  }

}
