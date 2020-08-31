import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tours3dPageRoutingModule } from './tours3d-routing.module';

import { Tours3dPage } from './tours3d.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tours3dPageRoutingModule
  ],
  declarations: [Tours3dPage]
})
export class Tours3dPageModule {}
