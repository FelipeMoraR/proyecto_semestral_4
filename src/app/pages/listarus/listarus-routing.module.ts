import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarusPage } from './listarus.page';

const routes: Routes = [
  {
    path: '',
    component: ListarusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarusPageRoutingModule {}
