import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeaconLocationsPage } from './beacon-locations.page';

const routes: Routes = [
  {
    path: '',
    component: BeaconLocationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeaconLocationsPageRoutingModule {}
