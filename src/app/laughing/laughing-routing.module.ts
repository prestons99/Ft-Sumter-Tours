import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaughingPage } from './laughing.page';

const routes: Routes = [
  {
    path: '',
    component: LaughingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaughingPageRoutingModule {}
