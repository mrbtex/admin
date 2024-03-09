import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoudPageComponent } from './pages/layoud-page/layoud-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { ShearchPageComponent } from './pages/shearch-page/shearch-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { VelosPageComponent } from './pages/velos-page/velos-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoudPageComponent,
    children: [
      { path: 'new-page', component: NewPageComponent},
      { path: 'shearch', component: ShearchPageComponent},
      { path: 'list-page', component: ListPageComponent},
      { path: 'edit/:id', component: NewPageComponent},
      { path: ':id', component: VelosPageComponent},
      { path: '**', redirectTo: 'list'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VelosRoutingModule { }
