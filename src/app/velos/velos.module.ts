import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VelosRoutingModule } from './velos-routing.module';
import { VelosPageComponent } from './pages/velos-page/velos-page.component';
import { LayoudPageComponent } from './pages/layoud-page/layoud-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { ShearchPageComponent } from './pages/shearch-page/shearch-page.component';


@NgModule({
  declarations: [
    VelosPageComponent,
    LayoudPageComponent,
    ListPageComponent,
    NewPageComponent,
    ShearchPageComponent
  ],
  imports: [
    CommonModule,
    VelosRoutingModule
  ]
})
export class VelosModule { }
