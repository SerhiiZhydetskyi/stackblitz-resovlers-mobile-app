import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonBackButton, IonButtons,
  IonContent,
  IonHeader,
  IonList,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar, RefresherCustomEvent
} from '@ionic/angular/standalone';
import {MessageComponent} from "../../../components/message/message.component";
import {DataService, Message} from "../../../services/data.service";
import {toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonRefresher, IonRefresherContent, MessageComponent, IonBackButton, IonButtons]
})
export class MessagesPage implements OnInit {
  private data = inject(DataService);

  messages = toSignal(this.data.getMessages());
  constructor() {}

  ngOnInit() {
  }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

}
