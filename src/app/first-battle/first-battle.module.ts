import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirstBattlePageRoutingModule } from './first-battle-routing.module';

import { FirstBattlePage } from './first-battle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirstBattlePageRoutingModule
  ],
  declarations: [FirstBattlePage]
})
export class FirstBattlePageModule {}
