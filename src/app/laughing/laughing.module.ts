import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaughingPageRoutingModule } from './laughing-routing.module';

import { LaughingPage } from './laughing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaughingPageRoutingModule
  ],
  declarations: [LaughingPage]
})
export class LaughingPageModule {}
