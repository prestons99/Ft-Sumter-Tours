import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { debounceTime, delay, take } from 'rxjs/operators';
import { OrientationService } from '../orientation.service';
import { ParseService } from '../parse.service';

@Component({
	selector: 'app-time-travel',
	templateUrl: './time-travel.page.html',
	styleUrls: ['./time-travel.page.scss'],
})
export class TimeTravelPage implements OnInit, OnDestroy {


	provider : Observable<any>;

	constructor(
		private orientationService : OrientationService,
		private activatedRoute : ActivatedRoute,
		private parseService : ParseService,
	) { 

		
		this.parseService.timeTravel.load(true);

		this.activatedRoute.queryParams
		.pipe(take(1))
		.pipe(delay(2000))
		.subscribe((data)=>{
			let objectId = data.objectId;
			this.provider = this.parseService.timeTravel.forId(objectId);
		});

	}

	ngOnInit() {
		this.orientationService.lockToLandscape();
	}

	ngOnDestroy(){
		this.orientationService.lockToPortrait();
	}

}
