import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpiritChsAmenitiesPage } from './spirit-chs-amenities.page';

const routes: Routes = [
  {
    path: '',
    component: SpiritChsAmenitiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpiritChsAmenitiesPageRoutingModule {}
