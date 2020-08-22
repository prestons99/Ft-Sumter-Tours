import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EgretPageRoutingModule } from './egret-routing.module';

import { EgretPage } from './egret.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EgretPageRoutingModule
  ],
  declarations: [EgretPage]
})
export class EgretPageModule {}
