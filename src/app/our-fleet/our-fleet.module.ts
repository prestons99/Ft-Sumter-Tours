import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OurFleetPageRoutingModule } from './our-fleet-routing.module';

import { OurFleetPage } from './our-fleet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OurFleetPageRoutingModule
  ],
  declarations: [OurFleetPage]
})
export class OurFleetPageModule {}
