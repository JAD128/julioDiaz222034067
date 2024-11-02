import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-p-information',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, ButtonModule, CommonModule],
  templateUrl: './p-information.component.html',
  styleUrl: './p-information.component.css'
})
export class PInformationComponent {
  userForm : FormGroup

  constructor(private fb : FormBuilder){
    this.userForm = this.fb.group({
      name : ['', Validators.required],
      lastname : ['', Validators.required],
      email : ['', [Validators.required, Validators.email]],
      phone : ['', [Validators.required]]
    })
  }

  //Métodos
  onSubmit(){
    if(this.userForm.valid){
      console.log(this.userForm.value)
    }
    else{
      console.log('Formulario invalido')
    }
  }

}
