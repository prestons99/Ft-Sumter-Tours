import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavParams } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ParseService } from '../parse.service';

@Component({
	selector: 'app-overview-item',
	templateUrl: './overview-item.page.html',
	styleUrls: ['./overview-item.page.scss'],
})
export class OverviewItemPage implements OnInit {

	public item : Observable<any> = new Observable();

	constructor(
		private parseService : ParseService,
		private activatedRoute : ActivatedRoute,
	){ 
		this.parseService.history.load(true);
		this.activatedRoute.queryParams.subscribe((data)=>{
			let objectId = data.objectId;
			if(objectId){
				this.item = this.parseService.history.forId(objectId);
			}
		})
	}

	ngOnInit() {
	}

}
