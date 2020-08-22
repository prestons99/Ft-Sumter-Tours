import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CannonballPage } from './cannonball.page';

const routes: Routes = [
  {
    path: '',
    component: CannonballPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CannonballPageRoutingModule {}
