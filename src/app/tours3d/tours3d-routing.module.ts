import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tours3dPage } from './tours3d.page';

const routes: Routes = [
  {
    path: '',
    component: Tours3dPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tours3dPageRoutingModule {}
