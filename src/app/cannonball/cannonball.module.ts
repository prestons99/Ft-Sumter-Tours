import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CannonballPageRoutingModule } from './cannonball-routing.module';

import { CannonballPage } from './cannonball.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CannonballPageRoutingModule
  ],
  declarations: [CannonballPage]
})
export class CannonballPageModule {}
