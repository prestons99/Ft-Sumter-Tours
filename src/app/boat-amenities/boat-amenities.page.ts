import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ParseService } from '../parse.service';

@Component({
  selector: 'app-boat-amenities',
  templateUrl: './boat-amenities.page.html',
  styleUrls: ['./boat-amenities.page.scss'],
})
export class BoatAmenitiesPage implements OnInit {

	boat$ : Observable<any>;


	constructor(
		public activatedRoute : ActivatedRoute,
		public parseProvider : ParseService
	){
		this.parseProvider.fleet.load();
		this.activatedRoute.queryParams.subscribe((params)=>{
			if(params && params.boatId){
				let boatId = params.boatId;
				this.boat$ = this.parseProvider.fleet.forBoatId(boatId);
			}
		});
	}

	ngOnInit(){}

}
