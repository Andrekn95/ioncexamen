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
  mensaje: string = '';
  mensajeColor: string = 'primary';
  
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
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username')?.value ?? '';
      const password = this.loginForm.get('password')?.value ?? '';

      this.authService.login(username, password).subscribe({
        next: (response) => {
          if (response) {
            console.log('✅ Login correcto');
            this.mensaje = 'Inicio de sesión exitoso';
            this.mensajeColor = 'success';
            setTimeout(() => {
              this.router.navigate(['login/form']);
            }, 1000);
          } else {
            console.log('❌ Credenciales incorrectas');
            this.mensaje = 'Credenciales incorrectas';
            this.mensajeColor = 'danger';
          }
        },
        error: (err) => {
          console.error('❌ Error en login:', err);
          this.mensaje = 'Error al conectar con el servidor';
          this.mensajeColor = 'danger';
        }
      });
    } else {
      this.mensaje = 'Por favor complete correctamente todos los campos';
      this.mensajeColor = 'warning';
    }
  }

  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }
}