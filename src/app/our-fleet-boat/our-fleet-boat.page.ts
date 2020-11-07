import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavParams } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ParseService } from '../parse.service';

@Component({
	selector: 'app-our-fleet-boat',
	templateUrl: './our-fleet-boat.page.html',
	styleUrls: ['./our-fleet-boat.page.scss'],
})
export class OurFleetBoatPage{


	boat$ : Observable<any>;
	boatId : String;


	constructor(
		public activatedRoute : ActivatedRoute,
		public parseProvider : ParseService,
		public router : Router,
	){
		this.parseProvider.fleet.load();
		this.activatedRoute.queryParams.subscribe((params)=>{
			if(params && params.boatId){
				this.boatId = params.boatId;
				this.boat$ = this.parseProvider.fleet.forBoatId(this.boatId);
			}
		});
	}

	goToAmenities() {
		this.router.navigate(['/boat-amenities'],{
			queryParams : {
				boatId : this.boatId
			}
		});
	}

}
