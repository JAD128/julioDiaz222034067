import { Component } from '@angular/core';
import { GInformationComponent } from '../components/g-information/g-information.component';
import { PInformationComponent } from '../components/p-information/p-information.component';
import { LicenseComponent } from '../components/license/license.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { SolicitudVacacionesService } from '../services/solicitud-vacaciones.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-vacationsform',
  standalone: true,
  imports: [GInformationComponent, PInformationComponent, LicenseComponent, CommonModule, ReactiveFormsModule, ButtonModule, HttpClientModule],
  templateUrl: './vacationsform.component.html',
  styleUrl: './vacationsform.component.css'
})
export class VacationsformComponent {
  vacationsForm : FormGroup;

  constructor(private fb : FormBuilder, private registerService : SolicitudVacacionesService){
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
    if (this.vacationsForm.valid){
      console.log(this.vacationsForm.value);
      const {name,lastName,email,phone,name_g,email_g,date_ini,date_fi,notes} = this.vacationsForm.value;
      this.registerService.register(name,lastName,email,phone,name_g,email_g,date_ini,date_fi,notes).subscribe(
        {
          next: (response) => {
            {console.log('Exitoso',response)};
        },
          error: error => {
          console.error('Error en el registro del usuario', error);
        },
          complete:() => {
          console.log("Envio de información completo!")
         }
        });

    }else{
      console.log('Formulario no valido');
    }
  };
}
