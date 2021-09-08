import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { IonicModule } from '@ionic/angular';

import { CrearCuentaPageRoutingModule } from './crear-cuenta-routing.module';

import { CrearCuentaPage } from './crear-cuenta.page';
import {MatStepperModule} from '@angular/material/stepper';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearCuentaPageRoutingModule,
    MatStepperModule,
    ReactiveFormsModule
   
    
  ],
  declarations: [CrearCuentaPage]
})
export class CrearCuentaPageModule {}
