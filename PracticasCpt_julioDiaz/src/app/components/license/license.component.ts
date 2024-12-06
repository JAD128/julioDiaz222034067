import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';

@Component({
  selector: 'app-license',
  standalone: true,
  imports: [ReactiveFormsModule, CalendarModule, CommonModule, InputTextModule, InputTextareaModule, DropdownModule],
  templateUrl: './license.component.html',
  styleUrl: './license.component.css'
})
export class LicenseComponent {
  @Input() vacationsForm! : FormGroup

  // constructor(private fb : FormBuilder){
  //   this.licenseForm = this.fb.group({
  //     date_ini : ['', Validators.required],
  //     date_fi : ['', Validators.required],
  //     notes : ['', Validators.required]
  //   })
  // }

  // // Métodos

  // onSubmit(){
  //   if(this.licenseForm.valid){
  //     console.log(this.licenseForm.value)
  //   }else{
  //     console.log('Formulario invalido')
  //   }
  // }
}
