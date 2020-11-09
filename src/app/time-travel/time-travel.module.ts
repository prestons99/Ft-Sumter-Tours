import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimeTravelPageRoutingModule } from './time-travel-routing.module';

import { TimeTravelPage } from './time-travel.page';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		TimeTravelPageRoutingModule
	],
	declarations: [TimeTravelPage]
})
export class TimeTravelPageModule { }
