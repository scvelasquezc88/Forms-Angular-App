import { Component } from '@angular/core';

interface Persona{
  nombre: string,
  favoritos:Favorito[]
}

interface Favorito{
  id:number,
  nombre:string
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent{

  nuevoJuego:string = "";

  persona:Persona = {
    nombre:"Sebastian",
    favoritos : [
      { id: 1, nombre:"Diablo 2"},
      { id: 2, nombre:"God of war 3"},

    ]
  }

  eliminar(index:number)
  {
    this.persona.favoritos.splice(index,1);
  }

  agregarJuego(){
    if(this.nuevoJuego === "")
    {
      return;
    }
    const nuevoFavorito:Favorito ={
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }

    this.persona.favoritos.push(nuevoFavorito);
    this.nuevoJuego = "";
    console.log(nuevoFavorito);
    console.log("Elemento agregado");
  }

  onSubmit()
  {
    console.log("Fromulario enviado");
  }

}
