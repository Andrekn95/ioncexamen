import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { provinciaEcuadorValidator } from '../validators/validators.component';
import { AuthService } from '../auth.service';
import {
  IonContent,
  IonText,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonSegment,
  IonSegmentButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonSelect,
  IonSelectOption
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  standalone: true,
  imports: [IonHeader, 
    CommonModule,
    ReactiveFormsModule,
    IonContent,
  IonToolbar,
    IonTitle,
    IonButtons,
    IonIcon,
    IonSegment,
    IonSegmentButton,
  IonText,
  IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonSelect,
    IonSelectOption
    ,IonTextarea,RouterLink,
  ]
})

export class FormComponent implements OnInit {
  formRegister = this.fb.group({
   nombreComercial: ['', [Validators.required, Validators.minLength(2)]],
   tipo: ['', [Validators.required, Validators.pattern(/^(hotel|motel|caba(n|ñ)a)$/i)]],
   direccion: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9\u00C0-\u017F\s#\-\,\.]+$/),Validators.maxLength(100)]],
   contacto: ['', [Validators.required, Validators.pattern(/^09\d{8}$/),Validators.maxLength(10)]], 
   fijo: ['', [Validators.pattern(/^(02|03|04|05|06|07)/),Validators.maxLength(9),Validators.minLength(8)]], 
   email: ['', [Validators.required, Validators.email]],
   ubicacion: ['', [Validators.required,provinciaEcuadorValidator()]],
   descripcion: ['', [ Validators.required,Validators.minLength(20),Validators.maxLength(200),Validators.pattern(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s]+$/)]],
   web: ['', Validators.pattern(/^(https?:\/\/)?(\S+\.\S+)$/i)],
   habitaciones: ['', [Validators.required,  Validators.pattern(/^\d{1,4}$/), Validators.min(1)]]
  });
  
  caracteresDireccion = 0;
  caracteresDescripcion = 0;

  constructor(private fb: FormBuilder, private authService: AuthService,
    private router: Router) {}

  ngOnInit() {}

  get nombreComercial() { return this.formRegister.get('nombreComercial'); }
  get tipo() { return this.formRegister.get('tipo'); }
  get direccion() { return this.formRegister.get('direccion'); }
  get contacto() { return this.formRegister.get('contacto'); }
  get fijo() { return this.formRegister.get('fijo'); }
  get email() { return this.formRegister.get('email'); }
  get ubicacion() { return this.formRegister.get('ubicacion'); }
  get descripcion() { return this.formRegister.get('descripcion'); }
  get web() { return this.formRegister.get('web'); }
  get habitaciones() { return this.formRegister.get('habitaciones'); }
  
  onSubmit() {
    if (this.formRegister.invalid) {
      this.formRegister.markAllAsTouched();
      return;
    }
  }
  contarCaracteres() {
  const valor:string = this.formRegister.get('direccion')?.value || '';
  const valor1:string= this.formRegister.get('descripcion')?.value || '';
  this.caracteresDireccion = valor.length;
  this.caracteresDescripcion = valor1.length;
}
  
  cerrarSesion() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}

