import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonTabs,IonLabel,IonTabBar,IonIcon, IonTabButton,IonBadge } from "@ionic/angular/standalone";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [IonTabButton, CommonModule, IonTabs, IonLabel, IonTabBar,IonIcon, IonBadge],
})
export class HomeComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
