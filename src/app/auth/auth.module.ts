import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LayoudPageComponent } from './pages/layoud-page/layoud-page.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    LayoudPageComponent,
    LoginPageComponent,
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule
  ],
  exports:[
  ]
})
export class AuthModule { }
