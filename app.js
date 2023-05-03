const identifiers = [
	{
		type: "losingJobs",
		examples: [
			"Poštanski službenici - Pisma više nisu pisana na papiru, krivac za nagli pad poštanske industrije nesumnjivo je sveprisutni internet.",
			"Radnici u tekstilnoj industriji - Napredak tehnologije gotovo će u potpunosti zamijeniti radnike u većini velikih postrojenja.",
			"Bankarski službenici - Prvo su došli bankomati, zatim smartfon aplikacije za plaćanje, a uskoro bi još više bankarskih poslova mogla voditi umjetna inteligencija. Već danas umjetna inteligencija može obaviti 90% poslova bankara.",
			"Financijski analitičari - Čovjek se na ovom polju ne može više nositi s kapacitetima umjetne inteligencije. Softveri za financijske analize mogu u trenutku predvidjeti trendove na tržištu.",
			"Jednostavni, repetitivni zadatci – tehnologija zamjenjuje ljude u tvornicama već od industrijske revolucije, te je od tada do danas postala sve bolja i bolja u izvođenju kompleksnijih zadataka.",
		],
		buttonPressed: false,
	},
	{
		type: "unreplacableJobs",
		examples: [
			"Skrb o ljudima - Potrebna je komunikacija i razumijevanje, pod ovo spada i zdrastvena skrb.",
			"Obrazovanje - Umjetna inteligencija neće zamijeniti učitelje i profesore. Bar ne u tako skoro vrijeme.",
			"Mediji - Trebat će ljudi koji će članke i tv snimke pisati i snimati što ovisi hoće li ih ljudi čitati i gledati, a to su zadaće koje umjetna inteligencija nikad neće biti sposobni kvalitetno obavljati.",
			"Političari - Političari gotovo sigurno neće moći biti zamijenjeni robotima, jer vještine koje su potrebne za njihovo zanimanje teško može zamijeniti umjetna inteligencija.",
		],
		buttonPressed: false,
	},
	{
		type: "newJobs",
		examples: [
			" Genetski dizajner - dizajner djece - Razvojem genetike raste potencijal za razvoj grane medicine koja će se baviti genetskim inženjeringom na nerođenoj djeci.",
			" Proizvođač dijelova tijela - Osoba koja proizvodi organe kloniranjem.",
			"Kirurg specijalist za povećanje kapaciteta mozga - Ljudski će mozak biti pretrpan informacijama, ti bi kirurzi trebali pomoći smanjiti pritisak na centar za pamćenje.",
			" Menadžer za čuvanje podataka  -  Stručnjak za sigurno spremanje osjetljivih podataka vlada, političkih stranaka, tvrtki ili pojedinaca.",
			" Konzultant za privatnost - Bit će sve više tehnoloških rješenja i ljudi će biti iznimno izloženi dijeljenju privatnih podataka na internetu pa će ti stručnjaci savjetovati kako odlučiti koje i koliko informacija podijeliti sa svijetom.",
			" Stručnjak za skrivanje identiteta - Osobe koje će nam omogućiti da nestanemo s “mreže” bilo zbog životnog izbora, bilo zbog skrivanja od policije.",
			"Dizajner egzoskeletona - Svojevrsni “vanjski robotički kosturi” omogućit će ljudima da trče brže, budu jači i otporniji pa se pretpostavlja da će biti velika potražnja za tim proizvodima.",
			" Dizajner inteligentne odjeće - Rast će zahtjevi da se u odjeću uključe tehnologije i gadgeti, što se već počelo raditi, a dizajneri koji proizvedu takvu odjeću imat će posla u 21. stoljeću.",
		],
		buttonPressed: false,
	},
];
//identifiers used for assigning the correct things to eachother

function handleState(identifiers, button) {
	//button is the button pressed
	const data_Type = button.parentElement.dataset.type;
	const examplesDiv = button.parentElement;
	let identifier = identifiers.find(element => element.type == data_Type);
	console.table({ identifier });
	//finds the right identifier and logs it to the console

	if (identifier.buttonPressed == true) {
		examplesDiv.removeChild(examplesDiv.children[1]);
		console.log("%c Removed child", "color: red");
		return (identifier.buttonPressed = false);
	} //if this bool is true it will mean that the button has been pressed and it will remove all of the contents from the div and se the bool to false

	const examples = document.createElement("ul");
	identifier.examples.forEach(item => {
		const example = document.createElement("li");
		example.innerText = item;

		examples.appendChild(example);
	});
	//appends a <ul> with <li> elements for each "example" in the "examples" array

	examplesDiv.appendChild(examples);
	console.log("%c Added child", "color: lime");
	return (identifier.buttonPressed = true);
}

//function being put to use
const button0 = document.getElementById("showExamples0");
button0.addEventListener("click", event => {
	event.preventDefault();
	handleState(identifiers, button0);
});

const button1 = document.getElementById("showExamples1");
button1.addEventListener("click", event => {
	event.preventDefault();
	handleState(identifiers, button1);
});

const button2 = document.getElementById("showExamples2");
button2.addEventListener("click", event => {
	event.preventDefault();
	handleState(identifiers, button2);
});
