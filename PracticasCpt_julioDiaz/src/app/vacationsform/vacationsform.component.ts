import { Component } from '@angular/core';
import { GInformationComponent } from '../components/g-information/g-information.component';
import { PInformationComponent } from '../components/p-information/p-information.component';
import { LicenseComponent } from '../components/license/license.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-vacationsform',
  standalone: true,
  imports: [GInformationComponent, PInformationComponent, LicenseComponent, CommonModule, ReactiveFormsModule, ButtonModule],
  templateUrl: './vacationsform.component.html',
  styleUrl: './vacationsform.component.css'
})
export class VacationsformComponent {
  vacationsForm : FormGroup;

  constructor(private fb : FormBuilder){
    this.vacationsForm = this.fb.group(
      {
        name_g : ['', Validators.required],
        email : ['', [Validators.required, Validators.email]],
        name : ['', Validators.required],
        lastname : ['', Validators.required],
        email_g : ['', [Validators.required, Validators.email]],
        phone : ['', [Validators.required]],
        date_ini : ['', Validators.required],
        date_fi : ['', Validators.required],
        notes : ['', Validators.required]
      }
    )
  }

  onSubmit(){
    if(this.vacationsForm.valid){
      console.log(this.vacationsForm.value)
    }
    else{
      console.log('Formulario invalido')
    }
  }
}
