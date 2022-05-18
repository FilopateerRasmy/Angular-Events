import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { EventService } from '../shared/events.service'

@Injectable({
  providedIn:'root'
})
export class EventRouterActivator implements CanActivate {
  constructor(private eventService:EventService, private router:Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
   const eventExist =  !!this.eventService.getEvent(+route.params['id'])

   if(!eventExist){
     this.router.navigate(['/404'])
   }
   return eventExist

  }
}
