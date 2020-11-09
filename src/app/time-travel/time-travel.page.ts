import { Component, OnDestroy, OnInit } from '@angular/core';
import { OrientationService } from '../orientation.service';

@Component({
	selector: 'app-time-travel',
	templateUrl: './time-travel.page.html',
	styleUrls: ['./time-travel.page.scss'],
})
export class TimeTravelPage implements OnInit, OnDestroy {

	constructor(
		private orientationService : OrientationService
	) { }

	ngOnInit() {
		this.orientationService.lockToLandscape();
	}

	ngOnDestroy(){
		this.orientationService.lockToPortrait();
	}

}
