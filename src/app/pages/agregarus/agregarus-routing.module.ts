import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarusPage } from './agregarus.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarusPageRoutingModule {}
