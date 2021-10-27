import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarproPage } from './agregarpro.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarproPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarproPageRoutingModule {}
