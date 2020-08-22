import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OurImpactPageRoutingModule } from './our-impact-routing.module';

import { OurImpactPage } from './our-impact.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OurImpactPageRoutingModule
  ],
  declarations: [OurImpactPage]
})
export class OurImpactPageModule {}
