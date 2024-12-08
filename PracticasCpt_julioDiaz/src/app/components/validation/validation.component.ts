import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SolicitudVacacionesService } from '../../services/solicitud-vacaciones.service';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-validation',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, CommonModule, ButtonModule],
  templateUrl: './validation.component.html',
  styleUrl: './validation.component.css'
})
export class ValidationComponent {
  val_form : FormGroup

  constructor(private fb : FormBuilder, private service : SolicitudVacacionesService, private router : Router){
    this.val_form = this.fb.group(
      {
        email : ['', [Validators.required, Validators.email]],
        lastName : ['', Validators.required]
      }
    )
  }

  navigateToComponent() {
    this.router.navigate(['/formulario_vacaciones']); 
  }
   
  //Métodos
   onSubmit(){
    if (this.val_form.valid){
      const {lastName, email} = this.val_form.value
      this.service.validation(lastName, email).subscribe(response => {console.log('Exitoso', response)})
      console.log(this.val_form.value)
    }
    else{
      console.log('Fomulario invalido')
    }
  } 
}
