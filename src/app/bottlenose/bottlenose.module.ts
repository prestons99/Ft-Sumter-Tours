import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BottlenosePageRoutingModule } from './bottlenose-routing.module';

import { BottlenosePage } from './bottlenose.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BottlenosePageRoutingModule
  ],
  declarations: [BottlenosePage]
})
export class BottlenosePageModule {}
