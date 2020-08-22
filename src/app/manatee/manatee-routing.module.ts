import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManateePage } from './manatee.page';

const routes: Routes = [
  {
    path: '',
    component: ManateePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManateePageRoutingModule {}
