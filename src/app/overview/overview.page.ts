import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParseService } from '../parse.service';

@Component({
	selector: 'app-overview',
	templateUrl: './overview.page.html',
	styleUrls: ['./overview.page.scss'],
})
export class OverviewPage {


	public fortProvider;
	public historyProvider;

	constructor(
		private router: Router, 
		public parseService: ParseService,
	) {
		this.fortProvider = this.parseService.fort;
		this.historyProvider = this.parseService.history;
		this.parseService.fort.load(true);
		this.parseService.history.load(true);
	}


	handleClick(item){
		this.router.navigate(['/overview-item'],{
			queryParams : {
				objectId : item.objectId
			}
		});
	}



	// FS1861() {
	// 	this.router.navigate(['construction']);
	// }

	// First() {
	// 	this.router.navigate(['first-battle']);
	// }

	// Struggle() {
	// 	this.router.navigate(['struggle']);
	// }

	// After() {
	// 	this.router.navigate(['after']);
	// }

	ngOnInit() {
	}

}
