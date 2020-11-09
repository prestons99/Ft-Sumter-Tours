import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanonSpacerComponent } from './canon-spacer/canon-spacer.component';
import { BackgroundHeaderComponent } from './background-header/background-header.component';
import { BackButtonComponent } from './back-button/back-button.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { BtnSquareComponent } from './btn-square/btn-square.component';
import { ImageItemComponent } from './image-item/image-item.component';

@NgModule({
	declarations: [
		CanonSpacerComponent,
		BackgroundHeaderComponent,
		BackButtonComponent, 
		LoadingSpinnerComponent, 
		BtnSquareComponent, 
		ImageItemComponent,
	],
	imports: [
		CommonModule
	],
	exports: [
		CanonSpacerComponent,
		BackgroundHeaderComponent,
		BackButtonComponent,
		LoadingSpinnerComponent,
		BtnSquareComponent,
		ImageItemComponent
	],
})
export class ComponentsModule { }
