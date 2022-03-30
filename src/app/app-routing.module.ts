import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { UpdateComponentComponent } from './pages/update/update-component/update-component.component';

const routes: Routes = [

  //{path:'login', redirectTo: '/login', pathMatch: 'full' },
  //{path:'login', component: LoginComponent },
  {path:'',component:UsuariosComponent},
  
  {path:'Update', component:UpdateComponentComponent},
  //{path:'**',component:ErrorpersonComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [UsuariosComponent,UpdateComponentComponent];
