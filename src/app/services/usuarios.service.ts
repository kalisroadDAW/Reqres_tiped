import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  http: any;

  constructor(private httpClient: HttpClient) { }

  cargarUsuarios(){

    const url='https://reqres.in/';

    return this.http.get(url); //devuelve un observable, al que luego suscribiremos en el componente usuarios.component.ts


  }

  
}
