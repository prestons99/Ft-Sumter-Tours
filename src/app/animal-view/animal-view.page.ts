import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimalProviderService } from '../animal-provider.service';

@Component({
	selector: 'app-animal-view',
	templateUrl: './animal-view.page.html',
	styleUrls: ['./animal-view.page.scss'],
})
export class AnimalViewPage implements OnInit {


	public animal = null;

	constructor(
		public activatedRoute: ActivatedRoute,
		public animalService: AnimalProviderService,
	) {
		this.activatedRoute.queryParams.subscribe((data) => {
			let animalId = data.animalId;
			this.animal = this.animalService.getAnimal(animalId);
		});
	}

	ngOnInit() {
	}

}
