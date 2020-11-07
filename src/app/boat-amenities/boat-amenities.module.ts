import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoatAmenitiesPageRoutingModule } from './boat-amenities-routing.module';

import { BoatAmenitiesPage } from './boat-amenities.page';
import { ComponentsModule } from '../components/components.module';
import { PinchZoomModule } from 'ngx-pinch-zoom';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	BoatAmenitiesPageRoutingModule,
	ComponentsModule,
	PinchZoomModule,
  ],
  declarations: [BoatAmenitiesPage]
})
export class BoatAmenitiesPageModule {}
