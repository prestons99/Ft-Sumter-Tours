import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanonSpacerComponent } from './canon-spacer/canon-spacer.component';
import { BackgroundHeaderComponent } from './background-header/background-header.component';
import { BackButtonComponent } from './back-button/back-button.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@NgModule({
	declarations: [
		CanonSpacerComponent,
		BackgroundHeaderComponent,
		BackButtonComponent, 
		LoadingSpinnerComponent,
	],
	imports: [
		CommonModule
	],
	exports: [
		CanonSpacerComponent,
		BackgroundHeaderComponent,
		BackButtonComponent,
		LoadingSpinnerComponent
	],
})
export class ComponentsModule { }
