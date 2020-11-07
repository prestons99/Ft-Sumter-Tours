import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoatAmenitiesPage } from './boat-amenities.page';

const routes: Routes = [
  {
    path: '',
    component: BoatAmenitiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoatAmenitiesPageRoutingModule {}
