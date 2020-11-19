import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { ParseService } from '../parse.service';

@Component({
	selector: 'app-animal-view',
	templateUrl: './animal-view.page.html',
	styleUrls: ['./animal-view.page.scss'],
	encapsulation : ViewEncapsulation.None,
})
export class AnimalViewPage implements OnInit, OnDestroy {


	public animal : Observable<any> = new Observable();

	constructor(
		public activatedRoute: ActivatedRoute,
		public parseService : ParseService,
	) {

		console.log("Initiated...........");

		this.activatedRoute.queryParams
		.pipe(take(1))
		.subscribe((data) => {
			console.log("Take");
			let animalId = data.animalId;
			this.parseService.animals.load(true);
			if(animalId){
				this.animal = this.parseService.animals.forId(animalId);
			}
		});
	}

	ngOnInit() {
	}

	ngOnDestroy(){
		console.log("On destroed");
	}

}
