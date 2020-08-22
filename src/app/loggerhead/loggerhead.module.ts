import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoggerheadPageRoutingModule } from './loggerhead-routing.module';

import { LoggerheadPage } from './loggerhead.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoggerheadPageRoutingModule
  ],
  declarations: [LoggerheadPage]
})
export class LoggerheadPageModule {}
