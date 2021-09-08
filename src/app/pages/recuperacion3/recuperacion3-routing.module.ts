import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Recuperacion3Page } from './recuperacion3.page';

const routes: Routes = [
  {
    path: '',
    component: Recuperacion3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Recuperacion3PageRoutingModule {}
