import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HorseshoePage } from './horseshoe.page';

const routes: Routes = [
  {
    path: '',
    component: HorseshoePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HorseshoePageRoutingModule {}
