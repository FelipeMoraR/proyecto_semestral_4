import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { IonicModule } from '@ionic/angular';

import { ModContrasenaPageRoutingModule } from './mod-contrasena-routing.module';

import { ModContrasenaPage } from './mod-contrasena.page';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModContrasenaPageRoutingModule,
    MatButtonModule,
    ReactiveFormsModule

  ],
  declarations: [ModContrasenaPage]
})
export class ModContrasenaPageModule {}
