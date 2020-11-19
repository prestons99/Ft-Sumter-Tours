import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoPagePageRoutingModule } from './info-page-routing.module';

import { InfoPagePage } from './info-page.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoPagePageRoutingModule,
    ComponentsModule,
  ],
  declarations: [InfoPagePage]
})
export class InfoPagePageModule {}
