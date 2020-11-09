import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverviewItemPage } from './overview-item.page';

const routes: Routes = [
  {
    path: '',
    component: OverviewItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OverviewItemPageRoutingModule {}
