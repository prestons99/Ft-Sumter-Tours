import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BarnaclePageRoutingModule } from './barnacle-routing.module';

import { BarnaclePage } from './barnacle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BarnaclePageRoutingModule
  ],
  declarations: [BarnaclePage]
})
export class BarnaclePageModule {}
