import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModContrasenaPage } from './mod-contrasena.page';

const routes: Routes = [
  {
    path: '',
    component: ModContrasenaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModContrasenaPageRoutingModule {}
