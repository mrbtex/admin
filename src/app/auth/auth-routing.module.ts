import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoudPageComponent } from './pages/layoud-page/layoud-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoudPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
