import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { IonContent,IonItem, IonLabel, IonInput,IonToolbar, IonButton, IonText, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCol, IonRow } from '@ionic/angular/standalone';


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
    IonToolbar,
    IonButton,
    IonText,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
  RouterLink,
  RouterOutlet,
    CommonModule,
    ReactiveFormsModule
  ]
})

export class LoginComponent implements OnInit, OnDestroy {
  isRoot = true;
  private _sub?: Subscription;

  constructor(private fb: FormBuilder, private router: Router) {
  }

  formRegister = this.fb.group({
    username: ['', [Validators.required, Validators.email, Validators.pattern(/@yavirac\.edu\.ec$/)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirm: ['', [Validators.required]]
  });

  onSubmit() {

  }

  ngOnInit() {
    this._sub = this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(() => {
      this.isRoot = this.router.url === '/login' || this.router.url === '/';
    });
  }

  ngOnDestroy() {
    this._sub?.unsubscribe();
  }

  get username() { return this.formRegister.get('username'); }
  get password() { return this.formRegister.get('password'); }
  get confirm() { return this.formRegister.get('confirm'); }
}
