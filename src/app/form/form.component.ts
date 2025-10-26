import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton,
  IonIcon,
  IonSegment,
  IonSegmentButton,
  IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonInput } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  compassOutline, 
  bicycleOutline, 
  restaurantOutline, 
  personOutline, 
  locationOutline 
} from 'ionicons/icons';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  imports: [IonInput, IonItem, IonCardContent, IonCardTitle, IonCardHeader, IonCard, 
    CommonModule,
    RouterLink,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonButton,
    IonIcon,
    IonSegment,
    IonSegmentButton,
    IonLabel,FormsModule
  ]
})
export class FormComponent  implements OnInit {

  constructor() {
    addIcons({
      compassOutline,
      bicycleOutline,
      restaurantOutline,
      personOutline,
      locationOutline
    });
  }

  ngOnInit() {}

}
