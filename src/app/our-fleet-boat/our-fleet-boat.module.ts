import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OurFleetBoatPageRoutingModule } from './our-fleet-boat-routing.module';

import { OurFleetBoatPage } from './our-fleet-boat.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		OurFleetBoatPageRoutingModule,
		ComponentsModule,
	],
	declarations: [OurFleetBoatPage]
})
export class OurFleetBoatPageModule { }
