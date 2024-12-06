import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, ButtonModule, PasswordModule, CommonModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registroForm : FormGroup;

  // Constructor
  constructor(private fb : FormBuilder, private loginService : LoginService){
    this.registroForm = this.fb.group({
      username : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  onSubmit(): void {
    if (this.registroForm.valid) {
      const { username, password } = this.registroForm.value;
      this.loginService.register(username, password).subscribe({
        next: response => {
          console.log('Usuario registrado exitosamente', response);
        },
        error: error => {
          console.error('Error en el registro del usuario', error);
        },
        complete: () => {
          console.log('Proceso de registro completado');
        }
      });
    }
  }
}
