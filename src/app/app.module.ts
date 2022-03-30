import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { HttpClientModule } from '@angular/common/http';
import { UsuariosService } from './services/usuarios.service';
import { UpdateComponentComponent } from './pages/update/update-component/update-component.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    UpdateComponentComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
