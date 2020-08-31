import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CastlePickneyPageRoutingModule } from './castle-pickney-routing.module';

import { CastlePickneyPage } from './castle-pickney.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CastlePickneyPageRoutingModule
  ],
  declarations: [CastlePickneyPage]
})
export class CastlePickneyPageModule {}
