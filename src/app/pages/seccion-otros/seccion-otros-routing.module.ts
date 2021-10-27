import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeccionOtrosPage } from './seccion-otros.page';

const routes: Routes = [
  {
    path: '',
    component: SeccionOtrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeccionOtrosPageRoutingModule {}
