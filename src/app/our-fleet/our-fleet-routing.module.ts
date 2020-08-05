import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OurFleetPage } from './our-fleet.page';

const routes: Routes = [
  {
    path: '',
    component: OurFleetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OurFleetPageRoutingModule {}
