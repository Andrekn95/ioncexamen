import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { 
  IonContent, 
  IonItem, 
  IonLabel, 
  IonInput, 
  IonButton, 
  IonText, 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardContent, 
  IonCol, 
  IonRow 
} from '@ionic/angular/standalone';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    IonRow, IonCol, IonContent, IonItem, IonLabel, IonInput,
    IonButton, IonText, IonCard, IonCardHeader, IonCardTitle, 
    IonCardContent, CommonModule, ReactiveFormsModule
  ]
})
export class LoginComponent {
  loginForm = this.fb.group({
    username: ['', [Validators.required, Validators.email, Validators.pattern(/@yavirac\.edu\.ec$/)]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  constructor(
    private fb: FormBuilder, 
    private router: Router,    
    private authService: AuthService
  ) {}

  onSubmit() {
    console.log('LoginComponent - onSubmit ejecutado');
    
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username')?.value || '';
      const password = this.loginForm.get('password')?.value || '';
      
      console.log('LoginComponent - Credenciales:', username, password);
      
      if (this.authService.login(username, password)) {
        console.log('LoginComponent - Navegando a /login/form');
        this.router.navigate(['/login/form']);
      } else {
        alert('Credenciales incorrectas. Use: usuario@yavirac.edu.ec / 123456');
      }
    } else {
      alert('Por favor complete correctamente todos los campos');
      console.log('LoginComponent - Formulario inválido');
    }
  }

  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }
}