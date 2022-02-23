import { Component} from '@angular/core';

interface menuItems{
    texto:string,
    ruta:string
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent{

  Templatemenu:menuItems[]= [
    {
      texto: 'Basicos',
      ruta: './template/basicos'
    },
    {
      texto: 'Dinamicos',
      ruta: './template/dinamicos'
    },
    {
      texto: 'Switches',
      ruta: './template/switches'
    },
  ]

  Reactivemenu:menuItems[]= [
    {
      texto: 'Basicos',
      ruta: './reactive/basicos'
    },
    {
      texto: 'Dinamicos',
      ruta: './reactive/dinamicos'
    },
    {
      texto: 'Switches',
      ruta: './reactive/switches'
    },

  ]

  AuthMenu:menuItems[]= [
    {
      texto: 'registro',
      ruta: './auth/registro'
    },
    {
      texto: 'login',
      ruta: './auth/login'
    }

  ]


}
