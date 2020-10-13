import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AnimalProviderService } from '../animal-provider.service';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.page.html',
  styleUrls: ['./animals.page.scss'],
})
export class AnimalsPage implements OnInit {

	constructor(
		public activatedRoute: ActivatedRoute,
		public animalService : AnimalProviderService,
		public router : Router,
	) {
		this.animalService.refresh();
		
	}

	openAnimal(animalId : String){
		this.router.navigate(['/animal-view'],{
			queryParams : {
				animalId : animalId
			}
		});
	}

	ngOnInit() {
	}

}
