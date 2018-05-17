/*
** Exercice du 17/05/2018
**	Conte Corentin Bachelor - HITEMA
**
*/

/*
**	initialisations
*/

//énoncé
var film = {
	'nom': "Forrest Gump",
	'Annee' : 1994,
	'Durée' : "2h20min",
	'Réalisateur' : "Robert Zemeckis",
	'Like' : 100806,

	year : function(){
		console.log(this.Annee);
	}
};

var films = [
{
	'nom': 			"Forrest Gump",
	'Annee' : 		1994,
	'Durée' : 		"2h20min",
	'Réalisateur' : "Robert Zemeckis",
	'Acteurs': 		['Tom Hanks'],
	'Genre': 		['Comédie dramatique', 'Romance'],
	'Like' : 		100806,
	'Privé': 		true
},
{
	'nom': 			"Django Unchained",
	'Annee' : 		2013,
	'Durée' : 		"2h44min",
	'Réalisateur' : "Quentin Tarantino",
	'Acteurs': 		['Jamie Foxx', 'Christoph Waltz'],
	'Genre': 		['Western'],
	'Like' : 		10030,
	'Privé': 		true
}
];

/*
**	Fonctionnalité
*/

function arrow(){
	console.log("hello World");
}

function prt(Delta){
	console.log(Delta);
}

function multiply(Alpha,Beta) {
	return (Alpha * Beta);
}

function year(film){
	return(film['Annee']);
}

function DoubleTime(film){
	film['Like'] *= 2;
}

function yearUp2000(film){
	return ( film['Annee'] > 2000 ? true : false);
}

function likeUp1000(film){
	return ( film['Like'] > 1000 ? true : false);
}

function addGenre(falm,genre){
	falm['genre'] = genre;
}

function allLikes(falms){
	let Nb;
	Nb = 0;
	for (var i = falms.length - 1; i >= 0; i--) {
		Nb += falms[i]['Like'];
		console.log(falms[i]['nom'] + " : " + falms[i]['Like']);
	}
	return (Nb);
}

function allGenre(falms){
	let grs = [];
	for (var i = falms.length - 1; i >= 0; i--) {
		for (var j = falms[i]['Genre'].length - 1; j >= 0; j--) {
			grs.push(falms[i]['Genre'][j]);
		}
	}
	return grs;
}

function privateList(falms){
	let noms = [];
	for (var i = falms.length - 1; i >= 0; i--) {
		if (falms[i]['Privé'] === true) {
			noms.push(falms[i]['nom']);
		}
	}
	return noms;
}

function recent(falms){
	let rct;
	rct = 0;
	for (var i = falms.length - 1; i >= 0; i--) {
		if (falms[i]['Annee'] > rct) {
		rct = falms[i]['Annee'];
		}
	}
	return rct;
}

function manyGenre(falms,genre){
	let Nb;
	Nb = 0;
	for (var i = falms.length - 1; i >= 0; i--) {
		for (var j = falms[i]['Genre'].length - 1; j >= 0; j--) {
			if (falms[i]['Genre'][j] == genre){
				Nb += 1;
			}
		}
	}
	return Nb;
}

function manyActorPlay(falms,actor){
	let Nb;
	Nb = 0;
	for (var i = falms.length - 1; i >= 0; i--) {
		for (var j = falms[i]['Acteurs'].length - 1; j >= 0; j--) {
			if (falms[i]['Acteurs'][j] == actor){
				Nb += 1;
			}
		}
	}
	return Nb;
}

function manyYearUp(falms,year){
	let Nb;
	Nb = 0;
	for (var i = falms.length - 1; i >= 0; i--) {
		if (falms[i]['Annee'] > year){
			Nb += 1;
		}
	}
	return Nb;
}

/*
**	phase de test
*/
console.log("\n_____________________________\n@ Début des Hostilités ci-dessous : \n")
arrow();
prt("Head");
prt(multiply(5,2));
//film && film.year();
prt(year(film));
DoubleTime(film);			prt(film['Like']);
prt(yearUp2000(film));
prt(likeUp1000(film));
addGenre(film,"toplel");	prt(film['genre']);
prt(allLikes(films));
prt(allGenre(films));
prt(privateList(films));
prt(recent(films));
prt(manyGenre(films,"Western"));
prt(manyActorPlay(films,"Quentin Tarantino") + " | " + manyActorPlay(films,"Jamie Foxx"));
prt(manyYearUp(films,1000));
console.log("\n_____________________________\n@ Fin des Hostilités\n")