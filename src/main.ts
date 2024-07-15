import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import {
  provideIonicAngular,
  IonicRouteStrategy,
} from '@ionic/angular/standalone';
import { IonButton, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <ion-card>
<ion-button>test</ion-button>
</ion-card>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular({ mode: 'ios' }),
  ],
});
