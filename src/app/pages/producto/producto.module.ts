import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductoPageRoutingModule } from './producto-routing.module';
import { MatCardModule } from '@angular/material/card';
import { ProductoPage } from './producto.page';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductoPageRoutingModule,
    MatTableModule,
    MatCardModule, 
    MatButtonModule

  ],
  declarations: [ProductoPage]
})
export class ProductoPageModule { }
