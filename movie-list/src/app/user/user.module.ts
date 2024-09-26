import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserRoutingModule } from './user-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserRoutingModule,
    LoginComponent,
    RegisterComponent,
    RouterModule,
    SharedModule
  ],
  exports:[
    LoginComponent,
    RegisterComponent
  ]
})
export class UserModule { }
