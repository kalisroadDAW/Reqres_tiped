import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ReqResponse, ReqUserUpdate } from '../models/reqres-response';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  

  constructor(private http: HttpClient, private cookies: CookieService) { }

  cargarUsuarios(){

    const url='https://reqres.in/api/users';

    return this.http.get<ReqResponse>(url)
    .pipe(
      map( resp => resp.data)
    ); //devuelve un observable, al que luego suscribiremos en el componente usuarios.component.ts


  }

  actualizarUsuario() //PROBRAR
  {
    const url='https://reqres.in/api/users/2';

    return this.http.put<ReqUserUpdate>(url, {name: 'new name'},{})
    .pipe(
      map( resp => resp)
    ); //devuelve un observable, al que luego suscribiremos en el componente usuarios.component.ts

  }

  borrarUsuario() 
  {
    const url='https://reqres.in/api/users/2';

    return this.http.delete<ReqResponse>(url)
    .pipe(
      map( resp => resp.data)
    ); //devuelve un observable, al que luego suscribiremos en el componente usuarios.component.ts

  }


  //Nos devolverá el usurio en función del id, en principio será un 0, pero con las vueltas del buble iremos aumentandolo, a ver si es posible por dios

  getUserbyId() {
    const url='https://reqres.in/api/users/';
    const id:   number=0;

    return this.http.get<ReqResponse>(url+id)
    .pipe(
      map( resp => resp.data)
    )

 

  

  

  /* login(user: any): Observable<any> {
    return this.http.post("https://reqres.in/api/login", user);
  } */


  
}}
