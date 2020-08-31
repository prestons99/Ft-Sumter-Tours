import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpiritCharlestonPage } from './spirit-charleston.page';

const routes: Routes = [
  {
    path: '',
    component: SpiritCharlestonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpiritCharlestonPageRoutingModule {}
