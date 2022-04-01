import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { HttpClientModule } from '@angular/common/http';
import { UsuariosService } from './services/usuarios.service';
import { UpdateComponentComponent } from './pages/update/update-component/update-component.component';
import { LoginComponent } from './pages/login/login/login.component';
import { RegisterComponent } from './pages/register/register/register.component';
import { FormsModule } from '@angular/forms';
import { Home2Component } from './home2/home2.component';



@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    UpdateComponentComponent,
    LoginComponent,
    RegisterComponent,
    Home2Component,
    
    
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
