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
  IonLabel
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  compassOutline, 
  bicycleOutline, 
  restaurantOutline, 
  personOutline, 
  locationOutline 
} from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
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
    IonLabel
  ],
})
export class HomeComponent  implements OnInit {

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
