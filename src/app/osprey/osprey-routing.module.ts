import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OspreyPage } from './osprey.page';

const routes: Routes = [
  {
    path: '',
    component: OspreyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OspreyPageRoutingModule {}
