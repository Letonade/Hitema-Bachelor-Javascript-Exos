/*
** Exercice du 18/05/2018
**	Conte Corentin Bachelor - HITEMA
**
*/

/*
**	initialisations
*/

var num = 0;
const fix1 = 2;
const rep2 = "Non on ne peut changer la valeur d'une constante après initialisation.";
const rep3 = "'let' sert de variable à porté limité et donc utilisé dans des cadre restraint.Exemple les for()";
const rep4 = "'let' = porté limité mais variable, 'const' = porté normale mais non variable";
const rep6 = "Non les return ne sont pas nécessaire.";
const rep8 = "L'opérator '...' dit spread ou rest selon l'utilisation sert à récupéré des ensemble de valeur.";
const rep11= "Les mode rest et spread sont utile pour les faire des fonctions avec un nombre d'argument varient";
const rep14= "Avec des '+' ou avec la fonction prévu à cet effet."
const rep25= "Dans ce code on recupere 'nom' et 'val' provenant d'un objet.c'est un argument qui est systématiquement décomposé pour utilisation."

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
var {nom,Annee} = film;
var {Like} = film;

var list = [1,2,3,4,5];
var [c,d] = list;
var a = "hello world";
var obj = {a};
var b = [1,2,3];
var obj2 = {b};
var obj3 = {a,b};
var objComputed = {[a] : "Ma clé est hello world"}
var ids = {
	next: 0,
	get(){this.next += 1;return this.next}
}
const tab1 =[1,2,3,4];
const he = "hello";
const wo = "world";
const myN = "CONTE ";
const myP = "Corentin";

const teamName = "tooling";
const people = [
{name: "Jennie", role: "senior"},
{name: "Ronald", role: "junior"},
{name: "Martin", role: "senior"},
{name: "Anneli", role: "junior"},
];

/*
**	Fonctionnalité
*/
// remplace console.log qui n'est pas reconnu par mon auto complete.

const prt = (a,b) => {console.log("Q" + a +"-: "+ b);}; 

const multiply = (a,b) => {return a*b};
const multiplyDef = (a=10,b=10) => {return a*b};

function getRest(a,b,...c){
  return (a+b+c.reduce((av, ap) => {return av + ap;}));
}

const conc =(a,b) => {return `${a}${b}`};

function texTeam(Name,tm){
	let str;let nb = 0;
	str = `There are ${tm.length} people in the ${Name} team.\n`;
	str += `Their names are `;
	for(let i = 0; i<tm.length;i++){str += `${tm[i]['name']}`; i<(tm.length - 1)?str+=',':str += ".\n";};
	for(let i = 0; i<tm.length;i++){tm[i]['role'] == 'senior'?nb +=1 :nb=nb;};
	str += `${nb} of them have a senior role.`
	return str;
};

function maFunction(){return "maFunction!"};
objComputed['maf'] = maFunction();

function decomposA({a}){return a;};
function decomposAB({a,b}){return a + b;};

/*
** Les classes
*/
class vide{};
class abaff{
	constructor(a,b){
		this.a = a; this.b = b;
	}
	affiche(){
		return (this.a * this.b);
	}
}

class Point{
	constructor(x,y){
		this.x = x; this.y = y;
	}
	plus(p){
		this.x += p.x;
		this.y += p.y;
		return (`Point{x: ${this.x}, y: ${this.y}}`);
	}
}
/*
**	phase de test
*/
console.log("\n_____________________________\n@ Début des Hostilités ci-dessous : \n")
prt(1,fix1);
prt(2,rep2);
prt(3,rep3);
prt(4,rep4);
prt(5,multiply(5,2));
prt(6,rep6);
prt(7,multiplyDef() + " | " + multiplyDef(5));
prt(8,rep8);
prt(9,getRest(1,2,3,15));
prt(10,getRest(...tab1));
prt(11,rep11);
prt(12,conc(he,wo));
prt(13,conc(myN,myP));
prt(14,rep14);
prt(15,"\n" + texTeam(teamName,people));
prt(16,obj.a);
prt(17,obj2.b);
prt(18,obj3.a + " " + obj3.b);
prt(19,objComputed['hello world']);
prt(20,objComputed['maf']);
prt(21,ids.get() + " " + ids.get());
prt(22,c + " " + d + "-- J'utilise 'c' et 'd' car 'a' et 'b' sont déja utilisé.");
prt(23,nom + " | " + Annee);
prt(24,Like);
prt(25,rep25);
prt(26,decomposA(film));film['a']="a";console.log("Q26 suite: " + decomposA(film));
film['b']="b";prt(27,decomposAB(film));
var vvide = new vide;
prt(28,vvide);
var e29 = new abaff(5,2);
prt(29,e29.affiche());
prt(30,new Point(1,2).plus(new Point(2,1)));

console.log("\n_____________________________\n@ Fin des Hostilités\n")


//   /$$$$$$   /$$$$$$  /$$   /$$ /$$$$$$$$ /$$$$$$$$   
//  /$$__  $$ /$$__  $$| $$$ | $$|__  $$__/| $$_____/   
// | $$  \__/| $$  \ $$| $$$$| $$   | $$   | $$         
// | $$      | $$  | $$| $$ $$ $$   | $$   | $$$$$      
// | $$      | $$  | $$| $$  $$$$   | $$   | $$__/      
// | $$    $$| $$  | $$| $$\  $$$   | $$   | $$         
// |  $$$$$$/|  $$$$$$/| $$ \  $$   | $$   | $$$$$$$$   
//  \______/  \______/ |__/  \__/   |__/   |________/   
//
//   /$$$$$$   /$$$$$$  /$$$$$$$  /$$$$$$$$ /$$   /$$ /$$$$$$$$ /$$$$$$ /$$   /$$
//  /$$__  $$ /$$__  $$| $$__  $$| $$_____/| $$$ | $$|__  $$__/|_  $$_/| $$$ | $$
// | $$  \__/| $$  \ $$| $$  \ $$| $$      | $$$$| $$   | $$     | $$  | $$$$| $$
// | $$      | $$  | $$| $$$$$$$/| $$$$$   | $$ $$ $$   | $$     | $$  | $$ $$ $$
// | $$      | $$  | $$| $$__  $$| $$__/   | $$  $$$$   | $$     | $$  | $$  $$$$
// | $$    $$| $$  | $$| $$  \ $$| $$      | $$\  $$$   | $$     | $$  | $$\  $$$
// |  $$$$$$/|  $$$$$$/| $$  | $$| $$$$$$$$| $$ \  $$   | $$    /$$$$$$| $$ \  $$
//  \______/  \______/ |__/  |__/|________/|__/  \__/   |__/   |______/|__/  \__/
