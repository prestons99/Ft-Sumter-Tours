import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanonSpacerComponent } from './canon-spacer/canon-spacer.component';
import { BackgroundHeaderComponent } from './background-header/background-header.component';

@NgModule({
	declarations: [
		CanonSpacerComponent, 
		BackgroundHeaderComponent,
	],
	imports: [
		CommonModule
	],
	exports: [
		CanonSpacerComponent,
		BackgroundHeaderComponent
	],
})
export class ComponentsModule { }
