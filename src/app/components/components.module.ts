import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanonSpacerComponent } from './canon-spacer/canon-spacer.component';



@NgModule({
  declarations: [CanonSpacerComponent],
  imports: [
    CommonModule
  ],
  exports : [
	  CanonSpacerComponent
  ]
})
export class ComponentsModule { }
