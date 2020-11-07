import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParseService } from '../parse.service';

@Component({
	selector: 'app-our-fleet',
	templateUrl: './our-fleet.page.html',
	styleUrls: ['./our-fleet.page.scss'],
})
export class OurFleetPage {

	public fleetProvider;

	constructor(
		private router: Router,
		private parseService : ParseService,
	){ 
		this.fleetProvider = parseService.fleet;
	}

	goToBoat(boat) {
		console.log(boat);
		this.router.navigate(['our-fleet-boat'],{
			queryParams : {
				boatId : boat.objectId
			}
		});
	}
}
