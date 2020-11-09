import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParseService } from '../parse.service';

@Component({
  selector: 'app-fort-sumter-image-view',
  templateUrl: './fort-sumter-image-view.page.html',
  styleUrls: ['./fort-sumter-image-view.page.scss'],
})
export class FortSumterImageViewPage{

	public provider;
	public type;

	constructor(
		private parseService : ParseService,
		private activatedRoute : ActivatedRoute,
	) { 
		this.provider = this.parseService.fort;
		this.parseService.fort.load();

		this.activatedRoute.queryParams.subscribe((data)=>{
			this.type = data.type;
		});

	}


}
