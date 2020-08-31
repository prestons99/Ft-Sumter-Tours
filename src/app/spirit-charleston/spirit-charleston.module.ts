import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpiritCharlestonPageRoutingModule } from './spirit-charleston-routing.module';

import { SpiritCharlestonPage } from './spirit-charleston.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpiritCharlestonPageRoutingModule
  ],
  declarations: [SpiritCharlestonPage]
})
export class SpiritCharlestonPageModule {}
