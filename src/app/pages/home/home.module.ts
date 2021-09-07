import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MiTextoComponent } from './components/mi-texto/mi-texto.component';



@NgModule({
  declarations: [
    HomeComponent,
    MiTextoComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
