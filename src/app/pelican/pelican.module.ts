import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PelicanPageRoutingModule } from './pelican-routing.module';

import { PelicanPage } from './pelican.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PelicanPageRoutingModule
  ],
  declarations: [PelicanPage]
})
export class PelicanPageModule {}
