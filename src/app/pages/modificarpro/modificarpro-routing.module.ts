import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificarproPage } from './modificarpro.page';

const routes: Routes = [
  {
    path: '',
    component: ModificarproPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificarproPageRoutingModule {}
