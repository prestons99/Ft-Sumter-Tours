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
				content: `<font face="Helvetica Neue" size="4" color="005295"><p>Barnacles are commonly found in the intertidal zone, rocky shores and estuaries. They are found attached to rocks, walls, stems of marsh grass, and boats. They have to live in areas where they are covered by the tide at least two times daily. They prefer to settle in areas already colonized by other barnacles.</p></font>
				<font face="Helvetica Neue" size="4" color="005295"><p>Class: &nbsp;Maxillopoda</p>
				<p>Order: &nbsp;Sessilia &ndash; sessile barnacles</p>
				<p><span style="font-weight: 400;">Family: &nbsp;Chthamalidae</span></p>
				<p><strong>Description: </strong></p>
				<p>Barnacles are gray in coloration. Six overlapping plates of calcium&nbsp;carbonate surround their body; they secret a calcium carbonate shell&nbsp;around their soft body. The body is segmented; head at base; legs&nbsp;extended out in fan-like pattern. Cirri are modified legs that look like&nbsp;fans waving in the water, collect food and water. Adult form has no&nbsp;eyes or sensory appendages.</p>
				<p><strong>Size:</strong></p>
				<p>Adults can reach 1/8 inche (3 mm) for one diameter, &frac14; inches (5 mm)&nbsp;in another diameter.&nbsp;</p>
				<p><strong>Predators:</strong></p>
				<p>Snails, starfish, whelks and fish are common predators of the&nbsp;barnacle.</p>
				<p><strong>Diet/Prey:</strong></p>
				<p>Barnacles will feed on plankton and organic debris.&nbsp;They are filter feeders, will kick their legs out of their shell to collect food.</p>
				<p><strong>Reproduction:</strong></p>
				<p>Barnacles are hermaphrodites (containing both sexes) but will cross&nbsp;fertilize (fertilize with another individual). In extreme cases will&nbsp;fertilize themselves. They will extend a tube out of their shell and&nbsp;into the shell of another; the eggs are fertilized and hatched inside&nbsp;that parent shell. Larvae live as zooplankton for weeks and will go&nbsp;through several molts before settling. They will change to the adult&nbsp;form after they attach to a substrate.</p>
				<p><strong>Fun Facts:</strong></p>
				<ul>
				<li>If not smothered by other barnacles, they may live 5 years</li>
				<li>Cirripedia means &ldquo;curled feet.&rdquo;</li>
				<li>Are immobile unless attached to other animals like whales, turtles or horseshoe crabs</li>
				<li>When they settle on a hard substrate, they attach themselves head first; &ldquo;glue&rdquo; is secreted from the antenna gland to help&nbsp;them attach to the substrate</li>
				<li>Prefer to settle in areas already colonized by other barnacles</li>
				<li>When the tide is low they will close themselves inside their&nbsp;shell to keep from drying out</li>
				<li>They do molt like their relatives (crabs, lobster and shrimp);&nbsp;they molt the carapace of the animal inside the protective&nbsp;shell, not the protective shell (hard outer plates) itself. The&nbsp;outside of the shell will grow as the barnacle grows.</li>
				<li>May attach to the hull of boats which can increase drag on the boat</li>
				<li>Barnacles are &ldquo;nothing more than a little shrimp-like animal,&nbsp;standing on its head, in a limestone house and kicking food&nbsp;into its mouth&rdquo;, a quote by Louis Agassiz (a 19 th century&nbsp;Professor of Zoology at Harvard who was a contemporary&nbsp;and a critic of Darwin; made major contributions to the study&nbsp;of ichthyology)</li>
				</ul>
				<p>&nbsp;</p>
				<p><strong>Conservation&nbsp;Connection:</strong></p>
				<p>Barnacles live on hard surfaces at all latitudes at all depths from the&nbsp;intertidal zone to the deep sea. All barnacles live only in marine&nbsp;environments but many live in the intertidal region so spend part of&nbsp;their day without seawater around them. During this time they do not&nbsp;feed or do anything except try to keep moist. Adult acorn barnacles&nbsp;live attached to rocks and other hard surfaces often in dense colonies.&nbsp;Some are specialists attaching themselves to turtles or whales. Many&nbsp;coastal species grow no more than a few millimeters tall but some&nbsp;deep-water species are 80 mm. A net of six pairs of long legs and&nbsp;cirri protrudes from the cavity in which the animal lives and sweeps&nbsp;through the seawater to filter microscopic planktonic cells for food.&nbsp;Barnacles are extremely common throughout their range, and are&nbsp;even considered a nuisance when attached to the bottoms of boats and&nbsp;ships. Hence, there currently is no concern/status for the&nbsp;conservation of this species.</p>
				<p><strong>Status in SC:</strong> Common</p>
				<p><strong>Aliases:</strong> Fragile star barnacle, little gray barnacle, fragile barnacle</p></font>
				`
			}, {
				id: "2",
				name: "Bottlenose Dolphin",
				description: "<h1>Bottlenose Dolphin</h1>",
				image: "assets/icon/bottlenose_dolphin.jpg",
				content: `<font face="Helvetica Neue" size="4" color="005295"><p>The bottlenose dolphin is considered &ldquo;the most adaptable cetacean&rdquo;because the species occurs in a wide variety of habitats. While pelagic populations exist far offshore, others inhabit coastal waters,&nbsp;such as bays, estuaries, and rivers.</p></font>
				<font face="Helvetica Neue" size="4" color="005295"><p>Class: Mammalia - mammals</p>
				<p>Order: Cetacea - all whales, beluga and narwhal, river dolphins, ocean dolphins, and porpoises</p>
				<p>Family: Delphinidae - killer whales, marine dolphins, and pilot&nbsp;whales</p>
				<p>Subfamily: Delphininae</p>
				<p>The Family Delphinidae is the largest cetacean family. Animals in&nbsp;this family are collectively known as &ldquo;ocean dolphins,&rdquo; though some&nbsp;of their common names may include the word &ldquo;whale.&rdquo;&nbsp;Classification of the members of this family is debated, but includes&nbsp;several subfamilies, 17 genera, and at least 33 species. South&nbsp;Carolina reports at least 2 genera (2 species) occurring in marine and&nbsp;brackish environments.</p>
				<p>Bottlenose dolphins, due to their global range (see below), include&nbsp;Atlantic and Pacific varieties. These are not distinguished as separate&nbsp;species. Because of their distribution, bottlenose dolphins are&nbsp;regarded as the most abundant cetacean.&nbsp;Native relatives include the spotted dolphin, Stenella frontalis.&nbsp;Other marine mammals occurring in South Carolina coastal waters&nbsp;include: Cuvier&rsquo;s beaked whale, pygmy sperm whale, dwarf sperm&nbsp;whale, short-finned pilot whale, Blainville&rsquo;s beaked whale, and&nbsp;manatee.&nbsp;</p>
				<p><strong>Description:</strong></p>
				<p>Bottlenose dolphins are generally darker gray on dorsal side, and&nbsp;lighter gray to pink or white on the ventral side (counter shading). The bottlenose body is fusiform and streamline. The dorsal fin is&nbsp;&mdash;curved towards the tail&mdash;which is a distinguishing&nbsp;characteristic between dolphins and porpoise. The head is wide and bears a short &ldquo;bottle-like&rdquo; beak. There exists a&nbsp;distinct crease between the beak, or rostrum, and the melon.&nbsp;Bottlenose dolphins can have 80-100 cone-shaped teeth, which are&nbsp;used for grasping and ripping prey, as well as for communication.&nbsp;</p>
				<p><strong>Size:</strong></p>
				<p>Bottlenose dolphins&rsquo; range in length from 8 to 9ft (2.5-2.7m); weight&nbsp;ranges between 400 and 575lbs (200-250kg), with males usually&nbsp;larger than females. Another difference in size occurs between&nbsp;inshore and offshore animals: those bottlenose dolphins living&nbsp;offshore tend to be larger and darker in color.&nbsp;</p>
				<p><strong>Predators:</strong></p>
				<p>Natural enemies include killer whales and sharks.</p>
				<p><strong>Diet/Prey:</strong></p>
				<p>For bottlenose dolphins, habitat dictates diet. Near and inshore&nbsp;animals feed on bottom-dwelling fish and crustaceans; offshore&nbsp;bottlenoses eat a variety of pelagic fishes. When eating fish, dolphins&nbsp;usually swallow their prey headfirst so any dorsal spines do not injure&nbsp;their throat.&nbsp;Hunting behavior among bottlenose dolphins is also varied.&nbsp;Bottlenoses usually hunt in cooperation with each other, but&nbsp;individual foraging is not uncommon. In the Carolinas, bottlenose&nbsp;dolphins have been observed corralling a school of fish and forcing&nbsp;the fish up on a mud bank with their tail flukes. Dolphins are known&nbsp;to slide up onto the mud bank and catch the fish as they struggle back&nbsp;to the water. This behavior is known as &ldquo;strand feeding.&rdquo;</p>
				<p><strong>Reproduction:</strong></p>
				<p>Sexual maturity in bottlenose dolphins is reached at 5-12 years for&nbsp;females, and 9-13 years for males. Most sexual activity among&nbsp;bottlenose dolphins occurs March through April. Females are&nbsp;spontaneous ovulators, which means they do not have a set ovulation&nbsp;cycle like most mammals; an adult female bottlenose dolphin may&nbsp;give birth every three years. After mating, the gestation period is one year. Female bottlenose dolphins give birth to one calf at time, tail&nbsp;first. The calf is assisted to the surface for its first breath of air. The&nbsp;young dolphins nurse for 1to 1-&frac12; years, but may stay with mother up&nbsp;to 6 years.&nbsp;When born, the dolphin calves are 40 to 50 inches long (100-130cm);&nbsp;the weight is approximately 40 pounds (20kg). &nbsp;</p>
				<p><strong>Fun Facts:</strong></p>
				<ul>
				<li><strong>Life span:</strong> 20 years in the wild, over 45 years in controlled environments.</li>
				<li>Bottlenose dolphins are very social animals, traveling in&nbsp;groups that usually contain 4-12 members. Most pods are&nbsp;female dominated.</li>
				<li>Because of their sociable nature, you will frequently see these&nbsp;dolphins riding the bow-waves of boats, and will even&nbsp;approach swimmers</li>
				<li>This species uses echolocation (biosonar) as a way to search&nbsp;for and find food.</li>
				<li>A streamline design allows bottlenoses to swim up to 22 mph&nbsp;(35kph). Typical swimming speed, however, is around 10 to&nbsp;12 mph.</li>
				<li>Bottlenose dolphins can stay underwater for 10-12 minutes. They exchange about 80% of the oxygen in their lungs in a</li>
				<li>single breath. Compare to humans, which exchange only&nbsp;about 10-20% of the oxygen per breath.&nbsp;</li>
				<li>Deep sleep in dolphins may only occur in one hemisphere of&nbsp;the brain at a time.</li>
				<li>Classification of dolphins and porpoises is distinctly&nbsp;different. Dolphins are members of the Family Delphinidae,&nbsp;while porpoises are in the Family Phocoenidae.</li>
				<li>Observable physical differences between dolphins and&nbsp;porpoises include:</li>
				<li>Dolphins have cone-shaped teeth, and porpoises have&nbsp;spade-shaped teeth</li>
				<li>Dolphins have a longer, more pronounced rostrum (beak)</li>
				<li>Dolphins have a falcate (curving toward the tail) dorsal fin, and porpoises have a triangle-shaped dorsal fin</li>
				</ul>
				<p>&nbsp;</p>
				<p><strong>Conservation Connection:</strong></p>
				<p>Bottlenose dolphins inhabit temperate and tropical waters throughout&nbsp;the world. In the Pacific Ocean, bottlenose dolphins are found from&nbsp;northern Japan and California to Australia and Chile. They are also&nbsp;found offshore in the eastern tropical Pacific as far west as the&nbsp;Hawaiian islands. Off the California coast bottlenose dolphins have&nbsp;been observed as far north as Monterey, particularly during years of&nbsp;unusual warmth (Wells, et al., 1990). In the Atlantic Ocean,&nbsp;bottlenose dolphins are found from Nova Scotia and Norway to&nbsp;Patagonia and the tip of South Africa. They are the most abundant&nbsp;dolphin species along the United States from Cape Cod through the&nbsp;Gulf of Mexico. Bottlenose dolphins are also found in the&nbsp;Mediterranean Sea, and in the Indian Ocean from Australia to South&nbsp;Africa. Bottlenose dolphins inhabit the pelagic zone as well as&nbsp;harbors, bays, lagoons, gulfs, and estuaries. In the northwest&nbsp;Atlantic, there seem to be at least two ecotypes (forms) of the&nbsp;bottlenose dolphin. They can be differentiated by skull and body&nbsp;measurements as well as by characteristics of their blood. In general,&nbsp;the coastal ecotype seems to be adapted for warm, shallow waters. Its&nbsp;smaller body and larger flippers suggest increased maneuverability&nbsp;and heat dissipation. These dolphins frequent harbors, bays, lagoons, and estuaries. In general, the offshore ecotype seems to be adapted&nbsp;for cooler, deeper waters. Certain characteristics of their blood&nbsp;indicate that this form may be better suited for deep diving. Its larger&nbsp;body helps to conserve heat and defend itself against predators.</p>
				<p>Variations in water temperature, migration of food fish, and feeding&nbsp;habits may account for the seasonal movements of some dolphins to&nbsp;and from certain areas. Dolphins are active predators and eat a wide&nbsp;variety of fishes, squids, and crustaceans such as shrimps. The foods&nbsp;available to a dolphin vary with its geographic location.&nbsp;Bottlenose dolphins are protected by federal law, but are not listed as&nbsp;an endangered or threatened species. The Marine Mammal&nbsp;Protection Act of 1972 was passed to recognize the importance of&nbsp;marine mammals within marine ecosystems, and to promote marine mammals as &ldquo;resources of great international significance, aesthetic&nbsp;and recreational as well as economic.&rdquo; Furthermore, the Marine&nbsp;Mammal Protection Act serves to ensure that populations of marine&nbsp;mammals &ldquo;should not be permitted to diminish beyond the point at&nbsp;which they cease to be a significant functioning element in the&nbsp;ecosystem of which they are a part, and, consistent with this major&nbsp;objective, they should not be permitted to diminish below their&nbsp;optimum sustainable population level.&rdquo; In addition, dolphins receive&nbsp;protection from the International Whaling Commission (members of&nbsp;the IWC are requested to report direct and indirect catches of small&nbsp;cetaceans, including bottlenose dolphins, as part of their National&nbsp;Progress Reports on Cetacean Research), the IUCN (The&nbsp;International Union for the Conservation of Nature and Natural&nbsp;Resources (IUCN)/ Species Survival Commission (SSC) Cetacean Specialist Group Action Plan contains several projects related to&nbsp;bottlenose dolphin conservation, including studies of accidental&nbsp;entanglements), CITIES (The Convention on International Trade in&nbsp;Endangered Species of Wild Fauna and Flora (CITES) is an&nbsp;international treaty developed in 1973 to regulate trade in certain&nbsp;wildlife species. CITES protects all species of toothed whales. &nbsp;Bottlenose dolphins are listed on CITES Appendix II. Any trade&nbsp;concerning this species is strictly controlled), and marine zoological&nbsp;parks (In the protected environment of a marine zoological park,&nbsp;scientists can examine aspects of dolphin biology that are difficult or&nbsp;impossible to study in the wild).</p>
				<p>The following information is taken from the South Carolina State&nbsp;Legislature, Code of Laws. The information, regarding the status of&nbsp;marine mammals in South Carolina, is specifically part of the Marine&nbsp;Resources Act of 2000.</p>
				<p>SECTION 50-5- 2310. Exhibit of marine animal prohibited; penalty.</p>
				<p>[SC ST SEC 50-5- 2310]</p>
				<p>(A) It is unlawful to exhibit a marine mammal in this State.</p>
				<p>(B) In addition to any other penalty provided in this chapter, a person&nbsp;who violates this section is guilty of a misdemeanor and, upon&nbsp;conviction, must be fined not less than two hundred dollars, not more&nbsp;than one thousand dollars per mammal, or imprisoned for not more&nbsp;than thirty days.</p>
				<p>SECTION 50-5- 2517. Mammalian dolphin or porpoise; prohibited&nbsp;activities; penalty. [SC ST SEC 50-5- 2517]</p>
				<p>Except when authorized by a federal permit, it is unlawful for any&nbsp;person to catch, attempt to catch, feed, feed by hand, kill, or harass&nbsp;any mammalian dolphin or porpoise. A person who violates this&nbsp;section is guilty of a misdemeanor and, upon conviction, must be&nbsp;fined not less than two hundred fifty dollars nor more than one&nbsp;thousand dollars or imprisoned for not more than thirty days, or both.&nbsp;Beyond the laws that protect South Carolina&rsquo;s marine mammals, the&nbsp;efforts of citizens&mdash;fishermen, beach-goers, landowners, and even&nbsp;those who live far from the ocean&mdash;will ultimately help to preserve&nbsp;coastal and open ocean habitat. One threat to bottlenose dolphins&nbsp;comes in the form of garbage. Plastics such as shopping bags, six-&nbsp;pack rings, and soda bottles can be ingested or strangle cetaceans.</p>
				<p>Preventing all forms of pollution helps to ensure the survival of not&nbsp;only marine mammals, but also all marine plants and animals.</p></font>`
			}, {
				id: "3",
				name: "Brown Pelican",
				description: "<h1>Brown Pelican</h1>",
				image: "assets/icon/brown_pelican.jpg",
				content: `<font face="Helvetica Neue" size="4" color="005295"><p>The brown pelican is commonly found along the coast; ocean and salt marshes.&nbsp;They are found along both the west and east coasts of North, Central&nbsp;and South America.&nbsp;After the breeding season, flocks will migrate north along both the&nbsp;west and east coasts of N. America. Migration south occurs in&nbsp;preparation of the winter. Winters south along coasts of Americas.</p></font>
				<font face="Helvetica Neue" size="4" color="005295"><p>Class: Aves &ndash; birds</p>
				<p>Order: Pelecaniformes &ndash; includes pelicans, cormorants, gannets and&nbsp;boobies</p>
				<p>Family: Pelecanidae &ndash; which includes the American White Pelican Members of the order Pelecaniformes are colonial fish-eaters with a&nbsp;throat poach and webbed feet. There are about 55 species found worldwide.</p>
				<p>There are eight species of pelicans found worldwide. The Brown&nbsp;Pelican with a wingspan of 7 ft is one of the smallest pelicans; the&nbsp;largest of the pelican family can weigh up to 30 pounds.</p>
				<p><strong>Description:</strong></p>
				<p>The brown pelican has brown to gray plumage; brown to white head.&nbsp;They have a dark bill, a dark throat pouch and webbed feet. Their&nbsp;eyes are a pale yellow.&nbsp;Immature pelicans are brown-gray all over and will stay that way for&nbsp;3-4 years before reaching sexual maturity.</p>
				<p><strong>Size:</strong></p>
				<p>Adults can reach lengths of 3 &frac12; -4 &frac12; ft (107-137cm). The adults&nbsp;reach a maximum of about 8lbs. They can have a wingspan of 6-7ft&nbsp;(2m).</p>
				<p><strong>Predators:</strong></p>
				<p>Their greatest threat is human development and human-related&nbsp;environmental alterations.</p>
				<p><strong>Diet/Prey:</strong></p>
				<p>Their diet consists entirely of fish, mainly menhaden and mullet.&nbsp;The brown pelican will dive for fish from 10-30ft above the water or&nbsp;from the surface of the water. They will scoop fish, and water which&nbsp;they will drain out before swallowing the fish. May eat 4-6lbs of fish&nbsp;every day.</p>
				<p>Their style of feeding distinguishes them from the American White&nbsp;Pelican, which feeds while floating on the water instead of diving like&nbsp;the Brown Pelican.</p>
				<p><strong>Reproduction:</strong></p>
				<p>Most nesting occurs from March to April on uninhabited coastal&nbsp;islands. Nests are made of seaweed and marsh grass and are built&nbsp;about a foot high. Male will gather the materials for the nest while&nbsp;the female builds. The female will lay 2-4 white eggs; both parents&nbsp;incubate the eggs for about 28 days. Hatchlings are naked and blind&nbsp;at birth. They will grow down feathers at about 10-12 days. Young&nbsp;will fledge in 71-88 days. There is only one brood per year, unless&nbsp;the nest is destroyed.</p>
				<p><strong>Fun Facts</strong></p>
				<ul>
				<li>Have lived over 29 years in captivity</li>
				<li>State bird of Louisiana</li>
				<li>There is a protected breeding colony at Cape Romain, SC.</li>
				<li>They can hold 2-3 gallons of water and fish in their pouch at one time.</li>
				<li>Very gregarious, living in large flocks all year consisting of males and females; breeding, roosting and feeding together.</li>
				<li>Fly in &ldquo;V&rdquo; formation or in a straight line.</li>
				<li>Fly just above the surface of the water, watching for fish; if&nbsp;they spot a school, the lad bird swoops up and then dives, and&nbsp;all the other follow suit; crashing into the water, and then&nbsp;bobbing back to the surface, sometimes with fish in their&nbsp;poaches.</li>
				<li>Have been timed flying at speeds of 26mph.</li>
				<li>Have air sacs under their skin, behind their feathers, that help them with the impact of the water when diving for fish, also helping to bring them to the surface after a dive.</li>
				<li>In the summer they will pulsate their pouch when it is hot to help them keep cool (thermoregulation).</li>
				</ul>
				<p>&nbsp;</p>
				<p><strong>Conservation&nbsp;</strong><strong>Connection:</strong></p>
				<p>Brown pelicans are strictly coastal, and living on the Pacific, Atlantic, and Gulf coasts north to Nova Scotia. Brown pelicans dive from the air for fish. Menhaden account for 90-95% of their food. They also&nbsp;prey on pigfish, pinfish, herring, sheepshead, silversides, mullet,&nbsp;grass and top minnows, and they sometimes eat crustaceans, usually&nbsp;prawns. Though an adult pelican requires as much as 4 lbs of fish a&nbsp;day, they have been shown to not compete with commercial or sport&nbsp;fisherman, as they don't eat the same "quality" of fish as humans do.</p>
				<p>The brown pelican was first listed as an endangered species&nbsp;throughout all its range due to the consumption of fish that contained&nbsp;DDT and other hard pesticides on June 2, 1970. DDT causes the&nbsp;shell of the eggs fragile and thin so they usually would not make it&nbsp;through embryonic development. It was designated as delisted taxon,&nbsp;recovered, being monitored on the U.S. Atlantic Coast, Florida and&nbsp;Alabama on February 4, 1985. Populations have recovered since&nbsp;DDT was made unavailable, but the range of this species has been&nbsp;slightly reduced. They have been taken off the Endangered Species&nbsp;List in the Carolinas but are still listed as &ldquo;Endangered&rdquo; in other&nbsp;places (California, Louisiana, &nbsp;Mississippi, Oregon, Puerto Rico,&nbsp;Texas, Virgin Islands, Washington, and Central and South America).&nbsp;The brown pelican still remains a &ldquo;Species of Concern&rdquo; in South&nbsp;Carolina. The U.S. FWS California-Nevada Office (CNO) is the lead&nbsp;region for this entity.</p></font>
				`
			}, {
				id: "4",
				name: "Cannonball Jellyfish",
				description: "<h1>Cannonball Jellyfish</h1>",
				image: "assets/icon/cannonball_jellyfish.jpg",
				content: `<font face="Helvetica Neue" size="4" color="005295"><p>Found in estuary and saline waters. Range from New England to Brazil in the western Atlantic, from southern California to&nbsp;Ecuador in the eastern Pacific, and from the Sea of Japan in South China Sea&nbsp;in the western pacific.</p></font>
				<font face="Helvetica Neue" size="4" color="005295"><p>Class: Scyphozoa</p>
				<p>Order: Rhizostomae</p>
				<p>Family: Stomolophidae</p>
				<p><strong>Description:</strong></p>
				<p>The white, hemispherical bell of the cannonball jellyfish has a distinct&nbsp;chocolate brown pigmented border. Instead of long tentacles, the base of the bell has short, protruding oral arms with secondary mouth folds called&nbsp;scapulets. These scapulets are covered in mucus for trapping small prey.&nbsp;However, this mucus is thought to be a response to a disturbance, rather than&nbsp;for feeding.</p>
				<p><strong>Size:</strong></p>
				<p>The bell of a cannonball jellyfish can reach a size of 8 to 10 inches (20-25cm).</p>
				<p><strong>Predators:</strong></p>
				<p>Leatherback sea turtles and humans are their main predators. Leatherbacks&nbsp;rely on cannonball jellies as they migrate north from the Caribbean from April&nbsp;to early summer. Cannonball jellyfish are also commercially harvested as food&nbsp;for humans.</p>
				<p><strong>Diet/Prey:</strong></p>
				<p>Feed on zooplankton, primarily larval bivalves, and larval mollusks. Also red&nbsp;drum larvae.</p>
				<p><strong>Aquarium Diet:</strong></p>
				<p>Brine shrimp and krill</p>
				<p><strong>Reproduction:</strong></p>
				<p>Can reproduce both sexually and asexually. In sexual reproduction, sperm is&nbsp;released through the mouth of the male. The sperm swims into the mouth of&nbsp;the female where fertilization occurs. The life cycle of a jelly involves an&nbsp;alteration of generations in which the animal passes through two different&nbsp;body forms.</p>
				<p>Medusa &gt; Planula larva &gt;&nbsp;Polyp &gt;&nbsp;Budding polyp &gt;&nbsp;Ephyra &gt;&nbsp;Medusa</p>
				<p>Jellyfish normally live three to six months.</p>
				<p><strong>Fun Facts:</strong></p>
				<ul>
				<li>When disrupted the cannonball jelly secretes a mucus out of its&nbsp;nematocyst that contains a toxin. The toxin harms small fish in the&nbsp;immediate area, and drives away most predators, except for certain&nbsp;types of crab</li>
				<li>Cannonball jellies do not regularly sting humans, but still has toxins&nbsp;capable of causing cardiac problems and irregular heart rhythms</li>
				<li>Cannonball jellies are considered pests by commercial trawl fishermen&nbsp;because they clog and sometimes damage nets and slow sorting and&nbsp;trawl times.&nbsp;</li>
				</ul>
				<p>&nbsp;</p>
				<p><strong>Ecology:</strong></p>
				<p>The cannonball jellyfish is not a state or federally listed species; however,&nbsp;cannonballs are ecologically important because they are the major prey base&nbsp;for the endangered leatherback sea turtle (Dermochelys coriacea) and warrant&nbsp;conservation.</p>
				<p>They are known for their symbiotic relationships with other marine species,&nbsp;specifically 10 species of fishes, as well as juvenile long-nosed spider crabs.&nbsp;These symbionts feed on both the zooplankton taken in by the jellyfish and on&nbsp;the host&rsquo;s medusa. Some may also use the bell for protection.&nbsp;</p>
				<p><strong>Conservation Connection:</strong></p>
				<p>Since cannonball jellyfish are dependent on the abundance of zooplankton in&nbsp;near shore waters, any activity, marine or terrestrial, that could affect water quality, should be considered a detrimental to this species. Such problems&nbsp;include harmful algal blooms, oil spills and nonpoint source pollution. Also,&nbsp;cannonball jellyfish&rsquo;s dependence on bivalve veligers suggests a relationship&nbsp;with the health of bivalves.</p>
				<p><strong>Status:</strong> These jellyfish are the most common in our area.&nbsp;</p>
				<p><strong>Aliases:</strong> Also known as the jellyball, and the cabbage head jelly.</p></font>
				`
			}, {
				id: "6",
				name: "Horseshoe Crab",
				description: "<h1>Horseshoe Crab</h1>",
				image: "assets/icon/horseshoe_crab.jpg",
				content: `<font face="Helvetica Neue" size="4" color="005295"><p>Horseshoe crabs are commonly found on sandy bottoms of shallow&nbsp;coastal seawaters and bays. They can be found in the Atlantic Coast of North America and the Gulf of Mexico.</p></font>
				<font face="Helvetica Neue" size="4" color="005295"><p>Class: Merostomata</p>
				<p>Order: Xiphosura</p>
				<p>Family: Limulidae</p>
				<p>The horseshoe crab is a member of the phylum Arthropoda, which&nbsp;include insects, spiders, ticks, scorpions, crabs, shrimp, lobster and&nbsp;barnacles. They are also a member of the class Merostomata, which has no other species in North America.</p>
				<p><strong>Description:</strong></p>
				<p>Horseshoe crabs have a horseshoe-shaped front edge of the body,&nbsp;which tapers toward the back with a long tail. The body has two&nbsp;main parts or segments; the back end of the second segment is jagged&nbsp;with spiny tails. They are brown in coloration.&nbsp;Their mouth is found between the last 3 pairs of legs. Of the 5 pairs&nbsp;of legs, all except the last pair have small pincers. The last pair of&nbsp;legs is what helps them move along the bottom. The first pair of legs&nbsp;in the males is modified into what looks like swollen hooks, used to&nbsp;hold onto the females during mating. The tail is used to flip them&nbsp;right side up if they get turned over, to act as a rudder, and to plow&nbsp;through sand and mud.</p>
				<p>The horseshoe crab has six pairs of book gills; they are named book&nbsp;gills because they are broad and flat and lie like pages in a book.&nbsp;They use the gills to get oxygen from the water, if taken out of the&nbsp;water they can get oxygen from the air is their gills are kept moist.&nbsp;Their eyes are fixed into the shell, not on stalks. They have 9 &ldquo;eyes&rdquo;:&nbsp;2 compound eyes, 2 median eyes, 2 rudimentary eyes, 1 endoparietal eye, 2 degenerate eyes and multiple functioning photoreceptors on the&nbsp;telson (tail). The eyes serve to detect movement and for finding&nbsp;mates for mating purposes, they do not see very well in general.&nbsp;</p>
				<p><strong>Size:</strong></p>
				<p>Females can reach lengths up to 2ft (60cm) while the males are&nbsp;smaller.</p>
				<p><strong>Habitat:</strong></p>
				<p>Horseshoe crabs are commonly found on sandy bottoms of shallow&nbsp;coastal seawaters and bays.</p>
				<p><strong>Range:</strong></p>
				<p>They can be found in the Atlantic Coast of North America and the&nbsp;Gulf of Mexico.</p>
				<p><strong>Predators:</strong></p>
				<p>Horseshoe crab eggs and larvae are eaten by many different species&nbsp;of birds and some mammals. There are at least 11 species of&nbsp;migratory birds that use horseshoe crab eggs as their main food&nbsp;supply during their migration. The eggs are also a seasonal food for&nbsp;many invertebrates and fish.&nbsp;</p>
				<p><strong>Diet/Prey:</strong></p>
				<p>Horseshoe crabs will feed on worms, mollusks and small crustaceans.</p>
				<p><strong>Aquarium Diet:</strong></p>
				<p>Clams, smelt, squid, shrimp</p>
				<p><strong>Reproduction:</strong></p>
				<p>In the spring with a full moon high tide, paired crabs come ashore to&nbsp;spawn. The female emits a pheromone to attract males; males come&nbsp;ashore attached to the female. Sometimes more than one male will be&nbsp;attached to a female. The female uses her telson (tail) to dig a hole&nbsp;about 6 inches (15 cm) deep in the sand, just below the high tide line.&nbsp;There she will lay 200 eggs in the nest and emits another pheromone&nbsp;to signal to the male to release his sperm. The female drags the male&nbsp;over to the nest so he can release the sperm. The nest is not covered&nbsp;by the female, the blowing sand and waves will cover the nest. The&nbsp;mating coupling can nest 10 times in a season. After &nbsp;hatching, the&nbsp;larvae are washed back out to sea with the tide. Newly hatched&nbsp;individuals look like miniature adults and grow in shallow water.&nbsp;They will reach sexual maturity between 9 and 13 years.</p>
				<p><strong>Fun Facts:</strong></p>
				<ul>
				<li>May live 20-25 years.</li>
				<li>Is referred to as a crab but it actually belongs to the subphylum Chelicerata, which includes spiders, ticks,&nbsp;scorpions, and some extinct marine scorpions.</li>
				<li>This genus dates back over 350 million years, since before the&nbsp;dinosaurs; have remained nearly unchanged in all this time.</li>
				<li>Feeds mainly at night, can only eat while in motion.</li>
				<li>Has no jaws, but uses the bristles around the mouth to grind&nbsp;food.</li>
				<li>The endoparietal eye is a rudimentary eye located right on the&nbsp;midline at the front of the main shell. Along with the two&nbsp;lateral rudimentary eyes, it does not appear to be very&nbsp;functional any longer. It does still seem to sense UV radiation&nbsp;from the sun and is said to sense moonlight as well. That is&nbsp;important information for the internal &ldquo;clock&rdquo; of the crab, a&nbsp;portion of the brain that tracks light cycles and seasonal&nbsp;differences in length between day and night. This detection&nbsp;allows the timing of important points of the life cycle, such as&nbsp;when the animal should be mating, egg laying, migrating, etc.</li>
				<li>Can swim upside down using book gills.</li>
				<li>When they molt, the shell splits along the front and they walk&nbsp;out.</li>
				<li>Their blood is blue (not red) because it contains copper&nbsp;instead of iron. It is used in the medical field to check our&nbsp;devices for minute amounts of bacteria. It is said to be able to&nbsp;detect one part per trillion, which would be like trying to&nbsp;detect a grain of salt in an Olympic sized swimming pool.</li>
				<li>The only other species of horseshoe crabs are found in Asia,&nbsp;along India and Japan.</li>
				<li>Were used by Native Americans for food; their shell was used&nbsp;to help hollow out canoes, and their tails were attached to&nbsp;fishing spears.</li>
				<li>Because the female does not cover her eggs, and because&nbsp;some nests are dug up when a new female comes up to lay her&nbsp;eggs, birds quickly fly in to feed on the nutrient rich eggs.&nbsp;The red knot is a bird species whose life depends on the&nbsp;horseshoe crab eggs. The red knot spends winter in Tierra&nbsp;Del Fuego, and summers breeding in the Artic, which is a&nbsp;10,000-mile trip, it stops in the Delaware Bay to feed so that it&nbsp;can make the rest of the trip to the Artic. 80% of red knots&nbsp;and 30% of sanderlings in the western hemisphere rely on the&nbsp;horseshoe crab eggs of Delaware Bay to survive&nbsp;</li>
				</ul>
				<p>&nbsp;</p>
				<p><strong>Ecology:</strong></p>
				<p>Horseshoe crabs can be found along the eastern coast of the U.S.&nbsp;from Maine to Texas where they play an important ecological role in&nbsp;the food web. A decline in the number of horseshoe crabs will&nbsp;impact a variety of other species. Shorebirds primarily feed on&nbsp;horseshoe crab eggs exposed on the surface, but sufficient surface&nbsp;eggs are available only if horseshoe crabs are spawning at high&nbsp;densities. Therefore, adequate spawning densities must be&nbsp;maintained to ensure availability of horseshoe crab eggs for&nbsp;shorebirds. Sea turtles feed on adult horseshoe crabs, but their diet&nbsp;depends on relative abundance of the prey species. Horseshoe crab&nbsp;eggs and larvae are a seasonal food item of invertebrates and fish.&nbsp;During the spawning season (May through August), striped bass,&nbsp;white perch, American eel, killifish, silver perch, weakfish, kingfish,&nbsp;silversides, summer flounder and winter flounder eat eggs and larvae.&nbsp;In addition, as a crab ages and its growth rate slows, it sheds less&nbsp;frequently and begins to display a striking variety of hitchhikers. An&nbsp;abundance of smaller creatures live on (and off) the horseshoe crab in&nbsp;a symbiotic relationship. Inverts such as, sponges, the limulus leech,&nbsp;several species of crustaceans, mollusks, and snails depend on the&nbsp;horseshoe crab for transportation on the sea floor.</p>
				<p><strong>Conservation&nbsp;Connection:</strong></p>
				<p>Beach areas, nearshore shallow waters, intertidal flats, and deep bay&nbsp;waters are all essential to the success of the horseshoe crab as a&nbsp;species. Shoreline development and subsequent habitat degradation&nbsp;is likely an important threat to horseshoe crabs. Groins and bulkheads&nbsp;may adversely impact horseshoe crab spawning habitat. Bulkheads&nbsp;can block access to intertidal spawning beaches, while groins and&nbsp;seawalls intensify local shoreline erosion and prevent natural beach&nbsp;migration.</p>
				<p>Over the last century horseshoe crabs have been utilized for a variety&nbsp;of consumptive uses. In the early 1900&rsquo;s the horseshoe crabs were&nbsp;harvested to make fertilizer. More recently, horseshoe crabs have&nbsp;been taken in substantial numbers to provide bait for fisheries,&nbsp;including (primarily) the American eel and conch fisheries. The 1996&nbsp;fishing mortality accounted for at least 2 million individuals&nbsp;throughout the Atlantic Coast. The chitin in the horseshoe crab&rsquo;s&nbsp;carapace has been used to make skin creams, hair conditioners, and&nbsp;even contact lenses and sutures.</p>
				<p>They are also being used extensively in the medical field. Their&nbsp;blood has unique characteristics; it contains a chemical (LAL,&nbsp;Limulus ameboycte lysate) that will clot when exposed to bacteria.&nbsp;Due to this characteristic, it is used to test the purity of drugs and&nbsp;intravenous fluids. Their blood is also known to help speed up the&nbsp;clotting of human blood. Up to one-third of the horseshoe crab&rsquo;s&nbsp;blood volume is painlessly removed before the horseshoe crab is&nbsp;returned to the water. Research has shown that their blood volume&nbsp;returns to normal in about a week and in two to three months their blood cell count returns to normal. In addition, horseshoe crabs have&nbsp;been used in eye research, the manufacture of surgical sutures, and the development of wound dressings for burn victims. Researchers&nbsp;have discovered that the threads spun from the chitin work better than&nbsp;silk for stitching wounds. Research is being done to test the power of&nbsp;making a paste from the chitin to fill cracks in broken bones.</p>
				<p>Horseshoe crabs play a vital role in oceanic ecosystems and&nbsp;economics. Population densities of this species seem to be high, but&nbsp;scientists have noticed a recent trend of declines in some populations.&nbsp;One conservative estimate places the number at 2.3 to 4.5 million&nbsp;horseshoes on the Atlantic Coast between New Jersey and Virginia;&nbsp;other studies believe the number to be higher. There is no accurate&nbsp;scientific data on population decline in recent years, though anecdotal&nbsp;evidence seems to indicate smaller numbers during spawning season&nbsp;on many beaches. More research is needed to ensure the proper&nbsp;management of this very important ancient species.&nbsp;</p>
				<p><strong>Status in SC:</strong> Molts are common on coastal beaches.</p>
				<p><strong>Aliases:</strong> Were once called &ldquo;horse foot crab&rdquo; because their shells look much like a horse&rsquo;s hoof. Arrow-tail crab</p></font>
				`
			}, {
				id: "7",
				name: "Laughing Gull",
				description: "<h1>Laughing Gull</h1>",
				image: "assets/icon/laughing_gull.jpg",
				content: `<font face="Helvetica Neue" size="4" color="005295"><p>The laughing gull is typically found in coastal areas, but they are alsocommonly found in estuarine habitats. They can be found along the Atlantic and Gulf coasts of North America. Most will migrate to Florida during the winters.</p></font>
				<font face="Helvetica Neue" size="4" color="005295"><p>Class: Aves &ndash; birds</p>
				<p>Order: Charadriiformes - shorebirds</p>
				<p>Family: Laridae &ndash; gulls, terns, jaegers and skimmers The family Laridae consists of about 105 species, found on every continent.</p>
				<p><strong>Description:</strong></p>
				<p>The laughing gull has a white body with a black hood on their head, a black bill and a gray mantle. In the winter they have a dark red bill, their white plumage is a little duller and the color hood is not noticeable.&nbsp;Juveniles have a black bill with a faint gray-brown hood with brown&nbsp;wings.</p>
				<p><strong>Size:</strong></p>
				<p>Adults can reach lengths up to 15-17in (38-43cm).&nbsp;</p>
				<p><strong>Predators:</strong></p>
				<p>Hawks, owls, foxes, and raccoons prey upon chicks.</p>
				<p><strong>Diet/Prey:</strong></p>
				<p>The laughing gull will feed on fish, crabs, shrimp, insects, eggs and&nbsp;garbage. In the spring, they will feast on the eggs of the horseshoe crab.</p>
				<p>They are often seen taking handouts from people.&nbsp;The laughing gull will steal eggs from the nests of common terns. The&nbsp;will also steal fish from pelicans by landing on their head and plucking the&nbsp;fish right from the pelican&rsquo;s mouth.</p>
				<p><strong>Reproduction:</strong></p>
				<p>The laughing gull will nest in colonies in the ground on coastal islands or&nbsp;in tufts of grass/weeds in the salt marsh. Both the male and the female&nbsp;build the nest. The female will lay 3-4 eggs from May to June. Both the&nbsp;male and female will incubate the eggs for about 20 days. The young will&nbsp;be feed half digested food by both parents before moving onto solid food.&nbsp;Fledging occurs at about 35-40days.</p>
				<p><strong>Fun Facts: </strong></p>
				<ul>
				<li>Average lifespan in the natural environment is 2 years due to cold&nbsp;and flooding from storms.</li>
				<li>Only common black headed gull found in the Carolinas.</li>
				<li>Very vocal and noisy birds; calls loudly in the air or when perched; their call sounds like a series of loud, high pitched laughs.</li>
				<li>Commonly seen following ferry boats, where they will await food from the people on board</li>
				<li>Herring gulls may steal eggs from the laughing gull&rsquo;s nest&rsquo;s</li>
				<li>In Salt Lake City there is a monument dedicated to the seagull;&nbsp;between 1848-1850, seagulls saved the crops of the Morman&rsquo;s by&nbsp;eating swarms of black crickets that had been destroying their grain&nbsp;fields</li>
				</ul>
				<p>&nbsp;</p>
				<p><strong>Conservation Connection:</strong></p>
				<p>Laughing gulls live mainly on the Atlantic and Gulf Coasts of the United&nbsp;States, ranging from Maine down through Florida and Texas. The&nbsp;Laughing Gull always feeds near the sea. Its diet is comprised largely of&nbsp;fish and marine animals picked from beaches, estuaries and salt marshes. It&nbsp;will, however, eat almost anything edible. The Laughing Gull is not a good&nbsp;fisherman and rarely catches live food from the sea unless its prey is&nbsp;crippled. But it is a good thief, often robbing pelicans and terns of their&nbsp;catch. The Laughing Gull is a useful scavenger, and performs a useful&nbsp;service around harbors and beaches cleaning up fish stranded by the tide&nbsp;and any edible garbage they can find.&nbsp;During the 19 th century, populations of the laughing gull were in serious&nbsp;decline due to over hunting by the feather trade. The numbers recovered&nbsp;in the 20 th century though some populations are still low due to&nbsp;competition with other larger gulls. Overall the numbers for the laughing&nbsp;gull&rsquo;s population seem to be stable.&nbsp;Most gulls have benefited from human activities in this century, and the&nbsp;Laughing Gull is no exception. Dredged-material islands have provided&nbsp;laughing gulls with some of their favorite nesting locations, and human&nbsp;debris left on beaches has given these scavengers large food sources.&nbsp;Laughing gulls are considered very common throughout their native range,&nbsp;and there currently is no special concern/status for the conservation of this&nbsp;species.</p>
				<p><strong>Status in SC:</strong> Common</p>
				<p><strong>Aliases:</strong> Black-headed gull</p></font>
				`
			}, {
				id: "8",
				name: "Loggerhead Sea Turtle",
				description: "<h1>Loggerhead Sea Turtle</h1>",
				image: "assets/icon/loggerhead_sea_turtle.jpg",
				content: `<font face="Helvetica Neue" size="4" color="005295"><p>They prefer to feed in coastal bays and estuaries, and can sometimes be found feeding in the shallow waters along the continental shelf of the&nbsp;Atlantic Ocean. Loggerhead sea turtles have a wide range. They can be found throughout&nbsp;the western Atlantic from Canada to Argentina, with nests as north as the&nbsp;Carolina beaches. Circumglobal in tropical and temperate seas and&nbsp;oceans.</p> </font>
				<font face="Helvetica Neue" size="4" color="005295"> 
				<p>Class: Reptilia - snakes, crocodiles, lizards and turtles</p>
				<p>Order: Testudines - turtles</p>
				<p>Family: Cheloniidae - sea turtles which have shells covered with&nbsp;scutes (horny plates)</p>
				<p>The order Testudines is divided into three suborders: Pleurodira (side-&nbsp;necked turtles), Cryptodira (all other living species), and Amphichelydia&nbsp;(all extinct species).&nbsp;The other family of sea turtles is the family Dermochelyidae which&nbsp;includes only one species, the leatherback sea turtle, because rather than a&nbsp;shell covered with scutes it has leathery skin.</p>
				<p>Relatives of the loggerhead sea turtle include the green turtle (Chelonia&nbsp;mydas), hawksbill turtle (Eretmochelys imbricate), and Kemp&rsquo;s ridley&nbsp;(Lepidochelys kempi).</p>
				<p><strong>Description:</strong></p>
				<p>The loggerhead sea turtle gets its name from having a relatively large&nbsp;head. They are an overall reddish brown color, and may be heavily&nbsp;covered with barnacles. There are usually 5 scutes (plates) down the&nbsp;center of the carapace, the first one touching the nape of the neck. Their&nbsp;plastron is a yellow-brown color. They have heavy, strong jaws, and their&nbsp;front flippers are short and thick with 2 claws.</p>
				<p><strong>Size:</strong></p>
				<p>Loggerhead sea turtles range in size from 31-45 in (79-114 cm), and can weight between 170-350 lbs.</p>
				<p>&nbsp;</p>
				<p><strong>Predators:</strong></p>
				<p>Raccoons, snakes, wild dogs/cats, and humans sometimes eat their eggs.&nbsp;Ghost crabs, birds and raccoons eat the hatchlings. The adults are eaten by&nbsp;sharks, Orcas (killer whales), and occasionally groupers.&nbsp;</p>
				<p><strong>Diet/Prey:</strong></p>
				<p>Loggerhead sea turtles are, for the most part, carnivorous and feed mainly&nbsp;on jellyfish and shellfish, such as crabs, clams, mussels, and other&nbsp;invertebrates. They can easily open the shellfish with their strong jaws.</p>
				<p><strong>Aquarium Diet:</strong></p>
				<p>Assortment of whole fish (mackerel, salmon, capelin, bonita), squid, collard greens, and turtle gel</p>
				<p><strong>Reproduction:</strong></p>
				<p>The mating and courting between loggerhead sea turtles occurs in the&nbsp;ocean, close to nesting beaches. Only the females will come ashore to&nbsp;nest, while the males never return to shore after they are born. When&nbsp;mating, the male loggerhead sea turtle will gently nuzzle or nip at the&nbsp;female, and if she does not swim away he will climb on the back of the&nbsp;female&rsquo;s shell and will hold on using the claws in his front flippers. This&nbsp;can occur either on the surface of the water or under the water.</p>
				<p>Sometimes, competition is high for a female, and the males will become&nbsp;aggressive and fight each other; however, the female will sometimes mate with more than one male and store the sperm for several months, thereby&nbsp;fertilizing the eggs with the sperm from a genetically diverse group of males.&nbsp;Female loggerhead sea turtles tend to return to the same beach from which&nbsp;they hatched to lay their eggs. They usually nest at intervals of every 2-3&nbsp;years, and will nest 4 to 7 times in a season. The females lay an average of&nbsp;100-126 eggs, and the eggs will incubate for about 60 days. Loggerhead&nbsp;sea turtles prefer to nest at nighttime, on a dark and quiet beach. These&nbsp;turtles were not built for crawling on land, which makes finding a place to&nbsp;nest quite tiring. Once she picks a spot, she begins digging an egg&nbsp;chamber. When this is complete, she begins laying the eggs 2 or 3 at a&nbsp;time. The eggs are flexible and are covered in mucus, so they will not&nbsp;break when they drop into the egg chamber. Once all of the eggs are laid,&nbsp;the female will cover the nest with sand using her rear flippers. When she&nbsp;is finished, she goes back to sea to rest before laying her next clutch.</p>
				<p>When the eggs are incubating in the sand, the temperature can actually&nbsp;affect how quickly they incubate and whether or not there will be more&nbsp;males or females. The warmer the sand around the nest, the faster the&nbsp;embryos will grow, and there is more likely to be more females. The&nbsp;opposite is true if the sand is cooler.</p>
				<p>Sea turtle hatchlings get no help from either parent when they are born.&nbsp;They must emerge from the nest by themselves and find their way to the&nbsp;ocean. When inside the shell, the hatchlings have a temporary egg-tooth&nbsp;that they use to break open the shell. This tooth will fall off soon after&nbsp;they are born. They tend to emerge from the next in cooler temperature,&nbsp;such as at night or during a rainstorm. All the hatchlings will leave the&nbsp;nest at the same time and move towards the ocean, using moonlight as&nbsp;their guide. The must move quickly because they can be easily preyed&nbsp;upon by animals such as birds or cats.</p>
				<p><strong>Fun Facts: </strong></p>
				<ul>
				<li>The loggerhead sea turtle is the South Carolina state reptile&nbsp;(designated in 1988) and is the most commonly seen sea turtle off&nbsp;the SC coast.</li>
				<li>Females will return to the same beach every time to lay their eggs</li>
				<li>Sea turtles do not have an X or Y chromosome</li>
				<li>Sea turtles do not have the ability to retract their head and limbs inside their shell</li>
				<li>They reach sexual maturity between 20-30 years and will have a&nbsp;reproductive lifespan of about 30 years</li>
				<li>Sea turtle populations are facing problems due to human disturbances of nesting sites, such as noise, pollution, or lights,&nbsp;drowning in trawl nets, and pollution in the ocean</li>
				<li>Sea turtles have a very small brain and are opportunistic feeders&nbsp;(eat just about anything), so if they see a piece of trash like a&nbsp;plastic bag or a bottle in the ocean, it may look like a jellyfish or&nbsp;some other type of food to them. Eating this garbage is clearly not&nbsp;good for their stomach or their digestive system.&nbsp;</li>
				<li>Loggerhead sea turtles have been classified as threatened since&nbsp;1978, and are protected under the Endangered Species Act of&nbsp;1973.</li>
				<li>The loggerhead sea turtle is the only sea turtle that is not classified&nbsp;as endangered</li>
				<li>Sea turtles have lived on the earth for about 150 million years;&nbsp;before the time of the dinosaurs</li>
				</ul>
				<p>&nbsp;</p>
				<p><strong>Ecology:</strong></p>
				<p>Adults and juveniles feed in shallow waters of the continental shelves,&nbsp;often in water only a few tens of meters deep. They spend much of their&nbsp;time around reefs, or along the bottom. Adults sometimes travel for&nbsp;thousands of kilometers. Hatchlings and young juveniles do not dive,&nbsp;staying near the surface, often in association with mats of floating&nbsp;seaweed (sargassum). Loggerheads are also frequently found in bays and&nbsp;estuaries, and may enter river mouths. Atlantic loggerheads are mainly&nbsp;carnivorous. They eat a wide variety of marine animals, including&nbsp;sponges, jellyfish, crabs, clams, fish, squid, and oysters, as well as, algae&nbsp;and other plants. This appetite for jellyfish lead to many deaths of&nbsp;loggerheads, as they mistake debis, such as plastic bags discarded by&nbsp;careless boaters and beach goers, for their prey and ingest these items&nbsp;leading to sickness and even death.</p>
				<p><strong>Conservation&nbsp;Connection:</strong></p>
				<p>Humans make a wide variety of impacts on loggerhead populations that&nbsp;are leading to the ultimate decline of the species. Some adults killed by&nbsp;boat traffic, or drowned in shrimp trawls or other nets. As a result of the&nbsp;pollution of our waterways, eggs are now being found to contain&nbsp;insecticide residues and concentrations of heavy metals that can&nbsp;compromise the development of an embryo. With increased human&nbsp;development has come an increase in some nest predators, particularly the&nbsp;raccoon whose coastal populations have grown tremendously in the last&nbsp;30 years. If true, the current trend of global warming has lead to an&nbsp;increase in severe weather (i.e. hurricanes in the Carolina-Georgia region),&nbsp;and has damaged good nesting areas. In addition, there is evidence that&nbsp;increasing temperatures due to global warming in beginning to skew sex&nbsp;ratios of sea turtles towards populations with a majority of females&nbsp;because a turtles sex is temperature dependant, and the temperature that&nbsp;eggs are incubated at beneath the sand on beaches has been rising in&nbsp;conjunction with rising global temperatures. Samples of recent hatchling&nbsp;populations at nesting beaches in Florida have shown to be as much as&nbsp;90% female. As this trend continues, South Carolina&rsquo;s loggerhead nesting&nbsp;sites will become crucial for sustaining loggerhead populations into the&nbsp;future.</p>
				<p>The population of loggerhead sea turtles, as well as other species of sea&nbsp;turtles, is rapidly declining due to the increased amount of development&nbsp;on our beaches. Clean, quiet, dark beaches are essential for the&nbsp;reproduction of sea turtles. Development has caused an increase in&nbsp;pollution, noise, and artificial lighting along our beaches, which disturbs&nbsp;nesting females as well as hatchlings trying to make their way to the sea.&nbsp;Efforts are being made to make people aware of these issues through&nbsp;&ldquo;lights out for sea turtles&rdquo; signs in beach communities, as well as groups&nbsp;of volunteers patrolling the beaches looking for nests, marking them and&nbsp;putting up protective fencing around them.</p>
				<p>Loggerhead sea turtles are also an economically important species, and&nbsp;have shown to be a big part of the diet of rural communities, such as the&nbsp;Antillean and Caribbean areas. Their meat and eggs are used to make&nbsp;turtle burgers and turtle soup, and the eggs are even used to make cakes.&nbsp;In Cuba, the eggs are dried in the oviduct and sold like sausage. In&nbsp;addition, the turtles also provide oxidizing oil, which acts like varnish.&nbsp;Turtle farms are an effort being made towards sea turtle conservation.&nbsp;These turtle farms are attempting to breed and raise sea turtles in captivity&nbsp;and then release them into the wild when they are old enough to have a&nbsp;good chance of survival. This helps to stock populations that have been&nbsp;depleted by human exploitation or degradation of habitat. Other&nbsp;institutions have sea turtle rehabilitation programs, such as the South&nbsp;Carolina Aquarium, that houses sick and injured sea turtles, nurses them&nbsp;back to health, and then releases them back into the wild.</p>
				<p>The Loggerhead Sea Turtle was first listed by the U.S. Fish and Wildlife&nbsp;Service on July 28, 1978, and is currently designated as &lsquo;Threatened&rsquo;&nbsp;throughout its entire range, which includes, Alabama, American Samoa,&nbsp;California, Connecticut, Delaware, Florida, Georgia, Guam, Hawaii,&nbsp;Louisiana, Maryland, Mississippi, North Carolina, New Jersey, New&nbsp;York, Oregon, Puerto Rico, South Carolina, Texas, Virginia, Virgin&nbsp;Islands, Washington, and in tropical and temperate oceanic waters. The&nbsp;U.S. FWS Southeast Region (Region 4) is the lead region for this entity.&nbsp;There is a current petition to list the Northern and Florida Panhandle&nbsp;subpopulations as &lsquo;Endangered&rsquo;. Loggerhead&rsquo;s are protected under special rules 223.205 (shrimp netting regulations), 223.206 (transshipment&nbsp;of sea turtles) and 223.207 (fisheries regulations), and also have protected&nbsp;critical habitat within its range. In addition, loggerheads receive&nbsp;protection against illegal trade under Appendix I of CITIES, and&nbsp;international protection with its &lsquo;Endangered&rsquo; listing on the IUCN&rsquo;s Red&nbsp;List.</p>
				<p><strong>Status in SC:</strong> Common</p></font>
				`
			}, {
				id: "10",
				name: "Manatee",
				description: "<h1>Manatee</h1>",
				image: "assets/icon/manatee.jpg",
				content: `<font face="Helvetica Neue" size="4" color="005295"> <p>The manatee can be found in fresh, brackish, or salt water; they tend&nbsp;to stay near the coastline or in coastal lagoons, rivers and springs.&nbsp;They are mainly tropical in distribution.&nbsp;The manatee has been known to travel up the coast to the Chesapeake&nbsp;Bay and as far west as Texas, but are typically only found off the&nbsp;Florida coast here in the U.S.; Gulf of Mexico, Caribbean Sea-from Florida to Guyana.</p> </font>
				<font face="Helvetica Neue" size="4" color="005295"> 
				<p>Class: Reptilia - snakes, crocodiles, lizards and turtles</p>
				<p>Order: Testudines - turtles</p>
				<p>Family: Cheloniidae - sea turtles which have shells covered with&nbsp;scutes (horny plates)</p>
				<p>The order Testudines is divided into three suborders: Pleurodira (side-&nbsp;necked turtles), Cryptodira (all other living species), and Amphichelydia&nbsp;(all extinct species).&nbsp;The other family of sea turtles is the family Dermochelyidae which&nbsp;includes only one species, the leatherback sea turtle, because rather than a&nbsp;shell covered with scutes it has leathery skin.</p>
				<p>Relatives of the loggerhead sea turtle include the green turtle (Chelonia&nbsp;mydas), hawksbill turtle (Eretmochelys imbricate), and Kemp&rsquo;s ridley&nbsp;(Lepidochelys kempi).</p>
				<p><strong>Description:</strong></p>
				<p>The loggerhead sea turtle gets its name from having a relatively large&nbsp;head. They are an overall reddish brown color, and may be heavily&nbsp;covered with barnacles. There are usually 5 scutes (plates) down the&nbsp;center of the carapace, the first one touching the nape of the neck. Their&nbsp;plastron is a yellow-brown color. They have heavy, strong jaws, and their&nbsp;front flippers are short and thick with 2 claws.</p>
				<p><strong>Size:</strong></p>
				<p>Loggerhead sea turtles range in size from 31-45 in (79-114 cm), and can weight between 170-350 lbs.</p>
				<p>&nbsp;</p>
				<p><strong>Predators:</strong></p>
				<p>Raccoons, snakes, wild dogs/cats, and humans sometimes eat their eggs.&nbsp;Ghost crabs, birds and raccoons eat the hatchlings. The adults are eaten by&nbsp;sharks, Orcas (killer whales), and occasionally groupers.&nbsp;</p>
				<p><strong>Diet/Prey:</strong></p>
				<p>Loggerhead sea turtles are, for the most part, carnivorous and feed mainly&nbsp;on jellyfish and shellfish, such as crabs, clams, mussels, and other&nbsp;invertebrates. They can easily open the shellfish with their strong jaws.</p>
				<p><strong>Aquarium Diet:</strong></p>
				<p>Assortment of whole fish (mackerel, salmon, capelin, bonita), squid, collard greens, and turtle gel</p>
				<p><strong>Reproduction:</strong></p>
				<p>The mating and courting between loggerhead sea turtles occurs in the&nbsp;ocean, close to nesting beaches. Only the females will come ashore to&nbsp;nest, while the males never return to shore after they are born. When&nbsp;mating, the male loggerhead sea turtle will gently nuzzle or nip at the&nbsp;female, and if she does not swim away he will climb on the back of the&nbsp;female&rsquo;s shell and will hold on using the claws in his front flippers. This&nbsp;can occur either on the surface of the water or under the water.</p>
				<p>Sometimes, competition is high for a female, and the males will become&nbsp;aggressive and fight each other; however, the female will sometimes mate with more than one male and store the sperm for several months, thereby&nbsp;fertilizing the eggs with the sperm from a genetically diverse group of males.&nbsp;Female loggerhead sea turtles tend to return to the same beach from which&nbsp;they hatched to lay their eggs. They usually nest at intervals of every 2-3&nbsp;years, and will nest 4 to 7 times in a season. The females lay an average of&nbsp;100-126 eggs, and the eggs will incubate for about 60 days. Loggerhead&nbsp;sea turtles prefer to nest at nighttime, on a dark and quiet beach. These&nbsp;turtles were not built for crawling on land, which makes finding a place to&nbsp;nest quite tiring. Once she picks a spot, she begins digging an egg&nbsp;chamber. When this is complete, she begins laying the eggs 2 or 3 at a&nbsp;time. The eggs are flexible and are covered in mucus, so they will not&nbsp;break when they drop into the egg chamber. Once all of the eggs are laid,&nbsp;the female will cover the nest with sand using her rear flippers. When she&nbsp;is finished, she goes back to sea to rest before laying her next clutch.</p>
				<p>When the eggs are incubating in the sand, the temperature can actually&nbsp;affect how quickly they incubate and whether or not there will be more&nbsp;males or females. The warmer the sand around the nest, the faster the&nbsp;embryos will grow, and there is more likely to be more females. The&nbsp;opposite is true if the sand is cooler.</p>
				<p>Sea turtle hatchlings get no help from either parent when they are born.&nbsp;They must emerge from the nest by themselves and find their way to the&nbsp;ocean. When inside the shell, the hatchlings have a temporary egg-tooth&nbsp;that they use to break open the shell. This tooth will fall off soon after&nbsp;they are born. They tend to emerge from the next in cooler temperature,&nbsp;such as at night or during a rainstorm. All the hatchlings will leave the&nbsp;nest at the same time and move towards the ocean, using moonlight as&nbsp;their guide. The must move quickly because they can be easily preyed&nbsp;upon by animals such as birds or cats.</p>
				<p><strong>Fun Facts: </strong></p>
				<ul>
				<li>The loggerhead sea turtle is the South Carolina state reptile&nbsp;(designated in 1988) and is the most commonly seen sea turtle off&nbsp;the SC coast.</li>
				<li>Females will return to the same beach every time to lay their eggs</li>
				<li>Sea turtles do not have an X or Y chromosome</li>
				<li>Sea turtles do not have the ability to retract their head and limbs inside their shell</li>
				<li>They reach sexual maturity between 20-30 years and will have a&nbsp;reproductive lifespan of about 30 years</li>
				<li>Sea turtle populations are facing problems due to human disturbances of nesting sites, such as noise, pollution, or lights,&nbsp;drowning in trawl nets, and pollution in the ocean</li>
				<li>Sea turtles have a very small brain and are opportunistic feeders&nbsp;(eat just about anything), so if they see a piece of trash like a&nbsp;plastic bag or a bottle in the ocean, it may look like a jellyfish or&nbsp;some other type of food to them. Eating this garbage is clearly not&nbsp;good for their stomach or their digestive system.&nbsp;</li>
				<li>Loggerhead sea turtles have been classified as threatened since&nbsp;1978, and are protected under the Endangered Species Act of&nbsp;1973.</li>
				<li>The loggerhead sea turtle is the only sea turtle that is not classified&nbsp;as endangered</li>
				<li>Sea turtles have lived on the earth for about 150 million years;&nbsp;before the time of the dinosaurs</li>
				</ul>
				<p>&nbsp;</p>
				<p><strong>Ecology:</strong></p>
				<p>Adults and juveniles feed in shallow waters of the continental shelves,&nbsp;often in water only a few tens of meters deep. They spend much of their&nbsp;time around reefs, or along the bottom. Adults sometimes travel for&nbsp;thousands of kilometers. Hatchlings and young juveniles do not dive,&nbsp;staying near the surface, often in association with mats of floating&nbsp;seaweed (sargassum). Loggerheads are also frequently found in bays and&nbsp;estuaries, and may enter river mouths. Atlantic loggerheads are mainly&nbsp;carnivorous. They eat a wide variety of marine animals, including&nbsp;sponges, jellyfish, crabs, clams, fish, squid, and oysters, as well as, algae&nbsp;and other plants. This appetite for jellyfish lead to many deaths of&nbsp;loggerheads, as they mistake debis, such as plastic bags discarded by&nbsp;careless boaters and beach goers, for their prey and ingest these items&nbsp;leading to sickness and even death.</p>
				<p><strong>Conservation&nbsp;Connection:</strong></p>
				<p>Humans make a wide variety of impacts on loggerhead populations that&nbsp;are leading to the ultimate decline of the species. Some adults killed by&nbsp;boat traffic, or drowned in shrimp trawls or other nets. As a result of the&nbsp;pollution of our waterways, eggs are now being found to contain&nbsp;insecticide residues and concentrations of heavy metals that can&nbsp;compromise the development of an embryo. With increased human&nbsp;development has come an increase in some nest predators, particularly the&nbsp;raccoon whose coastal populations have grown tremendously in the last&nbsp;30 years. If true, the current trend of global warming has lead to an&nbsp;increase in severe weather (i.e. hurricanes in the Carolina-Georgia region),&nbsp;and has damaged good nesting areas. In addition, there is evidence that&nbsp;increasing temperatures due to global warming in beginning to skew sex&nbsp;ratios of sea turtles towards populations with a majority of females&nbsp;because a turtles sex is temperature dependant, and the temperature that&nbsp;eggs are incubated at beneath the sand on beaches has been rising in&nbsp;conjunction with rising global temperatures. Samples of recent hatchling&nbsp;populations at nesting beaches in Florida have shown to be as much as&nbsp;90% female. As this trend continues, South Carolina&rsquo;s loggerhead nesting&nbsp;sites will become crucial for sustaining loggerhead populations into the&nbsp;future.</p>
				<p>The population of loggerhead sea turtles, as well as other species of sea&nbsp;turtles, is rapidly declining due to the increased amount of development&nbsp;on our beaches. Clean, quiet, dark beaches are essential for the&nbsp;reproduction of sea turtles. Development has caused an increase in&nbsp;pollution, noise, and artificial lighting along our beaches, which disturbs&nbsp;nesting females as well as hatchlings trying to make their way to the sea.&nbsp;Efforts are being made to make people aware of these issues through&nbsp;&ldquo;lights out for sea turtles&rdquo; signs in beach communities, as well as groups&nbsp;of volunteers patrolling the beaches looking for nests, marking them and&nbsp;putting up protective fencing around them.</p>
				<p>Loggerhead sea turtles are also an economically important species, and&nbsp;have shown to be a big part of the diet of rural communities, such as the&nbsp;Antillean and Caribbean areas. Their meat and eggs are used to make&nbsp;turtle burgers and turtle soup, and the eggs are even used to make cakes.&nbsp;In Cuba, the eggs are dried in the oviduct and sold like sausage. In&nbsp;addition, the turtles also provide oxidizing oil, which acts like varnish.&nbsp;Turtle farms are an effort being made towards sea turtle conservation.&nbsp;These turtle farms are attempting to breed and raise sea turtles in captivity&nbsp;and then release them into the wild when they are old enough to have a&nbsp;good chance of survival. This helps to stock populations that have been&nbsp;depleted by human exploitation or degradation of habitat. Other&nbsp;institutions have sea turtle rehabilitation programs, such as the South&nbsp;Carolina Aquarium, that houses sick and injured sea turtles, nurses them&nbsp;back to health, and then releases them back into the wild.</p>
				<p>The Loggerhead Sea Turtle was first listed by the U.S. Fish and Wildlife&nbsp;Service on July 28, 1978, and is currently designated as &lsquo;Threatened&rsquo;&nbsp;throughout its entire range, which includes, Alabama, American Samoa,&nbsp;California, Connecticut, Delaware, Florida, Georgia, Guam, Hawaii,&nbsp;Louisiana, Maryland, Mississippi, North Carolina, New Jersey, New&nbsp;York, Oregon, Puerto Rico, South Carolina, Texas, Virginia, Virgin&nbsp;Islands, Washington, and in tropical and temperate oceanic waters. The&nbsp;U.S. FWS Southeast Region (Region 4) is the lead region for this entity.&nbsp;There is a current petition to list the Northern and Florida Panhandle&nbsp;subpopulations as &lsquo;Endangered&rsquo;. Loggerhead&rsquo;s are protected under special rules 223.205 (shrimp netting regulations), 223.206 (transshipment&nbsp;of sea turtles) and 223.207 (fisheries regulations), and also have protected&nbsp;critical habitat within its range. In addition, loggerheads receive&nbsp;protection against illegal trade under Appendix I of CITIES, and&nbsp;international protection with its &lsquo;Endangered&rsquo; listing on the IUCN&rsquo;s Red&nbsp;List.</p>
				<p><strong>Status in SC:</strong> Common</p> </font>
				`
			}, {
				id: "11",
				name: "Moon Jelly",
				description: "<h1>Moon Jelly</h1>",
				image: "assets/icon/Moon_jellyfish_at_Gota_Sagher.JPG",
				content: `<font face="Helvetica Neue" size="4" color="005295"> <p>The moon jelly can be found in open waters. They are commonly found in open waters of the Atlantic Ocean, the Indian&nbsp;Ocean, the Pacific Ocean, and the Mediterranean Sea.</p> </font>
				<font face="Helvetica Neue" size="4" color="005295"> 
				<p>Class: Scyphozoa &ndash; jellyfish</p>
				<p>Order: Semaeostomeae</p>
				<p>Family: Ulmaridae</p>
				<p>Moon jellies are a member of the Phylum Cnidaria, which includes coral,&nbsp;jellyfish and other anemones. They are considered &ldquo;true jellyfish&rdquo; because the body is filled with mesoglea (single-cellular jellylike substance), not&nbsp;hollow (siphonophores) like the man-of- war.</p>
				<p><strong>Description</strong><strong>:</strong></p>
				<p>Moon jellies have a blue to transparent body; barely visible short tentacles&nbsp;around the rim of the body; four-leaf clover pattern visible in the body; and&nbsp;four fleshy oral arms located underneath. They may have as many as 250&nbsp;tentacles. The four-leaf clover pattern seen are the stomachs and also the reproductive&nbsp;tissues (gonads). The gonads are pink in males and white in females.&nbsp;</p>
				<p><strong>Size:</strong></p>
				<p>Adults can reach 6-10 inches (15-25 cm) in diameter. Some have been&nbsp;recorded up to 18 inches in diameter.</p>
				<p><strong>Predators:</strong></p>
				<p>Sea turtles, ocean sunfish and lion&rsquo;s mane jelly</p>
				<p><strong>Diet/Prey:</strong></p>
				<p>The moon jelly will feed on plankton and small fish. The moon jelly can attack small fish using its stinging tentacles that trail&nbsp;from the edge of its &ldquo;bell.&rdquo; It pulls the paralyzed prey into its mouth using&nbsp;larger, frilly tentacles.</p>
				<p><strong>Aquarium Diet:</strong></p>
				<p>Brine shrimp</p>
				<p><strong>Reproduction:</strong></p>
				<p>Sperm from males enters the mouth of the female; fertilization of eggs takes&nbsp;place in the stomach. The eggs then move through the mouth to special&nbsp;brood pouches on the oral arms; the eggs develop into larvae within the&nbsp;arms. The larvae will escape the arms and attach to a hard substrate.</p>
				<p><strong>Fun Facts:</strong></p>
				<ul>
				<li>Are actually considered plankton because their body is not strong&nbsp;enough to swim against currents</li>
				<li>Harmless, not very powerful stinging cells</li>
				<li>These jellyfish are weak swimmers, and are often stranded on&nbsp;beaches by the tide</li>
				</ul>
				<p>&nbsp;</p>
				<p><strong>Ecology:</strong> The moon jellyfish is one of the most abundant in the mid-Atlantic region,&nbsp;and are often found washed up and withered on the beach even though they&nbsp;are not fragile animals. They survive long sea journeys and much wave&nbsp;battering. Its disc, or umbrella, may be as large as 18 inches across and&nbsp;gives the animal the appearance of a flying saucer. The umbrella is divided&nbsp;into eight equal parts, each of which has many small tentacles that contain&nbsp;stinging cells to help the jellyfish get food and defend itself. These stinging&nbsp;cells are like tiny harpoons and are triggered when the tentacle is touched,&nbsp;and even a dead jellyfish can sting. Due to their densities and the irritating&nbsp;sting they can deliver, moon jellyfish are considered a nuisance at beaches&nbsp;and often to divers.</p>
				<p><strong>Conservation&nbsp;Connection:</strong></p>
				<p>The moon jellyfish is considered very common throughout its native range,&nbsp;and therefore there is no special concern/status for the conservation of this&nbsp;species.</p>
				<p><strong>Status in SC:</strong> Common</p> </font>
				`
			}, {
				id: "12",
				name: "North American River Otter",
				description: "<h1>North American River Otter</h1>",
				image: "assets/icon/river_otter.jpg",
				content: `<font face="Helvetica Neue" size="4" color="005295"> <p>River otters inhabit coastal estuaries, river systems and even mountain streams. &nbsp;Sightings of river otters in the wild are rare because this species prefers areas of low human activity. &nbsp;Water quality will also dictate a habitat&rsquo;s potential for otter inhabitance &ndash; the animals prefer clean, clear water where food is abundant.&nbsp;They once ranged throughout most of Canada and the eastern and central United States. &nbsp;Today, they are found in isolated populations within that former range where suitable habitat still exists. &nbsp;&nbsp;In South Carolina river otters can be found throughout the state, ranging from the Blue Ridge to the ACE Basin.</p> </font>
				<font face="Helvetica Neue" size="4" color="005295">
				<p>Class: Mammalia - mammals</p>
				<p>Order: Carnivora -carnivores (meat-eaters)</p>
				<p>Family: Mustelidae - otters, martens, weasels, wolverines, and badgers</p>
				<p>Members of the Family Mustelidae are found from the equator to the poles, worldwide, and include 65 species in 25 genera. There exist 9 genera with 16 species in North America, excluding Mexico. Furthermore, South Carolina has 4 genera with 7 species, which can be found from mountain habitats to the Atlantic shoreline. Some notable members include weasels, stouts, polecats, mink, martens, fishers, wolverines, otters, badgers, and others. The general Mustelid form is an elongate body, short legs and rostrum (i.e. otters). These animals are mainly carnivorous, and generally considered to be proficient hunters. Hunting methods have evolved from hunting from burrows and crevices, to swimming and even climbing trees. Description: River otters have the typical Mustelid body form with their elongate bodies, short blunt snout with whiskers, small eyes and ears, webbed toes with distinctive claws, and a thick coat of fur. Their dorsal color is dark brown with a lighter brown underside. River otters have an average 380,000 hairs per square inch, which acts as insulation to keep the otter from losing large amounts of body heat to the water around them. Its whiskers (vibrissae) are used to locate prey, explore burrows and for detecting underwater movements or objects by water current changes. Size: Adults can reach lengths up to 3 &ndash; 4 feet (.9 &ndash; 1.2 meters) and typically weigh between 11 and 23 pounds (5-10.4 kg).</p>
				<p><strong>Description:</strong></p>
				<p>River otters have the typical Mustelid body form with their elongate bodies, short blunt snout with whiskers, small eyes and ears, webbed toes with distinctive claws, and a thick coat of fur. &nbsp;Their dorsal color is dark brown with a lighter brown underside. &nbsp;River otters have an average 380,000 hairs per square inch, which acts as insulation to keep the otter from losing large amounts of body heat to the water around them. &nbsp;Its whiskers (vibrissae) are used to locate prey, explore burrows and for detecting underwater movements or objects by water current changes.</p>
				<p><strong>Size:</strong></p>
				<p>Adults can reach lengths up to 3 &ndash; 4 feet (.9 &ndash; 1.2 meters) and typically weigh between 11 and 23 pounds (5-10.4 kg).</p>
				<p><strong>Predators:</strong></p>
				<p>River otters are prey for large predators such as bobcats, alligators, and birds of prey. &nbsp;While the young are the most vulnerable, bobcat, alligators, and wolves will also prey on sick and injured adults.</p>
				<p><strong>Diet/Prey:</strong></p>
				<p>In the wild, river otters eat a variety of fish, generally favoring the slower species such as suckers, carp, and catfish, but show no preference to any particular species. Diet, however, is reflective of the otters&rsquo; habitat. &nbsp;Coastal river otters may feed heavily on clams, while otters in the mountains may have crayfish as a primary food source. &nbsp;Other food items may include amphibians, mice, small rabbits, turtles and even bird eggs.</p>
				<p>River otters have a very rapid metabolism and must eat about 15-20% of their body weight per day, averaging about 3 pounds of food (1.35kg). &nbsp;River otters don&rsquo;t ingest the entire animal, and will regurgitate the scales and bones of prey.</p>
				<p><strong>Aquarium Diet:</strong></p>
				<p>Mackerel, smelt, blue crabs, carrots, hard-boiled eggs, processed carnivore diet, and frozen blocks of fish, oysters, and clams.</p>
				<p><strong>Reproduction:</strong></p>
				<p>Most river otters are polygamous and/or promiscuous. &nbsp;Otters undergo long periods of copulation to induce the ovulation of an unfertilized egg. &nbsp;Therefore, copulation must last for several hours before an egg can be successfully fertilized. &nbsp;Gestation time for a river otter is about 10-12 months, with a long period of delayed implantation. &nbsp;Delayed implantation is when the cycle stops before the blastula of cells implants in the uterine wall; chemical signals trigger the blastula to implant and then development continues. &nbsp;River otters only have an active pregnancy of 63 days, after mating in late winter. &nbsp;</p>
				<p>After finding a den, which is usually located in a hollow tree or the abandoned home of a muskrat, the female otter gives birth to 2 - 4 young, called pups or kits. &nbsp;The female otter will defend the den and acquire enough resources to sustain her self and her pups. &nbsp;The young are born in the spring and are basically in a helpless (altricial) state. &nbsp;They nurse (the mother&rsquo;s milk is about 24% fat) for about 3 months before learning to chase and eat live foods. &nbsp;&nbsp;Pups are blind, but with a full coat of fur at birth they will open their eyes after about 30 days. &nbsp;</p>
				<p>The mother will teach the pups to swim at about 3 months. &nbsp;The pups will hang onto their mother&rsquo;s back while she dives down. &nbsp;The juvenile otters will remain with their mother for about a year. &nbsp;If the mother is killed after the pups are weaned, the male river otter may continue to raise and protect the pups. &nbsp;Female otters become sexually mature at about 2 years of age, and males between 5 and 7 years of age. &nbsp;</p>
				<p><strong>Fun Facts:</strong></p>
				<ul>
				<li>River otters may live 15 - 20 years in the wild, but are known to live longer in controlled environments</li>
				<li>They can swim up to 12 mph and can run 18mph</li>
				<li>River otters close their nostrils and ears while underwater, and can hold their breath for about 4 minutes &ndash; the maximum known time for an otter to hold its breath is 8 minutes</li>
				<li>Otters swimming beneath ice for long periods of time are known to use trapped air bubbles for replenishing their air supply</li>
				<li>Being a naturally curious and active animal, captive river otters are offered a variety of foods are used as enrichment -- the practice of offering captive animals new, interesting objects and foods as a means of keeping their instincts sharp -- among the enrichment foods given to the SC Aquarium&rsquo;s river otters are clams, blue crabs, carrots, hard-boiled eggs and frozen blocks of various food items (fish, clams, etc)</li>
				<li>Even though river otters live a generally solitary lifestyle, they are social animals that exhibit a wide range of &ldquo;play&rdquo; behaviors (i.e. swimming upside down, doing underwater flips and circles, mud and snow sliding, and burrowing) that help them to practice hunting techniques and develop social skills</li>
				<li>Otters can communicate through vocalizations (i.e. a systems of whistles, growls, chuckles and screams) and scent from the scent gland at the base of their tails, or by urinated/defecating</li>
				<li>Otters view their environment with a variety of senses, but their whiskers are very sensitive to tactile sensations, and are important in hunting</li>
				</ul>
				<p>&nbsp;</p>
				<p><strong>Conservation Connection</strong></p>
				<p>River otters are vital to maintaining healthy aquatic ecosystems. &nbsp;They are important predators within these systems that prey upon fish, crayfish, frogs, turtles, and aquatic invertebrates, plus the occasional bird, rodent or rabbit. &nbsp;Much of an otter&rsquo;s diet is slow and lethargic; staples in an otter diet are "rough" fish like carp, suckers, catfish, and sculpins. &nbsp;Otters are a favorite of commercial fisheries and anglers alike because much of their prey are consider &ldquo;trash&rdquo; species which often conflict with more desirable sport and economically viable species (i.e. bass, trout, sunfish).</p>
				<p>River otters, while curious and social, tend to be sensitive to the presence of humans. &nbsp;Habitats far and wide have been spoiled by development and increased boat traffic &ndash; both are significant factors for declining river otter populations in some areas. &nbsp;Decreasing water quality and loss of habitats are secondary effects to increased human activity in river otter environments. &nbsp;Population densities of this species are low, even in the best habitat. &nbsp;River otters have historically been hunted for their fur, which is desirable because it is almost impervious to cold with an outer coat of coarse guard hairs, plus a dense, thick undercoat that helps to "water-proof" the animal. &nbsp;Today, over 30,000 pelts are still sold annually in the United States and Canada. &nbsp;Even though otter pelts may only sell at an average of $18.33 per pelt, it remains an important source of income for many people in Canada and the western United States. &nbsp;&nbsp;&nbsp;</p>
				<p>The Aquarium&rsquo;s river otters continue to be one of the star attractions. &nbsp;River otters in the wild, however, need our continued efforts to ensure they do not end up endangered or extinct. &nbsp;Further protection of river otter habitat is necessary for their continued survival. &nbsp;Putting effort into limiting the accumulation of garbage where boaters and outdoor enthusiasts access river otter habitat is one small way people can do their part. &nbsp;Becoming a volunteer in South Carolina&rsquo;s annual Beach Sweep/River Sweep - a joint program of the Department of Natural Resources and SC Sea Grant - is a means of becoming involved and aware of the growing problem of habitat pollution.</p>
				<p>North American river otters have been virtually eliminated across their native range by the loss of suitable habitat combined with the pressures of hunting/trapping for the fur trade. &nbsp;Despite all of this, river otters do not receive any federal or state protection under the law, and South Carolina still maintains a hunting season for otters with no limit on take that runs from November 24 to March 1. &nbsp;The illegal trade of river otters and their products does receive international attention under Appendix II of CITIES (the Convention on International Trade in Endangered Species of Wild Fauna and Flora). &nbsp;This status regulates the trade in river otters and products made from these mammals because they are considered at risk to being a threatened species in the future.</p>
				<p><strong>Status in SC:&nbsp;</strong>Common in the coastal plain, but are becoming rare in the piedmont and mountains</p>
				<p><strong>Aliases:&nbsp;</strong>River otter, Northern river otter.</p> </font>
				`
			}, {
				id: "13",
				name: "Osprey",
				description: "<h1>Osprey</h1>",
				image: "assets/icon/osprey.jpg",
				content: `<font face="Helvetica Neue" size="4" color="005295"><p>Ospreys have a wide distribution because they are able to live almost anywhere where there are safe nest sites and shallow water with abundant fish. Nests are generally found within 3 to 5 km of a water body such as a salt marsh, mangrove (Rhizophora) swamp, cypress (Taxodium) swamp, lake, bog, reservoir or river. The frequency with which each of these habitat types is used varies by geographic region. &nbsp;Ospreys choose structures that can support a bulky nest, and that are safe from ground-based predators. Nest sites can be safe from predators either by being difficult for a predator to climb (e.g. on a cliff) or by being over water or on a small island. Over-water nest sites that are often used by ospreys include buoys and channel markers, dead trees and artificial nest platforms. Ospreys have also been known to nest on various man-made structures, such as power poles, duck blinds, communication towers, buildings and even billboards. In many cases, nests that are built on artificial structures such as nest platforms and power poles are more stable and fledge more chicks per breeding season than nests on naturally-occuring structures.</p>
				<p>Ospreys have a worldwide distribution, wintering or breeding on every continent except Antarctica. Ospreys are not known to breed in South America or Indo-Malasia, but are sometimes found there in the winter. Ospreys are winter breeders in Egypt and some Red Sea islands. Regions where ospreys are particularly abundant include Scandinavia and the Chesapeake Bay region of the United States. &nbsp;There are four subspecies of ospreys, which are separated by geographic region. &nbsp;The subspecies that can is found in South Carolina, Pandion haliaetus carolinensis, breeds in North America and the Caribbean, and winters in South America.</p> </font>
				<font face="Helvetica Neue" size="4" color="005295">
				<p>Class: Aves--birds</p>
				<p>Order: &nbsp;Falconiformes -- This order contains three families, around 76 genera and over 300 species. The birds of this order are raptors or birds of prey such as hawks, eagles, kites and falcons. They have strong, curved talons. Their bills have hooked tips, sharp edges and a fleshy cere at the base.</p>
				<p>Family:&nbsp; Accipitridae &ndash; Family made up of Hawks, Eagles, Kites and Osprey.</p>
				<p><strong>Description:</strong></p>
				<p>Ospreys have long wings with a characteristic bend at the carpal ("wrist") joints. They are bright white underneath, with dark brown patches at the carpal joints and a mottled dark brown necklace. Other identifying markings include a dark stripe through each eye, and a dark brown back. The feet of this species are pale blue-gray, and the beak is black. Juvenile ospreys resemble adults, but have a somewhat speckled appearance due to buff-colored tips on their dark brown upper-wing and back coverts and a less well-defined necklace. Juveniles also have an orange-red iris, rather than the yellow iris that is typical of adults. Juvenile plumage is replaced by adult plumage by 18 months of age. &nbsp;Female ospreys are typipcally larger than the males, and also often have darker plumage and a more defined necklace than their male counterparts.</p>
				<p><br />Ospreys display morphological variation by region. Tropical and subtropical individuals tend to be smaller than individuals that breed at higher latitudes. The four subspecies of ospreys show some variation in size and color. Pandion haliaetis haliaetus and P.h. carolinensis are the largest and darkest subspecies. P.h.ridgwayi is approximately the same size as carolinensis, but is paler on the head and breast. P.h. cristatus is the smallest subspecies, with a dark necklace and pale crown</p>
				<p><strong>Size:</strong></p>
				<p>Ospreys are large birds of prey (55 to 58 cm long), with a wingspan ranging from 145 to 170 cm. &nbsp;On average, while not necessarily longer, female ospreys are 20% heavier than males and have a wingspan that is 5 to 10% greater. In North America, for example, male ospreys range in mass from 1200 to 1600 g, whereas females range from 1600 to 2000 g.</p>
				<p><strong>Predators:</strong></p>
				<p>Ospreys are vulnerable to predation from aerial predators, such as owls and eagles . In North America, Bald eagles and great horned owls are known predators of osprey nestlings and (occasionally) adults. Raccoons, snakes and other climbing animals are suspected predators of osprey eggs and nestlings. &nbsp;Crocodilians may also prey on wintering ospreys. Nile crocodiles (Crocodylus niloticus) sometimes kill ospreys bathing and roosting near water in Africa.</p>
				<p><strong>Diet/Prey:</strong></p>
				<p>Ospreys are unusual among raptors for being piscivores. Their diet consists almost exclusively of fish (&ge;99% of prey items). They are generally opportunistic, and will eat whatever fish species are accessible to them &ndash; either in shallow waters, or near the surface of deeper waters. Studies in North America have documented more than 80 different prey species of ospreys.</p>
				<p><strong>Reproduction:</strong></p>
				<p>Ospreys are generally monogamous. However, polygyny can occur in rare instances where nest sites are close enough together that a male can defend two nests. When this occurs, the first nest usually experiences higher reproductive success than the second because the male devotes more resources to that nest. &nbsp;Some ospreys migrate seasonally, but not all. Non-migratory populations breed and winter in the same location, though they may wander several hours from their nest during the non-breeding season. These populations begin breeding between December and March. Migratory populations generally breed where winters are cold enough to drive fish into deep water where they are inaccessible. These populations begin breeding in April or May.</p>
				<p>Courtship in ospreys centers on food and nest sites. In migratory osprey populations, males and females arrive at the nest site separately, the male often arriving several days earlier than the female. Male ospreys sometimes perform a conspicuous aerial display near the nest site. This display usually occurs during early courtship, and may serve to attract potential mates or to threaten an intruder. Both sexes collect materials for the nest, but the female does most of the arranging of materials at the nest. Osprey nests are typically constructed of sticks, and lined with softer materials such as seaweed, kelp, grasses or cardboard. A wide variety of flotsam and jetsam may also be incorporated into osprey nests, including fishing line, plastic bags and nearly anything else that an osprey might find and can lift. Osprey pairs use the same nest year after year, but must spend some time each year repairing it and adding materials before eggs can be laid.</p>
				<p>Once a pair has established a nest, the male begins to deliver food to the female. This feeding continues until the young fledge or the nest fails. Generally, females that receive more food are more receptive to mating attempts by the male, and are less likely to copulate with other males. Females beg for food from their mates, and occasionally from neighboring males if they are not well fed by their mate. Males may protect their paternity by feeding their mate. They may also protect their paternity by guarding their mate from other males and copulating frequently when she is most fertile (several days before egg laying).</p>
				<p>The breeding season of ospreys differs between populations. Non-migratory populations breed in the winter and spring, laying eggs between December and March. The breeding season of migratory populations occurs in the spring and summer, with egg laying in April and May. Two to four eggs are laid over a period of several days, each 1 to 2 days apart. Both the male and female incubate the eggs, which hatch after approximately 40 days. Because incubation starts when the first egg is laid, the eggs hatch asynchronously in the order in&nbsp;<span style="font-weight: 400;">which they were laid. Chicks that hatch first are larger and have a competitive advantage over those that are hatch later. If food becomes scarce, the smaller chicks are less successful in competing for food, and often die. This decrease in the number of chicks in the nest makes food more available to the surviving chicks, and increases their likelihood of survival. This process, common in raptors, is called brood reduction.</span></p>
				<p>Both male and female ospreys care for their young. Ospreys provide parental care by protecting their young from from predators and weather, and by feeding them. During incubation and the nestling stage, the male osprey provides food to the female and the chicks. This entails delivering 60 to 100 g of fish to the nest per daylight hour (3 to 10 fish per day) during the nestling and fledgling stages. When a fish is delivered to the nest, one of the adults rips pieces of flesh from the fish and feeds them to the chicks. Parents continue to feed the young until two to eight weeks after they fledge.</p>
				<p>During the first weeks after hatching, osprey chicks are not able to control their body temperature well. The female parent broods the chicks almost constantly for the first two weeks. She continues to brood them intermittently during very hot or cool weather until they are approximately four weeks old. Both parents expend considerable effort protecting the nest from intruders, including other ospreys and potential predators.</p>
				<p><strong>Fun Facts:</strong></p>
				<ul>
				<li>Ospreys have several morphological adaptations to their unique fish-eating lifestyle. These adaptations include relatively long legs for a raptor, spiny footpads called spicules, long, sharp, curved claws, and a reversible outer toe to aid in gripping slippery fish</li>
				<li>Ospreys have dense oily plumage and efficient nasal valves that prevent water from entering the nostrils when the bird dives to catch a fish</li>
				<li>Ospreys are a relatively long-lived bird species. The oldest known osprey in North America was a 25-year old male. The oldest known female was 23 years old.</li>
				<li>Breeding ospreys are known to travel as far as 14 km from their nest during hunting forays.</li>
				<li>Ospreys use several different vocalizations to communicate with one another. Up to five different calls have been recognized by researchers. These calls are nearly always associated with a visual display, such as a characteristic flight or posture. Vocalizations are used for begging, alarm, courtship, and nest defense.</li>
				<li>Selection by terrestrial predators may explain why the majority of osprey nests are in a particular area, for example in the Chesapeake Bay region of the U.S., are built over water.</li>
				<li>The speckled appearance of osprey chicks camouflages them in the nest and may be an adaptation to minimize predation by diurnal avian predators like the bald eagle.</li>
				<li>Ospreys in some areas, particularly boreal and other northern forested regions, may have historically been dependant on beavers for creation of habitat. Beavers create osprey habitat by building dams, which create shallow ponds for fishing and dead trees appropriate for building nests.</li>
				</ul>
				<p>&nbsp;</p>
				<p><strong>Conservation Connection:</strong></p>
				<p>Ospreys have a worldwide distribution, wintering or breeding on every continent except Antarctica. &nbsp;The subspecies that inhabits the Southeastern United State is Pandion haliaetus carolinensis, which breeds in North America and the Caribbean, and winters in South America. &nbsp;Ospreys have a wide distribution because they are able to live almost anywhere where there are safe nest sites and shallow water with abundant fish. Nests are generally found within 3 to 5 km of a water body such as a salt marsh, mangrove (Rhizophora) swamp, cypress (Taxodium) swamp, lake, bog, reservoir or river. The frequency with which each of these habitat types is used varies by geographic region. &nbsp;</p>
				<p>Ospreys are important predators whose diet consists almost exclusively of fish (&ge;99% of prey items). They are generally opportunistic, and will eat whatever fish species are accessible to them &ndash; either in shallow waters, or near the surface of deeper waters. Studies in North America have documented more than 80 different prey species of ospreys. &nbsp;In the past, some fishermen have believed that ospreys competed with them for fish. However, studies have demonstrated that ospreys take a very small portion of all fish harvested and are not serious competition for commercial and recreational fishing. Ospreys have been known to be an important part of the diet of other arial predators such as bald eagles and great horned owls. &nbsp;Nestlings are preyed upon by raccoons and snakes, while crocodilians have been known to prey on wintering birds near the water. &nbsp;While ospreys provide food for some species, it is unlikely that they represent a significant portion of the diet of any species.</p>
				<p>Ospreys provide an important ecosystem service because their nests are used by many species of birds other than ospreys. Smaller cavity-nesting species, such as common grackles, tree swallows, barn swallows, European starlings and house sparrows build nests within osprey nests. Other larger species will usurp osprey nests for their own use in the spring before the resident ospreys return. In North America, these species include great blue herons, Canada geese, bald eagles, Red-tailed hawks, Great horned owls, herring gulls and common ravens.</p>
				<p>Ospreys may also be a valuable indicator species for monitoring the long-term health of large rivers, bays and estuaries. Ospreys are well-suited to this role because of their piscivorous lifestyle and their known sensitivity to many contaminants. They are also relatively easily studied because they have conspicuous nests and are tolerant of short-term disturbance such as nest observations by researchers. The presence of ospreys may also benefit local economies by boosting ecotourism.</p>
				<p>In the late 19th and early 20th centuries, the main threats to osprey populations were egg collectors and shootings. These declined by the mid-twentieth century, though some shootings still occur. With the introduction and widespread use of the pesticide DDT (dichloro-diphenyl-trichloroethane), osprey populations in many areas declined sharply from the 1950&rsquo;s through the 1970&rsquo;s. During this period, 90% of breeding pairs disappeared from the Atlantic coast between New York City and Boston. DDT was banned in the U.S. around 1970, but continues to be used in some countries that serve as wintering grounds for ospreys. Populations of ospreys largely rebounded after the banning of DDT and are now reaching historic levels. Installation of artificial nest structures, hacking projects and new habitat created by reservoirs have allowed osprey populations to increase and expand their range.</p>
				<p>Ospreys are not listed under the Endangered Species Act or on the IUCN&rsquo;s Red List. However, this species is listed as &lsquo;Threatened&rsquo;, &lsquo;Endangered&rsquo; or a &lsquo;Species of Special Concern&rsquo; in several U.S. states (considered common in South Carolina and receive no special state protection). Ospreys do recieve protection under the U.S. Migratory Bird Act and Appendix II of CITES.</p>
				<p><strong>Status in SC:</strong> Common, Permanent Resident</p>
				<p><strong>Alias:&nbsp;</strong>Fish Hawk</p> </font>
				`
			}, {
				id: "14",
				name: "Oyster",
				description: "<h1>Oyster</h1>",
				image: "assets/icon/Oyster_reef_Hunting_Island_SC.jpg",
				content: `<font face="Helvetica Neue" size="4" color="005295"><p>Oysters are commonly found in estuaries, tidal creeks, and salt marshes.&nbsp;The oyster is found off the coast of North America from the Gulf of St. Lawrence to Florida.</p></font>
				<font face="Helvetica Neue" size="4" color="005295"> 
				<p>Class: Bivalvia (Pelecypoda) - mussels, clams and scallops</p>
				<p>Order: Ostreina</p>
				<p>Family: Ostreidae - oysters</p>
				<p>The class Bivalvia contains over 7, 650 species found in marine environments.</p>
				<p><strong>Description:</strong></p>
				<p>Oysters are variable in shape with razor sharp edges. They have a long and narrow shell. The two sides are comprised of two equal shells. Size: Adults can reach lengths up to 6-10in (15-25cm).</p>
				<p><strong>Predators:</strong></p>
				<p>The oysters&rsquo; main predators are sponges, flatworms, sea stars, boring clams, oyster drills, fish (including rays), oyster catchers, and humans.</p>
				<p><strong>Diet/Prey:</strong></p>
				<p>Oysters are filter feeders; they will feed on phytoplankton and other microorganisms. &nbsp;They may filter 7 gallons of water through their gills each day.</p>
				<p><strong>Reproduction:</strong></p>
				<p>Females can release 100 million eggs during one spawn and can spawn 2-3 times a season. &nbsp;It is believed that less than 10% of these eggs survive until maturity. &nbsp;Ten hours after spawning, the larva with cilia will hatch. After 2 weeks the &ldquo;spat&rdquo; (hatchlings) will sink to the bottom.</p>
				<p><strong>Fun Facts:</strong></p>
				<ul>
				<li>May live 20 or more years</li>
				</ul>
				<ul>
				<li>Are permanently attached to a hard substrate which is usually other oysters</li>
				</ul>
				<ul>
				<li>They are sessile animals, which means they do not move around, so they do not have a well developed foot (muscle inside the shell)</li>
				</ul>
				<ul>
				<li>Usually seen living in cluster which are known as oyster beds which provide valuable structure for many estuarine animals</li>
				</ul>
				<ul>
				<li>Can change sex numerous times in their lifetime</li>
				</ul>
				<ul>
				<li>Young oyster hatchlings are called &ldquo;spat&rdquo;</li>
				</ul>
				<ul>
				<li>Pea crabs will live inside the shells and eat food strained by the oysters gills</li>
				</ul>
				<ul>
				<li>Found intertidally in the South Carolina area, but this is unusual for most of its range (in most other areas they are always submerged). &nbsp;This may be due to the boring sponge which can kill oysters, but can not survive out of the water; so if our oysters are exposed to the air twice a day due to tides, the boring sponge can not survive on our oysters.</li>
				</ul>
				<p>&nbsp;</p>
				<p><strong>Conservation Connection:</strong></p>
				<p>American or eastern oyster occur along the east coast of north America from the Gulf of St. Lawrence to Key Biscayne, Florida and south through the Caribbean to the Yucatan Peninsula of Mexico and Venezuela. &nbsp;Although water temperature affects growth rate, it appears to be irrelevant in site selection. Oysters inhabit areas of fairly constant turbidity and salinity. The oyster is eurythermal or able to withstand a wide range of temperatures including freezing temperatures. &nbsp;Oysters are filter feeders, consuming phytoplankton and improving water quality by filtering the water. Reef forming creatures, oysters provide vital structured habitat for many fish species and crabs. &nbsp;</p>
				<p>Oyster cultch or oyster spat is fairly valuable to jewelry trade, though it is rather abundant, due to the large numbers of existing oysters and their relatively high rate of reproductive success. Some Eastern oysters produce pearls, which can also add to some value as jewelry. &nbsp;Oysters are also economically important in enhancing certain lime or cement coatings, and the meat is also smoked and canned as a food.</p>
				<p>Oyster health is highly contingent upon water quality. Chemical contamination has been found to be widespread and detrimental. Extensive efforts are being made in places like British Columbia to purify water to benefit all aquatic organisms. Toxicity in shellfish can be passed on to consumers who may ingest oyster meat, resulting in a condition termed PSP in humans, which is potentially fatal. &nbsp;Many oyster beds in the northern Atlantic states are unusable or have been destroyed because of pollution. &nbsp;In addition, oysters have been known to be very susceptible to disease.</p>
				<p>The U.S. oyster industry has been hit hard by the depletion of oyster stocks by pollution and disease. &nbsp;The industry operates on both the U.S. east and west coasts. The primary oyster species harvested on the east coast (i.e. Atlantic and Gulf), the eastern oyster, produced average annual landings of about 31 million pounds during 1981-97 with an associated $77 million dockside value. Chesapeake Bay, once the nation's largest oyster source, has seen production fall sharply since the early 1980's due to habitat degradation, overfishing, and disease. Then averaging close to 17 million pounds annually, the Chesapeake's output fell more than 90% to about 1.5 million pounds annually during 1995-97. &nbsp;Harvesting oysters can also effect stocks because dredging too close to oyster beds can kill them, and they can smother if they are covered with silt or sediment mixed into the water column by dredging. &nbsp;These oysters cannot eject all the sediment from their gills. In South Carolina, oyster season is September 15- May 1, and there is a limit of 2 bushels per household, twice a week.</p>
				<p>According to the Endangered Species Act, there are 72 species of clams (bivalves) and 33 species of snails (gastropods) that are either threatened or endangered. &nbsp;We can do several things to help conserve Mollusca (shell) species. &nbsp;The most important is to not remove living shells from the beach. &nbsp;Also, take home as few empty shells as possible, if you collect them. &nbsp;Most will get smashed or broken so please leave some behind. &nbsp;Old shells may be homes for other animals, like hermit crabs, or they make break down over time to create new sand. &nbsp;You can do some research to find out if any shells in your area, or where you will be traveling, are under legal protection. This way you can abide by all laws and regulations. &nbsp;</p>
				<p>In addition, S.C. Dept. of Natural Resources has initiated a South Carolina Oyster Restoration Enhancement (SCORE) Program in an effort to increase oyster habitat. &nbsp;There are two main components to SCORE: &nbsp;oyster shell recycling and community-based restoration. &nbsp;The public is encouraged to recycle oyster shells so that they can be used in the restoration process, and seven recycling centers have been established throughout the low country. &nbsp;The community based restoration part of the program works with local citizens groups to conduct habitat restoration projects. &nbsp;The projects include building new reefs with recycled oyster shells and monitoring reef development. &nbsp;SCA staff and volunteers helped build a reef adjacent to the aquarium and continue to monitor its progress today.</p>
				<p><strong>Status in SC:</strong>&nbsp;Common</p>
				<p><strong>Aliases:</strong>&nbsp;Common or eastern oyster &nbsp;</p> </font>
				`
			}, {
				id: "15",
				name: "Red Drum",
				description: "<h1>Red Drum</h1>",
				image: "assets/icon/Red_Drum.jpg",
				content: `<font face="Helvetica Neue" size="4" color="005295"> <p>The red drum is commonly found in shallow water along edges of bays, tidal creeks, oyster reefs.&nbsp;They are found along the east coast of North America from Massachusetts to northern Mexico</p> </font>
				<font face="Helvetica Neue" size="4" color="005295">
				<p>Class:&nbsp;Actinopterygii &ndash; ray-finned fishes</p>
				<p>Order: Perciformes &ndash; perch-like fishes</p>
				<p>Family:&nbsp;Sciaenidae &ndash; drum family, includes spot, corakers, cubbyu, high-hats, jackknife-fish and kingfish.</p>
				<p><strong>Description:</strong></p>
				<p>The red drum has a long, bronze body with a dark spot or multiple spots on caudal peduncle. The caudal peduncle is the connection between tail and body.</p>
				<p><strong>Size:</strong></p>
				<p>Hatchlings may grow 11in (28cm) within their first year. &nbsp;Adults usually reach lengths of 58in (1.3m) and can get as large as 92lbs (42kg).</p>
				<p>World record weight is 94lbs, which was caught in North Carolina. &nbsp;State record for South Carolina is 75lbs (34kg).</p>
				<p><strong>Predators:</strong></p>
				<p>The main predators of the red drum are sharks and larger fish.</p>
				<p><strong>Diet/Prey:</strong></p>
				<p>The red drum is a bottom feeder and will feed mostly on mollusks, crustaceans and small fish.</p>
				<p>&ldquo;Tailing&rdquo; is a behavior seen during feeding when they are head down in shallow grassy water and their tail is exposed to the air.</p>
				<p><strong>Aquarium Diet:</strong></p>
				<p>Cut fish, smelt, shrimp, squid and fish gel</p>
				<p><strong>Reproduction:</strong></p>
				<p>Males produce a drumming sound to attract the females. &nbsp;Spawning occurs in the ocean near inlets in the fall/winter. &nbsp;Eggs hatch within 24 hours and are then carried into estuaries by tides.</p>
				<p>They reach sexual maturity between 3-4 years, about 30in (76cm).</p>
				<p><strong>Fun Facts:</strong></p>
				<ul>
				<li>May live more than 60 years.</li>
				<li>Popular game and food fish.</li>
				<li>Designated the state fish of North Carolina in 1971.</li>
				<li>Juvenile drums, between 1-4 years, are called &ldquo;puppy drums&rdquo;.</li>
				<li>Will live first 3-4 years in estuary, then will move to open waters.</li>
				<li>Have special muscles along wall of swim bladder to allow them to produce drumming sounds.</li>
				<li>Scianeops is Greek for perch-like marine fish, ocellatus is Latin for eye-like colored spot.</li>
				<li>The false eye spot at the caudal peduncles is believed to distract predators away from the real eyes.</li>
				<li>In Mexico they are referred to as &ldquo;pescado colorado&rdquo; or &ldquo;colorado&rdquo;.</li>
				</ul>
				<p>&nbsp;</p>
				<p><strong>Conservation Connection:</strong></p>
				<p>The red drum is notorious as a bottom-feeding animal where it feeds off of mollusks, crab, shrimp, and crustaceans.&nbsp; However, it can also be seen on the surface, feeding on schools of fingerling baitfish.&nbsp; It prefers shallow grass beds and structures where small fish and crustaceans are abundant.&nbsp;</p>
				<p>This species is not considered threatened or endangered, however, fishing limits on both commercial and recreational fishing are in place. There was a drastic decline in Red Drum populations in the late sixties and early seventies.&nbsp; Through conservation efforts the species has once again reached abundant levels.&nbsp; The first hatchery established to restock the red drum population was here in Texas near Port O'Conner.&nbsp; In 1983, they released 2.3 million fingerlings into the San Antonio Bay.&nbsp;&nbsp;</p>
				<p><strong>Status in SC:&nbsp;</strong>Common</p>
				<p><strong>Aliases:&nbsp;</strong>Redfish, bull reds, spot bass, red bass, red horse, channel bass, puppy drum</p></font>
				`
			}, {
				id: "16",
				name: "Sand Fiddler Crab",
				description: "<h1>Sand Fiddler Crab</h1>",
				image: "assets/icon/sand_fiddler_crab.jpg",
				content: `<font face="Helvetica Neue" size="4" color="005295"><p>The sand fiddler crab is commonly found at the sandy edges of salt marshes, tidal flats and on protected beaches. &nbsp;Here, it forms large aggregations that live in burrows it digs in the sandy substrate. &nbsp;These burrows generally have only one opening, and can be up to 2ft (60cm) deep. &nbsp;Sand fiddler crabs will usually feed close to these burrows so that they can quickly retreat if they are disturbed. &nbsp;The crabs will use a &ldquo;mud plug&rdquo; to close the opening of their burrow during high tide. &nbsp;They also will retreat to their burrows in the winter to hibernate and will remain there until the water warms up. Sand fiddler crabs can be found along the eastern coast of North America from Cape Cod to Texas.</p></font>
				<font face="Helvetica Neue" size="4" color="005295">
				<p>Phylum: &nbsp;Arthropoda &ndash; crustaceans, insects, and chelicerates</p>
				<p>Subphylum:&nbsp;Crustacea &ndash; barnacles, copepods, crabs, shrimp, lobsters</p>
				<p>Class: &nbsp;Malacastraca &ndash; crabs, shrimp, krill, lobsters, crayfish</p>
				<p>Order: &nbsp;Decapoda &ndash; crabs, lobsters and shrimp</p>
				<p>Family: &nbsp;Ocypodidae &ndash; fiddler crabs, ghost crabs</p>
				<p>Sand fiddler crabs fall under the phylum Arthropoda, which literally means &ldquo;jointed feet&rdquo; and is the largest phylum in the world. &nbsp;Members of this phylum are characterized by a rigid exoskeleton that species of this phylum must shed to grow. &nbsp;The sand fiddler is also a member of the Subphylum Crustacea, which includes other crabs, lobster, shrimp and barnacles and is characterized by a three-part body structure &ndash; head, thorax and abdomen. &nbsp;This species is further divided into the order Decapoda, which is made up of a group of animals that all share the crab, shrimp or lobster-like forms. &nbsp;This group is so named for their 5 pairs of walking legs, which normally have modified pinchers as the first pair. &nbsp;&nbsp;The family Ocypodidae is the group &ldquo;swift-footed crabs&rdquo; that includes this species, as well as, ghost crabs.</p>
				<p><strong>Description:</strong></p>
				<p>This small crab has a thick, squarish, pinkish/purple body. &nbsp;The space between the eyes in this species is much shorter than the eye stalks. &nbsp;Males have the greatly enlarged pincer that is characteristic of fiddler crabs, while females claws are both equally small. &nbsp;The inside of the palm of the male sand fiddler crab&rsquo;s major claw is smooth (lacking small bumps or granules), thus distinguishing it from other local species of fiddler crabs..</p>
				<p><strong>Size:</strong></p>
				<p>Adult sand fiddler crabs can reach 9/16 in (1.4cm) in carapace length and 1 in (2.5cm) in carapace width. &nbsp;The major claw of an adult male can reach a size of up to 1 5/8 in (4.1 cm).</p>
				<p><strong>Predators:</strong></p>
				<p>Blue crabs, terrapins, fish, raccoons, rails, and other marsh/shore birds all feed on this species. &nbsp;</p>
				<p><strong>Diet/Prey:</strong></p>
				<p>Sand fiddler crabs feed on organic material, such as algae, bacteria, decomposing marsh plants, and detritus. <br />This organic material is separated from the sand or mud by their mouthparts and the sediment is discarded in the form of small pellets. &nbsp;Their spoon shaped claws can also be used to scrape algae directly off of rocks or other hard surfaces. &nbsp;Females feed with both claws, whereas males only feed with one because they cannot feed with their oversized major claw.</p>
				<p><strong>Reproduction:</strong></p>
				<p>Courtship usually takes place during the day in the spring and summer. &nbsp;Males will wave and pump their large claw back and forth to attract the females toward their burrow. &nbsp;The behavior of all the males waving their big claw at one time is often termed the &ldquo;fiddler fiddle&rdquo; or &ldquo;marshland discomania.&rdquo; &nbsp;When the female gets close enough to the male&rsquo;s burrow, he will begin creating sounds by hitting his claw against the ground. &nbsp;He then backs into his burrow and entices the female in by using different sounds. &nbsp;Males build special burrows for breeding, which may have 3 separate chambers, each containing a different female. &nbsp;Mating and egg laying take place inside these special burrows. &nbsp;The male will close the burrow and wait with the female (or females) until she is ready release the eggs and leave the burrow. &nbsp;Females hold the hundreds to thousands of eggs they lay on their abdomen and then release them into the water at high tide. &nbsp;The microscopic, free-swimming larvae are 1/8 inch when they hatch. &nbsp;These early stage larvae are known as zoea. &nbsp;Zoea go through a number of molt stages to develop into older larvae known is megalopa that live in open water as part of plankton. &nbsp;At the end of the final larval stage, megalopa go through several more molt stages before they eventually settle to the bottom as immature crabs. &nbsp;The time it takes to go from hatchling larvae to an immature crab varies from a few weeks to a few months.</p>
				<p><strong>Fun Facts:</strong></p>
				<ul>
				<li>Got the name &ldquo;fiddler&rdquo; because when the male waves his big claw it looks like a person playing the violin, or fiddle</li>
				<li>The large claw of the male is not only used for mating, but also for territorial defense &ndash; this claw can be on the right or left, thus signaling handedness in this species</li>
				<li>A male&rsquo;s major claw can account for up to 65% of its body weight</li>
				<li>Major claw in males can be used for defense and combat, although actual combat between individuals rarely occurs because a fight could seriously injury both parties involved</li>
				<li>If an adult male loses his major claw in combat or from a predator, the small claw grows to the size of the lost major claw and the lost claw eventually regenerates into a smaller claw</li>
				<li>Live in large colonies, which are signaled by dime-sized holes in the ground with scatted pellets of sediment nearby</li>
				<li>Fiddler crabs burrow by scraping mud and sand into small pellets, which they carry out of the burrow and deposit on the marsh surface</li>
				<li>Fiddler crabs build two types of burrows &ndash; feeding burrows are temporary, but burrows for sleeping and mating are more permanent, which they defend and tend to be more elaborate</li>
				<li>Form two kinds of pellets depending on the type of burrow: one type is formed during feeding when they separate the food from the sand/mud and then the sand and mud are rolled into little balls, and the second is formed when they dig their burrows</li>
				<li>During high tide, fiddlers form mud plugs that they use to seal the entrance to their burrows, thus staying &ldquo;low and dry&rdquo; until the tide once again recedes</li>
				<li>In the winter, fiddler crabs move into their burrows and seal the openings with a plug &ndash; here, these crabs hibernate and emerge only when the water temperature begins to warm up</li>
				<li>Female fiddler crabs feed by using both of their small claws to stuff food into their mouths, but males can only feed with their one small claw because their major claw is too large for feeding</li>
				<li>Adult fiddler crabs only molt once or twice a year &ndash; during the time that the crab&rsquo;s shell is soft (immediately following its molt) it remains in or near its burrow</li>
				<li>Fiddler crabs have compound eyes (fly-like) that are fixed atop eye stalks &ndash; studies have shown that objects that appear above the crab&rsquo;s visible horizon are treated as a predator and the crab flees into its burrow, but if the object appears below its visual horizon it is treated as a non threat</li>
				<li>Are considered to be good bait for fishing, especially when fishing for sheepshead</li>
				</ul>
				<p>&nbsp;</p>
				<p><strong>Ecology:</strong></p>
				<p>This species seems to have no directly quantifiable commercial value (other than as bait), but does constitute an important food source for a variety of estuarine animals such as rails, other shore/marsh birds, blue crabs, diamondback terrapins, and many other species. &nbsp;Adult fiddler crabs provide a valuable ecological service by feeding on organic material and detritus that is extracted from the sand/mud and is rolled into small balls after the food is removed and later is deposited back onto the substrate. &nbsp;By removing these materials from the environment fiddler crabs help to improve the health of salt marsh habitats.</p>
				<p>In addition, fiddler crab burrows benefit salt marsh habitats as a whole. &nbsp;During low tide, these burrows ventilate the marsh by allowing sulfur and other marsh gases to vent out of the mud. &nbsp;At high tide they irrigate the mud by allowing water to penetrate the surface of the substrate. &nbsp;By aerating the marsh soils fiddler crab burrows also support the growth of marsh grasses and stimulate the turnover of the vital nutrients in marsh soils.</p>
				<p><strong>Conservation Connection:</strong></p>
				<p>As with other marsh-dependent species, fiddler crabs are under the continuously increasing threat of habitat loss due to land use practices that alter or destroy suitable habitat. &nbsp;Despite being some of the most biologically productive habitats on earth, marshes and estuaries have historically been considered worthless land, which has resulted in the draining, filling and developing of many of these habitats. &nbsp;Marsh property is also popular for development because of their proximity to coastlines and beaches.</p>
				<p>Some research has shown that fiddler crabs may be susceptible to pollution from waterways adjacent to marshes. &nbsp;Studies have discovered that there seems to be a correlation between high boat traffic and the absence of fiddler crabs populations. &nbsp;It has been hypothesized that the effects of pollution from this traffic may be driving off certain populations. &nbsp;Polluted water inundates marsh soils as it washes ashore, thus contaminating the top level of substrate and even flowing into open fiddler crab burrows at high tide. &nbsp;More research is needed in order to better understand the effects of boat traffic and pollution on this species in order to properly manage its populations in the future.</p>
				<p>Fiddler crabs are considered one of the most abundant species in marsh habitats and are very common throughout their native range. &nbsp;Therefore there is currently is no special concern/status for the conservation of this species.</p>
				<p><strong>Status in SC:&nbsp;</strong>Common</p>
				<p><strong>Aliases:&nbsp;</strong><span style="font-weight: 400;">Calling crab, Deaf ear crabs, Fever crabs</span></p></font>
				`
			}, {
				id: "17",
				name: "Snowy Egret",
				description: "<h1>Snowy Egret</h1>",
				image: "assets/icon/Snowy_Egret.jpg",
				content : `<font face="Helvetica Neue" size="4" color="005295"><p>The snowy egret is commonly found along the coast, marshes, river valleys, and the edges of lakes. &nbsp;</p>
				<p>They are found along the east coast of North America, down to along the Gulf coast. &nbsp;They can also be found along the west coast of North America and further inland in the southwest. Following the breeding season, some snowy egrets may migrate north and then back south during the winters.</p> </font>
				<font face="Helvetica Neue" size="4" color="005295">
				<p>Class:&nbsp;Aves &ndash; birds</p>
				<p>Order: &nbsp;Ciconiiformes &ndash; includes herons, bitterns, storks, ibises, gannets and boobies</p>
				<p>Family: &nbsp;Ardeidae &ndash; includes herons, egrets and bitterns</p>
				<p>There are about 60 species in the family Ardeidae found worldwide with the exception of the Antarctic and the far north.</p>
				<p><strong>Description:</strong></p>
				<p>The snowy egret has an all white plumage; black bill and legs; bright yellow feet. &nbsp;Juveniles have black on the front of their legs and yellow on the back.&nbsp;Their feet and the skin in front of their eye turn orange to red during the breeding season.</p>
				<p><strong>Size:</strong></p>
				<p>Adults can reach lengths up to 22-26in (56-66cm).</p>
				<p><strong>Predators:</strong></p>
				<p>The main predator of snowy egrets is the alligator.</p>
				<p><strong>Diet/Prey:</strong></p>
				<p>The snowy egret feeds primarily on fish, shrimp, crabs, amphibians, snakes, and insects. &nbsp;</p>
				<p>The snowy egret will forage by walking through shallow water, sometimes they will stand still and only stir up the bottom to startle prey into moving. &nbsp;They also can vibrate their bill under water to attract fish. &nbsp;They will also occasionally follow cattle, catching the insects that are startle into motion by the animals.</p>
				<p><strong>Reproduction:</strong></p>
				<p>The snowy egret nests in colonies called &ldquo;heronries&rdquo; in March to June. &nbsp;The nesting heronries are usually mixed colonies of herons, egrets, and ibis; usually located on islands that are abundant with vegetation. &nbsp;They are very vocal at the beginning of the breeding season. &nbsp;These birds have 50 or more long plume feathers on their lower back; the males will fan these out during breeding season to claim a territory or to attract a female. &nbsp;The males will also do a courtship-flying dance, flying high and then tumbling down near the nest site.</p>
				<p>The males will choose the nest site and will ward off rivals. &nbsp;The nests are platform shaped, made of sticks and twigs and located in bushes or trees. &nbsp;Both the male and the female will aggressively defend their nests with loud calls or by raising their crest and fighting. &nbsp;Between April and May 3-5 eggs laid; with a 20-30 day incubation period, both sexes help to incubate. &nbsp;While in the nest, the young will be fed by both parents. &nbsp;The young will fledge in about 30 days.</p>
				<p><strong>Fun Facts:</strong></p>
				<ul>
				<li>Have been timed at flying 30mph</li>
				<li>Sometimes referred to as &ldquo;the little white egret with golden slippers&rdquo;</li>
				<li>Calls: during breeding &ldquo;wah-wah-wah,&rdquo; and during aggression &ldquo;aah&rdquo;</li>
				</ul>
				<p>&nbsp;</p>
				<p><strong>Conservation Connection:</strong></p>
				<p>The snowy egret is found throughout North, Central, and South America as well as the Caribbean. It breeds in coastal and inland wetlands, but its range limits have changed over time due to the effects of hunting and habitat loss. Small breeding populations are located in Nova Scotia, Canada, and more heavily populated locations are found across the United States. Egretta thula is common among northern Nevada, Utah, and southeastern states, especially Florida and states bordering the Gulf of Mexico. &nbsp;Egretta thula is a partially migratory species, as it relocates from its northern habitats of the United States and Canada to its winter ranges located in Mexico, Central America, South America, the West Indies, and Bermuda. Snowy Egrets begin their northward migration in early March and depart in September to migrate to their wintering areas. &nbsp;Egretta thula generally prefers an environment of shallow water inlets for feeding purposes. Salt-marsh pools, tidal channels, shallow bays, and mangroves are among the most preferred habitats in North America. Habitats are most common among coastal areas and islands due to the availability of stable and abundant food sources. During the winter months, egrets migrate to the Caribbean to nest and roost in the mangroves. The Caribbean is home to other favorable egret habitats including salt-water lagoons, freshwater swamps, grassy ponds, beaches, shallow reef areas, flooded rice fields, and wet grassy meadows. Throughout Central America, E. thula prefers mainly lowland areas near freshwater swamps, lakes, and large river mouths. South American species also prefer coastal mangroves, mudflats, and swamps rather than highland areas. &nbsp;Snowy egrets prefer foraging habitats near bodies of shallow water, which are ideal for food sources. Its broad diet consists of earthworms, annelid worms, aquatic and terrestrial insects, crabs, shrimp, crayfish, snails, freshwater and marine fish, frogs, toads, lizards and snakes. The egret's diet is generally composed of 75% fish and 25% crustaceans. &nbsp;Snowy egrets have been known to make up part of the diet of species like, racoons, great horned owls, barred owls, crows, American alligators, grey rat snakes, and common black hawks.</p>
				<p>Egretta thula serves as a biological indicator of ecosystem health and habitat quality. In marshes, bays, and swamp habitats, the absence of egrets may reflect disturbances in the ecosystem, such as pollution, contamination of water, habitat loss, or human disturbance. In some habitats, researchers have sampled eggs and feathers to test levels of environmental contamination. Egrets are positioned at the top of the food chain, thus their decline may also infer a decline of other species, such as fish or insects. Egretta thula is a highly social bird and will not attack humans or disturb other bird species in its habitat.</p>
				<p>Recurved aigrettes (French term for the filamentous breeding plumes) were used for women&rsquo;s hats in the 19th century. &nbsp;The market price for the aigrettes was $32 an ounce, which was twice the price of gold at the time. &nbsp;They were hunted to near extinction in the late 1800&rsquo;s because of the demand for the aigrettes. &nbsp;In 1910, most hunting ceased due to citizens' requests to stop the slaughter of egrets. However, hunting still continued in Central and South America due to the European demand for plumes. The snowy egrets have been protected and now their populations are growing; they are protected federally and locally (protected by the state of South Carolina).</p>
				<p>Today, snowy egret populations appear to be declining along the Atlantic coast due to pollution and competition with other bird species. Egretta thula is at risk because of chemical contamination and the decline of wetland environments. Snowy egrets depend on wetland areas for food. Eggs in agricultural areas are contaminated by pesticides, which cause death. Egrets have also died from consumption of styrofoam, plastics, and lead found in the environment. Oil spills have also caused mortality.</p>
				<p>Egretta thula has been protected in North America since 1916 under the Migratory Bird Treaty Act. The Migratory Bird Treaty Act prohibited the hunting of egrets for their plumes, thus allowing them to return to their previous levels of abundance. &nbsp;In addition, the snowy egret is protected under Appenidx III of CITIES, and at the state level here in South Carolina.</p>
				<p><strong>Status in SC:</strong>&nbsp;Common</p>
				<p><strong>Aliases:</strong>&nbsp;Little egret, lesser egret, little white heron</p> </font>
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
