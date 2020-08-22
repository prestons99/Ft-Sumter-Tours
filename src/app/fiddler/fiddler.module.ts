import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiddlerPageRoutingModule } from './fiddler-routing.module';

import { FiddlerPage } from './fiddler.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiddlerPageRoutingModule
  ],
  declarations: [FiddlerPage]
})
export class FiddlerPageModule {}
