import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimeMachinePageRoutingModule } from './time-machine-routing.module';

import { TimeMachinePage } from './time-machine.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TimeMachinePageRoutingModule,
    ComponentsModule,
  ],
  declarations: [TimeMachinePage]
})
export class TimeMachinePageModule {}
