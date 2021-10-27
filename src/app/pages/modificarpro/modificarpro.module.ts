import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarproPageRoutingModule } from './modificarpro-routing.module';

import { ModificarproPage } from './modificarpro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarproPageRoutingModule
  ],
  declarations: [ModificarproPage]
})
export class ModificarproPageModule {}
