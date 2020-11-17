import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ParseService } from '../parse.service';

@Component({
	selector: 'app-time-machine',
	templateUrl: './time-machine.page.html',
	styleUrls: ['./time-machine.page.scss'],
})
export class TimeMachinePage{


	provider : any;

	constructor(
		private router : Router,
		private parseService : ParseService,
	){ 
		this.parseService.timeTravel.load(true);
		this.provider = this.parseService.timeTravel;
	}

	handleClick(item){
		this.router.navigate(['time-travel'],{
			queryParams : {
				objectId : item.objectId
			},
		});
	}



}
