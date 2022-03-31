import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { UpdateComponentComponent } from './pages/update/update-component/update-component.component';
import { LoginComponent } from './pages/login/login/login.component';
import { RegisterComponent } from './pages/register/register/register.component';

const routes: Routes = [

  //{path:'login', redirectTo: '/login', pathMatch: 'full' },
  //{path:'login', component: LoginComponent },
  {path:'',component:UsuariosComponent},
  
  {path:'Update', component:UpdateComponentComponent},
  //{path:'**',component:ErrorpersonComponent}

  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "register", component: RegisterComponent, pathMatch: "full" }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [UsuariosComponent,UpdateComponentComponent,LoginComponent,RegisterComponent];
