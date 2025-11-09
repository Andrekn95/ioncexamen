import { Component, inject, OnInit } from '@angular/core';
import { GpsService, SavedPhoto } from './gps.service';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonRow,
  IonSpinner,
  IonText,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-gps',
  templateUrl: './gps.component.html',
  styleUrls: ['./gps.component.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonButton,
    IonToolbar,
    IonTitle,
    IonCardTitle,
    IonCardSubtitle,
    IonIcon,
    IonSpinner,
    IonText,
    IonGrid,
    IonRow,
    IonCol,
    IonItem,
    IonLabel
  ]
})
export class GpsComponent implements OnInit {
  private gps = inject(GpsService);
  private sanitizer = inject(DomSanitizer);
  photos: SavedPhoto[] = [{
    "fileName": "1761763635253.jpeg",
    "webviewPath": "https://localhost/_capacitor_file_/data/user/0/io.ionic.starter/files/photos/1761763635253.jpeg",
    "timestamp": 1761763635356
  }];
  lat: number = 0;
  lng: number = 0;
  mapUrlSafe?: SafeResourceUrl;

  loadingPhoto = false;
  loadingLocation = false;

  constructor() {
  }

  async ngOnInit() {
    this.photos = await this.gps.loadAllPhotos();
  }

  async deletePhoto(p: SavedPhoto) {
    await this.gps.deletePhoto(p.fileName);

    this.photos = this.photos.filter(x => x.fileName !== p.fileName);
  }

  async onTakePhoto() {
    try {
      this.loadingPhoto = true;
      const photo = await this.gps.takePhoto();
      const saved = await this.gps.savePhoto(photo);
      this.photos = [saved, ...this.photos];
    } catch (e) {
      console.error(e);
    } finally {
      this.loadingPhoto = false;
    }
  }

  async getLocationOnce() {
    try {
      this.loadingLocation = true;
      const pos = await this.gps.getCurrentPosition();
      this.lat = pos.coords.latitude;
      this.lng = pos.coords.longitude;

      this.updateMapUrl();
    } catch (e) {
      console.error(e);
    } finally {
      this.loadingLocation = false;
    }
  }

  updateMapUrl() {
    if (this.lat && this.lng) {
      const url = `https://www.google.com/maps?q=${this.lat},${this.lng}&z=15&output=embed`;
      this.mapUrlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    } else {
      this.mapUrlSafe = undefined;
    }
  }
}
