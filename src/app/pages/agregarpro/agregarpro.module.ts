import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarproPageRoutingModule } from './agregarpro-routing.module';

import { AgregarproPage } from './agregarpro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarproPageRoutingModule
  ],
  declarations: [AgregarproPage]
})
export class AgregarproPageModule {}
