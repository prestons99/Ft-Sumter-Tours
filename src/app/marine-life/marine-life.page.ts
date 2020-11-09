import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParseService } from '../parse.service';

@Component({
	selector: 'app-marine-life',
	templateUrl: './marine-life.page.html',
	styleUrls: ['./marine-life.page.scss'],
})
export class MarineLifePage {

	section: String = "overview";
	public provider;

	constructor(
		private router: Router,
		private parseService : ParseService,
	) { 
		this.parseService.config.load(true);
		this.provider = this.parseService.config;
	}


	changeSection(section) {
		this.section = section;
	}

	impact() {
		// this.router.navigate(['our-impact']);
	}

	animals() {
		this.router.navigate(['animals']);
	}

	ngOnInit() {
	}

}
