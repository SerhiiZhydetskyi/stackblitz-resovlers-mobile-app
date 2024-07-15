import { Routes } from '@angular/router';
import {messageResolverFn, messagesResolverFn} from "./resolvers/resolvers";

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'messages',
    loadComponent: () => import('./pages/without-resolver/messages/messages.page').then(m => m.MessagesPage)
  },
  {
    path: 'message/:id',
    loadComponent: () =>
      import('./pages/without-resolver/view-message/view-message.page').then((m) => m.ViewMessagePage),
  },
  {
    path: 'messages-resolver',
    loadComponent: () => import('./pages/with-resolver/messages/messages.page').then(m => m.MessagesPage),
    resolve: {messages: messagesResolverFn}
  },
  {
    path: 'message-resolver/:id',
    loadComponent: () =>
      import('./pages/with-resolver/view-message/view-message.page').then((m) => m.ViewMessagePage),
    resolve: {message: messageResolverFn}

  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

