import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoutesPageRoutingModule } from './routes-routing.module';
import { AgmCoreModule } from '@agm/core';
import { RoutesPage } from './routes.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoutesPageRoutingModule,
    AgmCoreModule,
    ComponentsModule,
    
  ],
  declarations: [RoutesPage]
})
export class RoutesPageModule {}
