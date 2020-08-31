import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpiritChsAmenitiesPageRoutingModule } from './spirit-chs-amenities-routing.module';

import { SpiritChsAmenitiesPage } from './spirit-chs-amenities.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpiritChsAmenitiesPageRoutingModule
  ],
  declarations: [SpiritChsAmenitiesPage]
})
export class SpiritChsAmenitiesPageModule {}
