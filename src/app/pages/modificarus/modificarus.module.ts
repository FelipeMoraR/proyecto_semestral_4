import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarusPageRoutingModule } from './modificarus-routing.module';

import { ModificarusPage } from './modificarus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarusPageRoutingModule
  ],
  declarations: [ModificarusPage]
})
export class ModificarusPageModule {}
