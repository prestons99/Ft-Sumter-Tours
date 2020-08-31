import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpiritLowcountryPage } from './spirit-lowcountry.page';

const routes: Routes = [
  {
    path: '',
    component: SpiritLowcountryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpiritLowcountryPageRoutingModule {}
