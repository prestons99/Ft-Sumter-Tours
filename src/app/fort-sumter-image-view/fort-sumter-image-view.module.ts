import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FortSumterImageViewPageRoutingModule } from './fort-sumter-image-view-routing.module';

import { FortSumterImageViewPage } from './fort-sumter-image-view.page';
import { ComponentsModule } from '../components/components.module';
import { PinchZoomModule } from 'ngx-pinch-zoom';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	FortSumterImageViewPageRoutingModule,
	ComponentsModule,
	PinchZoomModule,
  ],
  declarations: [FortSumterImageViewPage]
})
export class FortSumterImageViewPageModule {}
