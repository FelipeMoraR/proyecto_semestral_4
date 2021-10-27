import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarpPageRoutingModule } from './listarp-routing.module';
import {MatCardModule} from '@angular/material/card'; 
import { ListarpPage } from './listarp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarpPageRoutingModule,
    MatCardModule
  ],
  declarations: [ListarpPage]
})
export class ListarpPageModule {}
