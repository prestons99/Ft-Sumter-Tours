import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
		this.parseService.fort.load();
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


	// tours() {
	// 	this.router.navigate(['tours3d']);
	// }
}

