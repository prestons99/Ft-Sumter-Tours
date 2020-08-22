import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OysterPage } from './oyster.page';

const routes: Routes = [
  {
    path: '',
    component: OysterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OysterPageRoutingModule {}
