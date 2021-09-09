import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { MatButtonModule } from '@angular/material/button';
import { PerfilPageRoutingModule } from './perfil-routing.module';
import {MatCardModule} from '@angular/material/card';
import { PerfilPage } from './perfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilPageRoutingModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [PerfilPage]
})
export class PerfilPageModule {}
