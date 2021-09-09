import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeccionPerrunaPageRoutingModule } from './seccion-perruna-routing.module';
import {MatCardModule} from '@angular/material/card'; 
import { SeccionPerrunaPage } from './seccion-perruna.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeccionPerrunaPageRoutingModule,
    MatCardModule
  ],
  declarations: [SeccionPerrunaPage]
})
export class SeccionPerrunaPageModule { }
