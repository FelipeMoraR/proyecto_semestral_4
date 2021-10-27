import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificarusPage } from './modificarus.page';

const routes: Routes = [
  {
    path: '',
    component: ModificarusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificarusPageRoutingModule {}
