import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarusPageRoutingModule } from './listarus-routing.module';

import { ListarusPage } from './listarus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarusPageRoutingModule
  ],
  declarations: [ListarusPage]
})
export class ListarusPageModule {}
