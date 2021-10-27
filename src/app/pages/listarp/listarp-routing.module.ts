import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarpPage } from './listarp.page';

const routes: Routes = [
  {
    path: '',
    component: ListarpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarpPageRoutingModule {}
