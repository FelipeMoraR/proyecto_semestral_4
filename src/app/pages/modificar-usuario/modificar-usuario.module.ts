import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { IonicModule } from '@ionic/angular';
import { MatButtonModule } from '@angular/material/button';
import { ModificarUsuarioPageRoutingModule } from './modificar-usuario-routing.module';

import { ModificarUsuarioPage } from './modificar-usuario.page';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarUsuarioPageRoutingModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  declarations: [ModificarUsuarioPage]
})
export class ModificarUsuarioPageModule {}
