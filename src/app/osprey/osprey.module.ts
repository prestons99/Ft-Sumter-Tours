import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OspreyPageRoutingModule } from './osprey-routing.module';

import { OspreyPage } from './osprey.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OspreyPageRoutingModule
  ],
  declarations: [OspreyPage]
})
export class OspreyPageModule {}
