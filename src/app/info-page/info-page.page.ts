import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay, take } from 'rxjs/operators';
import { ParseService } from '../parse.service';

@Component({
	selector: 'app-info-page',
	templateUrl: './info-page.page.html',
	styleUrls: ['./info-page.page.scss'],
})
export class InfoPagePage implements OnInit {

	title : String;
	contentProvider : Observable<any>;

	constructor(
		private parseService : ParseService,
		private aRoute : ActivatedRoute,
	) { 

		this.parseService.config.load(true);
		

		this.aRoute.queryParams
		.pipe(take(1))
		.subscribe((data)=>{

			let type = data.type;

			if(type == "faq"){
				this.title = "FAQ";
			} else if(type == "privacyPolicy"){
				this.title = "Privacy Policy";
			} else if(type == "termsAndConditions"){
				this.title = "Terms & Conditions";
			}else{
				return;
			}

			this.contentProvider = this.parseService.config.data$.pipe(map((data)=>{
				if(!data){
					return "";
				}
				return data[type];
			})).pipe(shareReplay());

		})	






	}

	ngOnInit() {
	}

}
