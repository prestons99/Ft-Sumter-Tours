import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OysterPageRoutingModule } from './oyster-routing.module';

import { OysterPage } from './oyster.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OysterPageRoutingModule
  ],
  declarations: [OysterPage]
})
export class OysterPageModule {}
