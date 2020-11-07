import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OurFleetBoatPage } from './our-fleet-boat.page';

const routes: Routes = [
  {
    path: '',
    component: OurFleetBoatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OurFleetBoatPageRoutingModule {}
