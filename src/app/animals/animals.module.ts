import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimalsPageRoutingModule } from './animals-routing.module';

import { AnimalsPage } from './animals.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	AnimalsPageRoutingModule,
	ComponentsModule,
  ],
  declarations: [AnimalsPage]
})
export class AnimalsPageModule {}
