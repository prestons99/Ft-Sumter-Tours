import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorseshoePageRoutingModule } from './horseshoe-routing.module';

import { HorseshoePage } from './horseshoe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HorseshoePageRoutingModule
  ],
  declarations: [HorseshoePage]
})
export class HorseshoePageModule {}
