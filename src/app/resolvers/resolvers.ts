import {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from "@angular/router";
import {DataService, Message} from "../services/data.service";
import {inject} from "@angular/core";

export const messagesResolverFn: ResolveFn<Message[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  return inject(DataService).getMessages();
};

export const messageResolverFn: ResolveFn<Message> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  return inject(DataService).getMessageById(parseInt(route.paramMap.get('id')!));
};
