import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Platform, IonHeader, IonToolbar, IonButtons, IonBackButton, IonContent, IonItem, IonIcon, IonLabel, IonNote } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { personCircle } from 'ionicons/icons';
import { DataService, Message } from '../../../services/data.service';
import {toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-view-message',
  templateUrl: './view-message.page.html',
  styleUrls: ['./view-message.page.scss'],
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonButtons, IonBackButton, IonContent, IonItem, IonIcon, IonLabel, IonNote],
})
export class ViewMessagePage implements OnInit {

  private data = inject(DataService);
  private activatedRoute = inject(ActivatedRoute);

  public message = toSignal<Message>(this.data.getMessageById(parseInt((this.activatedRoute.snapshot.paramMap.get('id') as string), 10)));

  constructor() {
    addIcons({ personCircle });
  }

  ngOnInit() {
  }
}
