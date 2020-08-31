import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StrugglePageRoutingModule } from './struggle-routing.module';

import { StrugglePage } from './struggle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StrugglePageRoutingModule
  ],
  declarations: [StrugglePage]
})
export class StrugglePageModule {}
