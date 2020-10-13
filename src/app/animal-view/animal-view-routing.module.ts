import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimalViewPage } from './animal-view.page';

const routes: Routes = [
  {
    path: '',
	component: AnimalViewPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalViewPageRoutingModule {}
