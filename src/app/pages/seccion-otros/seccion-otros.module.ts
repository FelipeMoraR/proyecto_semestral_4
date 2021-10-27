import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeccionOtrosPageRoutingModule } from './seccion-otros-routing.module';
import {MatCardModule} from '@angular/material/card'; 
import { SeccionOtrosPage } from './seccion-otros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeccionOtrosPageRoutingModule,
    MatCardModule
  ],
  declarations: [SeccionOtrosPage]
})
export class SeccionOtrosPageModule {}
