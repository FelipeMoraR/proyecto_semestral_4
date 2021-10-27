import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeccionGatunaPage } from './seccion-gatuna.page';

const routes: Routes = [
  {
    path: '',
    component: SeccionGatunaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeccionGatunaPageRoutingModule {}
