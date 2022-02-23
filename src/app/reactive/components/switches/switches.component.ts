import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent implements OnInit {

  
  constructor(private formbuild:FormBuilder) { }


  ngOnInit(): void {
    this.miFormulario.reset( this.persona );

    this.miFormulario.valueChanges.subscribe( ({condiciones, ...form}) => 
      this.persona = form
      )

    this.miFormulario.controls.condiciones.valueChanges
        .subscribe( cond => console.log(cond)) 

  }





  miFormulario:FormGroup = this.formbuild.group(
    {
      genero: ['M', Validators.required],
      notificaciones:[ true, Validators.required ],
      condiciones:[false, Validators.requiredTrue]
    }
  )

  persona = {
    genero: 'F',
    notificaciones: true
  }





}
