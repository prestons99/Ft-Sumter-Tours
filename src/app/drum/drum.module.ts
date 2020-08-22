import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrumPageRoutingModule } from './drum-routing.module';

import { DrumPage } from './drum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrumPageRoutingModule
  ],
  declarations: [DrumPage]
})
export class DrumPageModule {}
