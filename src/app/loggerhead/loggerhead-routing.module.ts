import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoggerheadPage } from './loggerhead.page';

const routes: Routes = [
  {
    path: '',
    component: LoggerheadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoggerheadPageRoutingModule {}
