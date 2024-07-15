import {Component, inject} from '@angular/core';
import {IonApp, IonRouterOutlet, IonSpinner} from '@ionic/angular/standalone';
import {LoaderService} from "./services/loader.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, IonSpinner],
})
export class AppComponent {
  loaderService = inject(LoaderService)
  constructor() {}
}
