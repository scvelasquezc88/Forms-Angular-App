import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  constructor() { }

  @ViewChild('miFormulario') miFormulario!:NgForm;

  ngOnInit(): void {
  }

  validProduct()
  {
    return  this.miFormulario?.controls.producto?.invalid &&
            this.miFormulario?.controls.producto?.touched 
  }

  validPrice()
  {
    return (this.miFormulario?.controls.precio?.touched && this.miFormulario?.controls.precio?.value < 0)
  }

  

  guardar(){
    console.log( this.miFormulario );
    if(this.miFormulario.controls.precio.value < 0)
    {
      console.log("formulario no enviado");
      return
    }  
    console.log("Formulario reinciado");
    this.miFormulario.resetForm();
  }

}
