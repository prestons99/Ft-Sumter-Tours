import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { ParseService } from '../parse.service';

@Component({
	selector: 'app-fort-sumter',
	templateUrl: './fort-sumter.page.html',
	styleUrls: ['./fort-sumter.page.scss'],
})
export class FortSumterPage {

	public provider;

	constructor(
		private router: Router,
		private parseService : ParseService,
	) { 
		this.provider = this.parseService.fort;
		this.parseService.fort.load(true);
		this.parseService.timeTravel.load(true);
	}

	// go() {
	// 	this.router.navigate(['amenities']);
	// }

	overview() {
		this.router.navigate(['overview']);
	}

	imageView(type){
		this.router.navigate(['fort-sumter-image-view'],{
			queryParams : { type }
		})
	}

	timeTravel(){


		this.parseService.fort.data$
		.pipe(take(1))
		.subscribe((data)=>{
			if(data && data.timeMachine && data.timeMachine.objectId){
				this.router.navigate(['time-travel'],{
					queryParams : {
						objectId : data.timeMachine.objectId
					},
				});
			}
		});

		// let title = '';

		
	}


	tours() {
		
		this.parseService.fort.data$
		.pipe(take(1))
		.subscribe((data)=>{
		this.parseService.vrVideo.videoForReferenceId(data.objectId).pipe(take(1)).subscribe(console.log)
		});
	}
}

