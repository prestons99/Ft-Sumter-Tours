import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { take } from 'rxjs/operators';
import { ParseService } from '../parse.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.page.html',
	styleUrls: ['./home.page.scss'],
})
export class HomePage {


	public slidesOptions = {
		effect : "fade",
		fadeEffect: {
			crossFade: true
		},
		autoplay: {
			delay: 3000,
			loop: true
		}
	};

	constructor(
		private navCtrl : NavController,
		private parseService : ParseService,
		private router : Router,
	) { 
		this.parseService.fort.load();
	}


	goToWelcome(){
		this.navCtrl.navigateRoot(["/welcome"]);
	}

	goToVideo(){
		this.parseService.fort.data$
		.pipe(take(1))
		.subscribe((data)=>{
			this.router.navigate(["/video"],{
				queryParams : {
					forObjectId : data.objectId,
				},
			});
		});
		
	}

	



}
