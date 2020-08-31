import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpiritLowAmenitiesPage } from './spirit-low-amenities.page';

const routes: Routes = [
  {
    path: '',
    component: SpiritLowAmenitiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpiritLowAmenitiesPageRoutingModule {}
