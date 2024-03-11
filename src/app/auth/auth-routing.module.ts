import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoudPageComponent } from './pages/layoud-page/layoud-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoudPageComponent,
    children: [
      { path: 'login', component: LoginPageComponent},
      { path: 'register', component: RegisterPageComponent },
      { path: '**', redirectTo: 'login'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
