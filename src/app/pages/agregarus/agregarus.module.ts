import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarusPageRoutingModule } from './agregarus-routing.module';

import { AgregarusPage } from './agregarus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarusPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AgregarusPage]
})
export class AgregarusPageModule {}
