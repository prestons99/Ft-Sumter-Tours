import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AnimalProviderService } from '../animal-provider.service';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.page.html',
  styleUrls: ['./animals.page.scss'],
})
export class AnimalsPage implements OnInit {


	public animal = null;

	constructor(
		public activatedRoute: ActivatedRoute,
		public animalService : AnimalProviderService,
	) {
		this.activatedRoute.queryParams.subscribe((data)=>{
			let animalId = data.animalId;
			this.animal = this.animalService.getAnimal(animalId);
		});
	}

	ngOnInit() {
	}

}
