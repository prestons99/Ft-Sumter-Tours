import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeaconLocationsPageRoutingModule } from './beacon-locations-routing.module';

import { BeaconLocationsPage } from './beacon-locations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeaconLocationsPageRoutingModule
  ],
  declarations: [BeaconLocationsPage]
})
export class BeaconLocationsPageModule {}
