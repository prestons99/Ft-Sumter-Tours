import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BottlenosePage } from './bottlenose.page';

const routes: Routes = [
  {
    path: '',
    component: BottlenosePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BottlenosePageRoutingModule {}
