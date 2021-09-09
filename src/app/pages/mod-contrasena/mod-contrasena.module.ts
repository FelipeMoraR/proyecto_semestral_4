import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { IonicModule } from '@ionic/angular';

import { ModContrasenaPageRoutingModule } from './mod-contrasena-routing.module';

import { ModContrasenaPage } from './mod-contrasena.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModContrasenaPageRoutingModule,
    MatButtonModule
  ],
  declarations: [ModContrasenaPage]
})
export class ModContrasenaPageModule {}
