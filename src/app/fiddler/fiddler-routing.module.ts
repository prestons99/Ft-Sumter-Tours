import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiddlerPage } from './fiddler.page';

const routes: Routes = [
  {
    path: '',
    component: FiddlerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiddlerPageRoutingModule {}
