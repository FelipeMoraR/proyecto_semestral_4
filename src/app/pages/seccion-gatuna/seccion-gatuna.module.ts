import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeccionGatunaPageRoutingModule } from './seccion-gatuna-routing.module';
import {MatCardModule} from '@angular/material/card'; 
import { SeccionGatunaPage } from './seccion-gatuna.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeccionGatunaPageRoutingModule,
    MatCardModule
  ],
  declarations: [SeccionGatunaPage]
})
export class SeccionGatunaPageModule {}
