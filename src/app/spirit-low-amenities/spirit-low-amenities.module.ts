import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpiritLowAmenitiesPageRoutingModule } from './spirit-low-amenities-routing.module';

import { SpiritLowAmenitiesPage } from './spirit-low-amenities.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpiritLowAmenitiesPageRoutingModule
  ],
  declarations: [SpiritLowAmenitiesPage]
})
export class SpiritLowAmenitiesPageModule {}
