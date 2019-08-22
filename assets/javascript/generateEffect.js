var list =
	"Roll on this table every round for 1 minute.\
	Caster and target switch positions after spell.\
	Caster can see invisible creatures.\
	A flaming horse appears (Not Nightmare, real horse).\
	A modron appears within 5 feet for one minute.\
	Caster explodes with plant growth.\
	Cast fireball at 3rd level centered on self.\
	Weapons in 60' radius turn to food for 1 minute.\
	Cast magic missile as 5th-level spell.\
	Caster breathes 30' fire cone next time they speak.\
	Change height by 1d10: Even: grow, Odd: shrink.\
	Target is cocooned in crystal until someone breaks it.\
	Cast confusion centered on self.\
	Cast thunderwave centered on self.\
	Caster regains 5 HP every round for 1 minute.\
	Target is transported to Ethereal Plane for 1 minute.\
	Caster grows long beard made of feathers until they sneeze.\
	Swarm of rats carry caster 30' in random direction.\
	Cast grease centered on self.\
	Creatures within 30' are stuck in place vs Str DC 15.\
	For 1 minute, spell targets have disadv on saves.\
	A mature oak tree sprouts in an unoccupied space in 60'.\
	Caster's skin turns vibrant blue. Can be removed via 'remove curse'.\
	Caster can only speak to animals for 24 hours.\
	Third eye grows; advantage on Perception for 1 minute.\
	Caster gains 100 lbs, move speed halved, 1 minute.\
	Spells cost additional bonus round cast time.\
	On caster's next turn, they take no action, vomits 1d100 SP.\
	Teleport up to 60' away to unoccupied space.\
	Caster's hands become covered in sticky goop.\
	Transported to Astral Plane until end of next turn.\
	Cabbages sprout abundantly within a 30' radius.\
	Max dmg of next damaging spell cast in next minute.\
	Caster can mimic target's voice perfectly for 24 hrs.\
	Age changes 1d10 years; Odd: Younger, Even: Older.\
	Caster grows antlers, sheds them in 24 hours.\
	1d6 flumphs appear for 1 minute in 60'; scared.\
	Caster and target flung 10' in opposite directions.\
	Regain 2d10 HP.\
	Gravity reverses in 30' radius till start of next turn.\
	Caster becomes a potted plant until start of next turn.\
	Caster becomes distracted by a cloud of gnats for next minute.\
	For next minute, teleport up to 20' as bonus action.\
	Spell ricochets off target to random creature in 30'.\
	Cast levitate on self.\
	Caster's money cycles: CP -> SP -> GP -> CP.\
	Unicorn appears within 5' for next minute.\
	One of target's eyes replaced by 500 GP sapphire.\
	Caster cannot speak, emits pink bubbles instead.\
	Smoke fumes from caster's ears for 1 minute.\
	Spectral shield, +2 AC, no magic missile for 1 minute.\
	Caster gains 3' prehensile tail for 1 hour.\
	Cannot get drunk for 5d6 days.\
	All unlocked doors/ windows in 60' fly open.\
	Hair falls out, grows back within 24 hours.\
	Caster's face blackened by small explosion.\
	For 1 minute, flammable touch (not worn/ carried).\
	Geyser lifts caster 50' in air until start of next turn.\
	Regain lowest-level expended spell slot.\
	A confused bear appears within 60' for 1 minute.\
	For 1 minute, can only shout when speaking.\
	Grass instantly sprouts to 3' tall within 20' radius, 1 minute.\
	Cast fog cloud centered on self.\
	Caster can only breathe underwater for next minute.\
	Up to 3 creatures of choice in 30':4d10 lightning dmg.\
	Caster falls Unconscious until start of next turn.\
	Frightened by nearest creature until end of next turn.\
	If target dies in next minute, its ghost haunts caster.\
	Everyone in 30': invisible for 1 minute or till atk/ cast.\
	All within 60' saves vs Wis 15 or drops wwhatever they hold.\
	Resistance to all damage for next minute.\
	Everything within 20' pulled 10' toward caster.\
	Random creature within 60' is poisoned for 24 hours.\
	Caster smells like lavender for 1d6 days.\
	Glow brightly for 1 minute; Blind others within 5'.\
	Casters clothes become uncomfortably tight.\
	Cast polymorph on self; Fail save: Sheep form.\
	If spell would kill target, target's extremities fly apart.\
	Illusory butterflies/ flowers flutter in 5' radius 1 min.\
	Caster trapped in a giant glass ball.\
	Take one additional action immediately.\
	Caster's fists become huge, deal 1d8 B dmg, 1 min.\
	Others in 30': 1d10 necro dmg; Gain HP equal to loss.\
	Loud voice ridicules caster on init count 20 for 1 min.\
	Cast mirror image.\
	Caster's arms become tentacles for 1 minute.\
	Cast fly on random creature within 60'.\
	Large floating eye follows caster for 1 hour.\
	Become invisible/ silent for 1 minute or till atk/ cast.\
	Caster's INT and STR swap for 1 hour.\
	If you die in next minute, come back per reincarnate.\
	Caster sees everyone as a decaying corpse for 24h.\
	Size increases by 1 size category for 1 minute.\
	All light sources within 60' radius extinguished.\
	You and all in 30': vulnerable to piercing dmg, 1 min.\
	Caster becomes frightened of a color for 1 hour.\
	Surrounded by faint ethereal music for 1 minute.\
	Caster suffers a head cold for 24 hours.\
	Regain all expended Sorcery Points.\
	Next phrase spoken by caster becomes true";

const splitList = list.split(".");
//for loop to display the array after it is split
for (let i = 0; i < splitList.length; i++) {
	console.log(i + " " + splitList[i]);
}

function roll() {
	//reset rollNum
	let rollNum = 0;
	//generate number 1-100 (0-99 for array purposes)
	rollNum = Math.floor(Math.random() * 99 + 1);
	//show overlay
	document.querySelector(".overlay").style.display = "flex";
	//change rollNum
	document.querySelector(".rollNum").innerHTML = " " + rollNum;
	//chage spellEffect
	document.querySelector(".spellEffect").innerHTML = splitList[rollNum];
	//change addEffect
	const audio = document.querySelector(".btnSound");
	if (!audio) return; //if there's no audio, ends the function
	audio.play();
	audio.currentTime = 0; //rewinds audio to start
}

function closeOverlay() {
	//set overlay to hidden
	document.querySelector(".overlay").style.display = "none";
}
