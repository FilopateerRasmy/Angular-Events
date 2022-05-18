import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ToasterService } from "../common/toastr.service";
import { IEvent } from "./shared/events.model";
import { EventService } from "./shared/events.service";

@Component({
  selector: 'events-list',
  template: `
<div>
  <h1>Upcoming Angular Events</h1>
  <hr>

  <div class="row">
  <div class="col-md-5"   *ngFor="let event of events">
  <event-thumbnail #thumbnail
  (click)="handleThumbnailClick(event.name)"
      [event]="event"
      (eventClick)="handleClick($event)"></event-thumbnail>
  </div>
  </div>


  <!-- <button class="btn btn-primary" (click)="thumbnail.logFoo()"> logFoo </button> -->
</div>`
})
export class EventsListComponent implements OnInit{
  events!:IEvent[];
  constructor(private eventService:EventService, private toastr:ToasterService, private route:ActivatedRoute){
  }
ngOnInit(): void {
  this.events = this.route.snapshot.data['events']
}
  handleClick(event: any) {
    console.log(event)
  }
  handleThumbnailClick(name:string){
    this.toastr.info(name)
  }
}
