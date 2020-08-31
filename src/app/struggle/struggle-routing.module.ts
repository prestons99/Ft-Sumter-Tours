import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StrugglePage } from './struggle.page';

const routes: Routes = [
  {
    path: '',
    component: StrugglePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StrugglePageRoutingModule {}
