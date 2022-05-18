import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProfileComponent } from "./profile.component";
import { LoginComponent } from './login/login.component';
import { FormsModule } from "@angular/forms";
const routes:Routes = [
  {path:'profile', component:ProfileComponent},
  {path:'login', component:LoginComponent},
]
@NgModule({
  declarations:[
    ProfileComponent,
    LoginComponent
  ],
  imports:[
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  exports:[]
})
export class UserModule{}
