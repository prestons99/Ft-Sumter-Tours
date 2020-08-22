import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarnaclePage } from './barnacle.page';

const routes: Routes = [
  {
    path: '',
    component: BarnaclePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarnaclePageRoutingModule {}
