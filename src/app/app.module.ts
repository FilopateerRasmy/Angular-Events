import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { Error404Component } from './errors/404.component';
import { CreateEventComponent } from './events/create-event.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventRouterActivator } from './events/event-details/event-route-activator.service';
import { EventThumbnail } from './events/event-thumbnail.component';
import { EventsListComponent } from './events/events-list.component';
import { EventListResolver } from './events/events-list.resolver';
import { NavBarComponent } from './nav/navbar.component';
const routes:Routes = [
  {path:'events/new', component:CreateEventComponent, canDeactivate:['canDeactivateCreateEvent']}, //must be before id to make angular diffrentiate between them
  {path: 'events', component:EventsListComponent, resolve:{events:EventListResolver}},
  {path:  'events/:id', canActivate:[EventRouterActivator],component:EventDetailsComponent},
  {path:'', redirectTo:'/events', pathMatch:'full'},
  {path:'user', loadChildren: ()=> import('./user/user.module').then(m => m.UserModule)},
  {path:'**', component:Error404Component}
]
@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnail,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)

  ],
  providers: [
    {provide:'canDeactivateCreateEvent', useValue: checkDirtyState}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

function checkDirtyState(component:CreateEventComponent){
if(component.isDirty) return window.confirm("you dont save this event yet you really want to cancel ?");
return true;
}
