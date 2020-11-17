import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimeTravelPageRoutingModule } from './time-travel-routing.module';

import { TimeTravelPage } from './time-travel.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		TimeTravelPageRoutingModule,
		ComponentsModule,
	],
	declarations: [TimeTravelPage]
})
export class TimeTravelPageModule { }
