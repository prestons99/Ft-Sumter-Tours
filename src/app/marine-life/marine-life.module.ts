import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarineLifePageRoutingModule } from './marine-life-routing.module';

import { MarineLifePage } from './marine-life.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	MarineLifePageRoutingModule,
	ComponentsModule,
  ],
  declarations: [MarineLifePage]
})
export class MarineLifePageModule {}
