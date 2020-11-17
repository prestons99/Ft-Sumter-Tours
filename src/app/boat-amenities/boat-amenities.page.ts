import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { ParseService } from '../parse.service';

@Component({
  selector: 'app-boat-amenities',
  templateUrl: './boat-amenities.page.html',
  styleUrls: ['./boat-amenities.page.scss'],
})
export class BoatAmenitiesPage implements OnInit {

	boat$ : Observable<any>;
	level : String = null;


	constructor(
		public activatedRoute : ActivatedRoute,
		public parseProvider : ParseService
	){
		this.parseProvider.fleet.load();
		this.activatedRoute.queryParams
		.pipe(take(1))
		.subscribe((params)=>{
			if(params && params.boatId){
				let boatId = params.boatId;
				this.boat$ = this.parseProvider.fleet.forBoatId(boatId);
			}
		});
	}

	setActiveImage($event){
		this.level = $event.detail.value;
	}

	segmentClicked(){
		
	}

	ngOnInit(){}

}
