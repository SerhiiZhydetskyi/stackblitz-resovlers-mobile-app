import {CommonModule} from '@angular/common';
import {Component, inject} from '@angular/core';
import {
  RefresherCustomEvent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonRefresher,
  IonRefresherContent,
  IonList,
  IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonCard, IonRouterLink
} from '@ionic/angular/standalone';
import {MessageComponent} from '../../components/message/message.component';

import {DataService, Message} from '../../services/data.service';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonRefresher, IonRefresherContent, IonList, MessageComponent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonCard, RouterLink],
})
export class HomePage {
}
