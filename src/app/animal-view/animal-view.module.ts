import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimalViewPageRoutingModule } from './animal-view-routing.module';

import { AnimalViewPage } from './animal-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimalViewPageRoutingModule
  ],
  declarations: [AnimalViewPage]
})
export class AnimalViewPageModule {}
