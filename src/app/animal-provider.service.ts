import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AnimalProviderService {


	public isLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
	public animals$: BehaviorSubject<Array<any>> = new BehaviorSubject([]);

	constructor(){ }


	public refresh() {

		let animals = this.animals$.value;
		if(animals.length > 0) return;


		this.isLoading$.next(true);
		setTimeout(() => {

			let animals = [{
				id: "1",
				name: "Barnacle",
				description: "<h1 color=secondary>Barnacle</h1>",
				image: "assets/icon/barnacle.jpg",
				content: `<h2 class="item-text-wrap">Habitat:</h2>
				Barnacles are commonly found in the intertidal zone, rocky shores and estuaries. They are found attached to rocks, walls, stems of marsh grass, and boats. They have to live in areas where thery are covered by the tide at least two times daily. They prefer to settle in areas already colonized by other barnacles.
				<h2 class="item-text-wrap">Descrption:</h2>
				Barnacles are grey in coloration. Six overlapping plates of calcium carbonate surround their body; they secret a calcium carbonate shell around their soft body.
				The body is segmented; head at base; legs extended out in a fan-like pattern. Cirri are modified legs that look like fans waving in the water, collect food and water. Adult form has no eyes or sensory appendages.
				<h2 class="item-text-wrap">Size:</h2>
				Adults can reach 1/8inch(3mm) for one diameter, 1/4 inches(5mm) in another diameter.
				<h2 class="item-text-wrap">Predators:</h2>
				Snails, starfish, whelks and fish are common predators of the barnacle.
				<h2 class="item-text-wrap">Diet/Prey:</h2>
				Barnacles will feed on plankton and organic debris. They are filter feeders, will kick their legs out of their shell to collect food.
				<h2 class="item-text-wrap">Reproduction:</h2>
				Barnacles are hermaphrodites (containing both sexes) but will cross fertilize (fertilize with another individual.)
				In extreme cases will fertilize themselves. They will extend a tube out of their shell and into the shell of another; the eggs are fertilized and hatched inside that parent shell.
				Larvae live as zooplankton for weeks and will go through several molts before settling. They will change to the adult form after they attach to a substrate.
				`
			}, {
				id: "2",
				name: "Bottlenose Dolphin",
				description: "<h1>Bottlenose Dolphin</h1>",
				image: "assets/icon/bottlenose_dolphin.jpg",
				content: `<h2 class="item-text-wrap">Habitat:</h2>
				The bottlenose dolphin is considered "the most adaptable cetacean" because the species occurs in a wide variety of habitats.
				While pelagic populations exisst far offshore, others inhabit coastal waters, such as bays, estuaries, and rivers.
				<h2 class="item-text-wrap">Description</h2>
				Bottlenose dolphins are generally darker gray on dorsal side, and lighter gray to pink or white on the ventral side (counter shading).
				The bottlenose body is fusiform and streamline. The dorsal fin is curved towards the tail; which is a distinguishing characteristic between dolphins and porpoise.
				The head is wide and bears a short "bottle-like" beak. There exists a distinct crease between the beak, or rostrum, and the melon. Bottlenose dolphins can have 80-100 cone-shape teeth, which are used for grasping and ripping prey, as well as for communication.
				<h2 class="item-text-wrap">Size:</h2>
				Bottlenose dolphins range in length from 8 to 9ft (2.5-2.7m); weight ranges between 400 and 575lbs (200-250kg), with males usually larger than females.
				Another difference in size occurs between inshore and offshore animals; those bottlenose dolphins living offshore tend to be larger and darker in color.
				<h2 class="item-text-wrap">Predators:</h2>
				Natural enemies include killer whales and sharks.
				<h2 class="item-text-wrap">Diet/Prey:</h2>
				For bottlenose dolphins, habitat dictates diet. Near and inshore animals feed on bottom-dwelling fish and crustaceans; offshore bottlenoses eat a variety of pelagic fishes.
				When eating fish, dolphins usually swallow their prey headfirst so any dorsal spines do not injure their throat. Hunting behavior among bottlenose dolphins is also varied.
				Bottlenoses usually hunt in cooperation with each other, but individual foraging is not uncommon. In the Carolinas, bottlenose dolphins have been observed coralling a school of fish and forcing the fish up on a mud bank with their tail flukes.
				Dolphins are known to slide up onto the mud bank and catch the fish as they struggle back to the water. This behavior is known as "strand feeding."
				<h2 class="item-text-wrap">Reproduction:</h2>
				Sexual maturity in bottlenose dolphins is reached at 5-12 years for females, and 9-13 years for males.
				Most sexual activity among bottlenose dolphins occurs March through April. Females are spontaneous ovulators, which means they do not have a set ovulation cycle like most mammals; an adult female bottlenose dolphin may give birth every three years.
				After mating, the gestation period is one year. Female bottlenose dolphins give birth to one calf at a time, tail first.
				The calf is assisted to the surface for its first breath of air. The young dolphins nurse for 1 to 1 and a half years, but may stay with mother up to 6 years.
				When born, the dolphin calves are 40 to 50 inches long (100-130cm); the weight is approximately 40 pounds (20kg).
				`
			}, {
				id: "3",
				name: "Brown Pelican",
				description: "<h1>Brown Pelican</h1>",
				image: "assets/icon/brown_pelican.jpg"
			}, {
				id: "4",
				name: "Cannonball Jellyfish",
				description: "<h1>Cannonball Jellyfish</h1>",
				image: "assets/icon/cannonball_jellyfish.jpg"
			}, {
				id: "6",
				name: "Horseshoe Crab",
				description: "<h1>Horseshoe Crab</h1>",
				image: "assets/icon/horseshoe_crab.jpg"
			}, {
				id: "7",
				name: "Laughing Gull",
				description: "<h1>Laughing Gull</h1>",
				image: "assets/icon/laughing_gull.jpg"
			}, {
				id: "8",
				name: "Loggerhead Sea Turtle",
				description: "<h1>Loggerhead Sea Turtle</h1>",
				image: "assets/icon/loggerhead_sea_turtle.jpg"
			}, {
				id: "10",
				name: "Manatee",
				description: "<h1>Manatee</h1>",
				image: "assets/icon/manatee.jpg"
			}, {
				id: "11",
				name: "Moon Jelly",
				description: "<h1>Moon Jelly</h1>",
				image: "assets/icon/Moon_jellyfish_at_Gota_Sagher.JPG"
			}, {
				id: "12",
				name: "North American River Otter",
				description: "<h1>North American River Otter</h1>",
				image: "assets/icon/river_otter.jpg"
			}, {
				id: "13",
				name: "Osprey",
				description: "<h1>Osprey</h1>",
				image: "assets/icon/osprey.jpg"
			}, {
				id: "14",
				name: "Oyster",
				description: "<h1>Oyster</h1>",
				image: "assets/icon/Oyster_reef_Hunting_Island_SC.jpg"
			}, {
				id: "15",
				name: "Red Drum",
				description: "<h1>Red Drum</h1>",
				image: "assets/icon/Red_Drum.jpg"
			}, {
				id: "16",
				name: "Sand Fiddler Crab",
				description: "<h1>Sand Fiddler Crab</h1>",
				image: "assets/icon/sand_fiddler_crab.jpg"
			}, {
				id: "17",
				name: "Snowy Egret",
				description: "<h1>Snowy Egret</h1>",
				image: "assets/icon/Snowy_Egret.jpg",
				content : `
				
				`
			}
			];

			this.animals$.next(animals);
			this.isLoading$.next(false);

		}, 3000);
	}


	getAnimal(id) {
		let animals = this.animals$.value;
		let animal = null;
		animals.forEach((an) => {
			if (an.id == id) {
				animal = an;
			}
		})
		return animal;
	}




}
