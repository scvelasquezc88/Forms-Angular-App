import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  constructor(private formbuilder:FormBuilder) { }

  // miFormulario : FormGroup = new FormGroup({

  //   nombre : new FormControl('AMD RADEON RX6600 XT'),
  //   precio : new FormControl(30000000),
  //   impuesto : new FormControl(19),
  //   stock : new FormControl(36),

  // });

  miFormulario: FormGroup = this.formbuilder.group(
    {
      nombre : ['', [Validators.required , Validators.minLength(3)]  , ],
      precio : [ , [Validators.required, Validators.min(1)]],
      impuesto : [, [Validators.required, Validators.min(0)]],
      stock : [ , [Validators.required, Validators.min(0)]],
    }
  )

  messageValidator(campo:string):boolean
  {
    return  this.miFormulario.controls[campo].invalid && 
            this.miFormulario.controls[campo].touched
  }

  guardar()
  {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched()
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }

}
