import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FortSumterPageRoutingModule } from './fort-sumter-routing.module';

import { FortSumterPage } from './fort-sumter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FortSumterPageRoutingModule
  ],
  declarations: [FortSumterPage]
})
export class FortSumterPageModule {}
