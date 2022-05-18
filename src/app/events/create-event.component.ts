import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'selector-name',
  template:`

  <h1>New Event</h1>
  <hr>
  <div class="col-md-6">
    <h3>Create Event Form Will Go Here</h3>
    <br>
    <br>
    <button class="btn btn-primary">Save</button>
    <button class="btn btn-default" (click)="cancel()">Cancel</button>
  </div>
  `
})

export class CreateEventComponent implements OnInit {
  isDirty = false
  constructor(private router:Router) { }

  ngOnInit() { }
  cancel(){
    this.router.navigate(['/events'])
  }
}
