import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtterPageRoutingModule } from './otter-routing.module';

import { OtterPage } from './otter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtterPageRoutingModule
  ],
  declarations: [OtterPage]
})
export class OtterPageModule {}
