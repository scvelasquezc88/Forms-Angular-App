import { NgModule } from '@angular/core';
import { RouterModule, Routes, } from '@angular/router';

import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';



const routes: Routes = [
  {
    path: '',
    children:[
      { path: 'registro' , component: RegistroComponent },
      { path:'login' , component: LoginComponent },
      { path: '**' ,redirectTo :'registro' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class AuthRoutingModule { }
