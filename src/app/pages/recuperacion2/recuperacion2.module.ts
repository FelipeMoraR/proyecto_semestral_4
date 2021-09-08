import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Recuperacion2PageRoutingModule } from './recuperacion2-routing.module';

import { Recuperacion2Page } from './recuperacion2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Recuperacion2PageRoutingModule
  ],
  declarations: [Recuperacion2Page]
})
export class Recuperacion2PageModule {}
