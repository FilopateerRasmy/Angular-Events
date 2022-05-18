import { Component, EventEmitter, Input, Output } from "@angular/core";
import { IEvent } from "./shared/events.model";

@Component({
  selector:"event-thumbnail",
  templateUrl:"./event-thumbnail.component.html",
  styles:[
    `.pad-left{
      margin-left:10px;
      }
      .well div {
        color:#bbb;
      }
      .green{
        color:green !important;
      }`
  ]
})
export class EventThumbnail {
  @Input() event!:IEvent;
  @Output() eventClick = new EventEmitter()
  handleClick(){
    this.eventClick.emit('foo')
  }

  logFoo(){
    console.log('foooo')
  }
}
