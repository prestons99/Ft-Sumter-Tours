import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParseService } from '../parse.service';

@Component({
	selector: 'app-animals',
	templateUrl: './animals.page.html',
	styleUrls: ['./animals.page.scss'],
})
export class AnimalsPage implements OnInit {

	public provider;

	constructor(
		public activatedRoute: ActivatedRoute,
		public parseService : ParseService,
		public router: Router,
	) {	
		this.parseService.animals.load();
		this.provider = this.parseService.animals;
	}

	openAnimal(animal: any) {
		let animalId = animal.objectId;
		this.router.navigate(['animal-view'], {
			queryParams: {
				animalId: animalId
			}
		});
	}

	ngOnInit() {
	}

}
