import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtterPage } from './otter.page';

const routes: Routes = [
  {
    path: '',
    component: OtterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtterPageRoutingModule {}
