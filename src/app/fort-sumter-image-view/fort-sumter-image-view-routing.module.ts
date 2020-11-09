import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FortSumterImageViewPage } from './fort-sumter-image-view.page';

const routes: Routes = [
  {
    path: '',
    component: FortSumterImageViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FortSumterImageViewPageRoutingModule {}
