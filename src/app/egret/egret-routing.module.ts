import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EgretPage } from './egret.page';

const routes: Routes = [
  {
    path: '',
    component: EgretPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EgretPageRoutingModule {}
