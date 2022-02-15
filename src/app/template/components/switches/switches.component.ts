import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent {

  constructor() { }

  persona = {
    Genero: "",
    Notificaciones:true
  }

  TerminosAndCondicion:boolean = false;

  ngOnInit(): void {
  }

}
