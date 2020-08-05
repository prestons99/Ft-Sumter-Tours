import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarineLifePage } from './marine-life.page';

const routes: Routes = [
  {
    path: '',
    component: MarineLifePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarineLifePageRoutingModule {}
