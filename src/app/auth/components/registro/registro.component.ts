import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { emailPattern, nombreApellidoPattern,onValidNickName } from 'src/app/shared/validator/validator';
import { ValidatorService } from '../../../shared/Validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private formbuild:FormBuilder,
              private validatorServices:ValidatorService) { }

  miFormulario:FormGroup = this.formbuild.group(
    {
      nombre: ['Sebastian velasquez', [Validators.required,Validators.pattern(this.validatorServices.nombreApellidoPattern)]],
      email:['sebas@gmail.com',[Validators.required,Validators.pattern(this.validatorServices.emailPattern)]],
      username:['sebas',[Validators.required, Validators.minLength(5) ,this.validatorServices.onValidNickName]],
    }
  )

  ngOnInit(): void {
  }

  onValidations(campo: string)
  {
    return  this.miFormulario.controls[campo].invalid &&
            this.miFormulario.controls[campo].touched
  }

  onSave()
  {
    if(this.miFormulario.invalid)
    {
      console.log("Validando Formulario......")
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log("Formulario Valido......")
    
  }

}
