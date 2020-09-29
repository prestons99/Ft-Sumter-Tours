import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AnimalProviderService {


	public isLoading$ : BehaviorSubject<boolean> = new BehaviorSubject(false);
	public animals$ : BehaviorSubject<Array<any>> = new BehaviorSubject([]);

	constructor() { }


	public refresh(){
		this.isLoading$.next(true);
		setTimeout(()=>{
			
			let animals = [{
				id : 1,
				name : "Barnacle",
				description : "<h1>Barnacle</h1>",
				image : "src\assets\icon\barnacle.jpg"
			},{
				id : 2,
				name : "Bottlenose Dolphin",
				description : "<h1>Bottlenose Dolphin</h1>",
				image : "src\assets\icon\bottlenose_dolphin.jpg"
			},{
				id : 3,
				name : "Brown Pelican",
				description : "<h1>Brown Pelican</h1>",
				image : "src\assets\icon\brown_pelican.jpg"
			},{
				id : 4,
				name : "Cannonball Jellyfish",
				description : "<h1>Cannonball Jellyfish</h1>",
				image : "src\assets\icon\cannonball_jellyfish.jpg"
			},{
				id : 6,
				name : "Horseshoe Crab",
				description : "<h1>Horseshoe Crab</h1>",
				image : "src\assets\icon\horseshoe_crab.jpg"
			},{
				id : 7,
				name : "Laughing Gull",
				description : "<h1>Laughing Gull</h1>",
				image : "src\assets\icon\laughing_gull.jpg"
			},{
				id : 8,
				name : "Loggerhead Sea Turtle",
				description : "<h1>Loggerhead Sea Turtle</h1>",
				image : "src\assets\icon\loggerhead_sea_turtle.jpg"
			},{
				id : 10,
				name : "Manatee",
				description : "<h1>Manatee</h1>",
				image : "src\assets\icon\manatee.jpg"
      },{
        id: 11,
        name: "Moon Jelly",
        description : "<h1>Moon Jelly</h1>",
        image : "src\assets\icon\Moon_jellyfish_at_Gota_Sagher.JPG"
      },{
        id: 12,
        name: "North American River Otter",
        description : "<h1>North American River Otter</h1>",
        image : "src\assets\icon\river_otter.jpg"
      },{
        id: 13,
        name: "Osprey",
        description : "<h1>Osprey</h1>",
        image : "src\assets\icon\osprey.jpg"
      },{
        id: 14,
        name: "Oyster",
        description : "<h1>Oyster</h1>",
        image : "src\assets\icon\Oyster_reef_Hunting_Island_SC.jpg"
      },{
        id: 15,
        name: "Red Drum",
        description : "<h1>Red Drum</h1>",
        image : "src\assets\icon\Red_Drum.jpg"
      },{
        id: 16,
        name: "Sand Fiddler Crab",
        description : "<h1>Sand Fiddler Crab</h1>",
        image : "src\assets\icon\sand_fiddler_crab.jpg"
      },{
        id: 17,
        name: "Snowy Egret",
        description : "<h1>Snowy Egret</h1>",
        image : "src\assets\icon\Snowy_Egret.jpg"
      }
    ];

			this.animals$.next(animals);
			this.isLoading$.next(false);

		},3000);
	}


	getAnimal(id){
		let animals = this.animals$.value;
		let animal = null;
		animals.forEach((an)=>{
			if(an.id == id){
				animal = an;
			}
		})
		return animal;
	}




}
