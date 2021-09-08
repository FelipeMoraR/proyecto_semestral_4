import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Recuperacion3PageRoutingModule } from './recuperacion3-routing.module';

import { Recuperacion3Page } from './recuperacion3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Recuperacion3PageRoutingModule
  ],
  declarations: [Recuperacion3Page]
})
export class Recuperacion3PageModule {}
