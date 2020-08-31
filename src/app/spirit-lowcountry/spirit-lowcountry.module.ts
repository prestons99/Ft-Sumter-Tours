import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpiritLowcountryPageRoutingModule } from './spirit-lowcountry-routing.module';

import { SpiritLowcountryPage } from './spirit-lowcountry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpiritLowcountryPageRoutingModule
  ],
  declarations: [SpiritLowcountryPage]
})
export class SpiritLowcountryPageModule {}
