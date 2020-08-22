import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManateePageRoutingModule } from './manatee-routing.module';

import { ManateePage } from './manatee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManateePageRoutingModule
  ],
  declarations: [ManateePage]
})
export class ManateePageModule {}
