import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputOtpModule } from 'primeng/inputotp';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-other-form',
  standalone: true,
  imports: [ReactiveFormsModule, DropdownModule, CalendarModule, ButtonModule, CommonModule, InputTextModule],
  templateUrl: './other-form.component.html',
  styleUrl: './other-form.component.css'
})
export class OtherFormComponent {
  otherForm : FormGroup
  cities : any[] = [{label : 'New york', value : 'NY'}, {label : 'London', value : 'LDN'}, {label : 'Paris', value : 'PRS'}]

  constructor(private fb : FormBuilder, private router : Router){
    this.otherForm = this.fb.group({
      name : ['', Validators.required],
      birthdate : ['', Validators.required],
      city : [null, Validators.required]
    })
  }

  onSubmit(){
    if(this.otherForm.valid){
      console.log(this.otherForm.value)
      this.router.navigate(['/logintest'])//Habilita la navegacion, debe activarse en el constructor
    }
    else{
      console.log('Fomulario no valido')
    }
  }
}
