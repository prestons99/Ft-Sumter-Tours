import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PelicanPage } from './pelican.page';

const routes: Routes = [
  {
    path: '',
    component: PelicanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PelicanPageRoutingModule {}
