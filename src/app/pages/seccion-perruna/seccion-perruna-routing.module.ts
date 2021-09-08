import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeccionPerrunaPage } from './seccion-perruna.page';

const routes: Routes = [
  {
    path: '',
    component: SeccionPerrunaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeccionPerrunaPageRoutingModule {}
