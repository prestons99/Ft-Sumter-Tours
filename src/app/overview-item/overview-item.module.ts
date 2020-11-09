import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OverviewItemPageRoutingModule } from './overview-item-routing.module';

import { OverviewItemPage } from './overview-item.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		OverviewItemPageRoutingModule,
		ComponentsModule,
	],
	declarations: [OverviewItemPage]
})
export class OverviewItemPageModule { }
