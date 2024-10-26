import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
  selector: 'app-other-form-cb',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputTextModule, CheckboxModule, RadioButtonModule, ButtonModule],
  templateUrl: './other-form-cb.component.html',
  styleUrl: './other-form-cb.component.css'
})
export class OtherFormCbComponent {
  opciones : {label : string, value : string}[] = [
    {label : 'Opcion 1', value : 'opcion1'},
    {label : 'Opcion 2', value : 'opcion2'},
    {label : 'Opcion 3', value : 'opcion3'}
  ]

  opcionesrb : {label : string, value : string}[] = [
    {label : 'Opcion A', value : 'opcionA'},
    {label : 'Opcion B', value : 'opcionB'},
    {label : 'Opcion C', value : 'opcionC'}
  ]

  checkboxForm : FormGroup
  radiobuttonForm : FormGroup

  constructor(private fb : FormBuilder){
    this.checkboxForm = this.fb.group({
      seleccion : [[]] // Inicializamos con arreglo vacio
    })
    this.radiobuttonForm = this.fb.group({
      seleccion : ['']
    })
  }

  onSubmit(){
    console.log(this.checkboxForm.value)
    console.log(this.radiobuttonForm.value)
  }

}
