import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CastlePickneyPage } from './castle-pickney.page';

const routes: Routes = [
  {
    path: '',
    component: CastlePickneyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CastlePickneyPageRoutingModule {}
