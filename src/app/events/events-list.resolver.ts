import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { map, Observable } from 'rxjs';
import { EventService } from './shared/events.service';

@Injectable({ providedIn: 'root' })
export class EventListResolver implements Resolve<any> {
  constructor(private eventService:EventService){}
  // pre fetch data
  resolve(route: ActivatedRouteSnapshot) {
   return this.eventService.getEvents()
  }
}
