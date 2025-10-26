import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet, RouterLink } from '@angular/router';
import {
  IonContent,
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
    ,
    IonTextarea
    ,
    RouterLink
  ]
})
export class FormComponent implements OnInit {
  formRegister = this.fb.group({
    nombreComercial: ['', [Validators.required, Validators.minLength(6)]],
    tipo: ['', [Validators.required, Validators.pattern(/^(hotel|motel|caba(n|ñ)a)$/i)]],
  direccion: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9\u00C0-\u017F\s#\-\,\.]+$/)]],
    contacto: ['', [Validators.required, Validators.pattern(/^0\d{9}$/)]], 
    fijo: ['', [Validators.pattern(/^0\d{7,9}$/)]], 
    email: ['', [Validators.required, Validators.email]],
    ubicacion: ['', [Validators.required]],
    descripcion: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(200)]],
    web: ['', [Validators.required, Validators.pattern(/^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/.*)?$/i)]],
    habitaciones: ['', [Validators.required, Validators.pattern(/^[1-9]\d*$/), Validators.min(1)]]
  });

  constructor(private fb: FormBuilder) {}

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
    console.log('Registro válido', this.formRegister.value);
  }
}

