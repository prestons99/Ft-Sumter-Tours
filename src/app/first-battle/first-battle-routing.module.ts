import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstBattlePage } from './first-battle.page';

const routes: Routes = [
  {
    path: '',
    component: FirstBattlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstBattlePageRoutingModule {}
