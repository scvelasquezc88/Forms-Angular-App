import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent{

  constructor(private formbuilder:FormBuilder) { }

  miFormulario:FormGroup = this.formbuilder.group(
    {
      nombre: ['Wolverine',[Validators.required, Validators.minLength(2)] ],
      favoritos : this.formbuilder.array( [
        ['Naruto',Validators.required],
        ['Sasuke',Validators.required]
      ], Validators.required )

    }
  )

  nuevoFavorito:FormControl = new FormControl(
    'txt', [Validators.required , Validators.minLength(2)]
  )

  get favoritosArr()
  {
    return this.miFormulario.get('favoritos') as FormArray
  }

  isvalid(campo:string):boolean{
    return this.miFormulario.controls[campo].invalid &&
            this.miFormulario.controls[campo].touched
  }

  agregar()
  {
    if (this.nuevoFavorito.invalid) {
      return;
    }
    this.favoritosArr.push(this.formbuilder.control(this.nuevoFavorito.value,Validators.required))
    console.log("Agregado");
    this.nuevoFavorito.reset();
    this.nuevoFavorito.untouched
    // this.miFormulario.
  }

  guardar()
  {
    if (this.miFormulario.invalid) {
      console.log("No se puede enviar Formulario....");
      this.miFormulario.markAllAsTouched()
      return;
    }

    console.log("enviando.....");
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }

  borrar(index:number)
  {
    console.log("Borrado....")
    this.favoritosArr.removeAt(index)
    console.log(index)
  }

}
