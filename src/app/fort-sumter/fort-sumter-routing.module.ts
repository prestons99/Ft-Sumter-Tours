import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FortSumterPage } from './fort-sumter.page';

const routes: Routes = [
  {
    path: '',
    component: FortSumterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FortSumterPageRoutingModule {}
