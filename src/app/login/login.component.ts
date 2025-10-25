import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonContent, IonItem, IonLabel, IonInput, IonButton, IonText, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCol, IonRow } from '@ionic/angular/standalone';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [IonRow, IonCol, 
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
    CommonModule,
    ReactiveFormsModule
  ]
})

export class LoginComponent {
  constructor(private fb: FormBuilder) {}

  formRegister = this.fb.group({
    username: ['', [Validators.required, Validators.email, Validators.pattern(/@yavirac\.edu\.ec$/)]],
    password: ['', [Validators.required, Validators.minLength(6), this.validatorPersonalizado]],
    confirm: ['', [Validators.required]]
  });

  validatorPersonalizado(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (value && value.includes('$')) {
      return { dolar: true };
    }
    return null; 
  }

  validatorContieneP(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (value && /[pP]/.test(value)) {
      return { faltaP: true };
    }
    return null;
  }
  


  onSubmit() {

  }

  get username() { return this.formRegister.get('username'); }
  get password() { return this.formRegister.get('password'); }
  get confirm() { return this.formRegister.get('confirm'); }
}
