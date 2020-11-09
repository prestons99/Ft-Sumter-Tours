import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimeTravelPage } from './time-travel.page';

const routes: Routes = [
  {
    path: '',
    component: TimeTravelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimeTravelPageRoutingModule {}
